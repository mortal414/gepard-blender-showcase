(() => {
  "use strict";

  const wrap = (index, count) => ((index % count) + count) % count;

  for (const orbit of document.querySelectorAll("[data-orbit]")) {
    const viewport = orbit.querySelector("[data-orbit-viewport]");
    const image = orbit.querySelector("[data-orbit-image]");
    const controls = orbit.querySelector("[data-orbit-controls]");
    const previous = orbit.querySelector("[data-orbit-prev]");
    const next = orbit.querySelector("[data-orbit-next]");
    const status = orbit.querySelector("[data-orbit-status]");
    const hint = orbit.querySelector("[data-orbit-hint]");
    const count = Number(orbit.dataset.orbitCount || 36);
    const start = Number(orbit.dataset.orbitStart || 0);
    const path = orbit.dataset.orbit;

    if (!viewport || !image || !controls || !previous || !next || !status ||
        !path || !Number.isInteger(start) || !Number.isInteger(count) || count < 2) {
      continue;
    }

    const framePath = path.includes("{frame}") ? path : path.replace(/\/?$/, "/{frame}.webp");
    const digits = Math.max(2, String(count - 1).length);
    const frameUrl = index => framePath.replace("{frame}", String(index).padStart(digits, "0"));
    const requests = new Map();
    let requested = wrap(start, count);
    let displayed = requested;
    let version = 0;
    let pointer;
    let scheduled;

    function fetchFrame(index) {
      if (!requests.has(index)) {
        const url = frameUrl(index);
        const promise = new Promise(resolve => {
          const frame = new Image();
          frame.onload = () => {
            if (typeof frame.decode === "function") {
              frame.decode().then(() => resolve(url), () => resolve(url));
            } else {
              resolve(url);
            }
          };
          frame.onerror = () => {
            requests.delete(index);
            resolve(null);
          };
          frame.src = url;
        });
        requests.set(index, promise);
      }
      return requests.get(index);
    }

    function announce(unavailable) {
      const current = "View " + (displayed + 1) + " of " + count;
      status.textContent = unavailable ? "View unavailable. Showing " + current.toLowerCase() + "." : current;
    }

    function preloadAdjacent(index) {
      fetchFrame(wrap(index - 1, count));
      fetchFrame(wrap(index + 1, count));
    }

    async function showFrame(index, speak, prefetch) {
      requested = wrap(index, count);
      const current = requested;
      const requestVersion = ++version;

      if (current === displayed) {
        if (speak) {
          announce(false);
        }
        return;
      }

      const url = await fetchFrame(current);
      if (requestVersion !== version) {
        return;
      }

      if (url) {
        image.removeAttribute("srcset");
        image.removeAttribute("sizes");
        image.src = url;
        displayed = current;
        if (prefetch) {
          preloadAdjacent(current);
        }
      } else {
        requested = displayed;
      }

      if (speak) {
        announce(!url);
      }
    }

    function cancelScheduledFrame() {
      if (scheduled !== undefined) {
        cancelAnimationFrame(scheduled);
        scheduled = undefined;
      }
    }

    function step(amount) {
      cancelScheduledFrame();
      showFrame(requested + amount, true, true);
    }

    function dragFrame(event) {
      const pixelsPerFrame = Math.max(5, viewport.clientWidth / count);
      return pointer.frame + Math.round((pointer.x - event.clientX) / pixelsPerFrame);
    }

    previous.addEventListener("click", () => step(-1));
    next.addEventListener("click", () => step(1));

    viewport.addEventListener("keydown", event => {
      if (event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) {
        return;
      }
      if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
        event.preventDefault();
        step(event.key === "ArrowLeft" ? -1 : 1);
      }
    });

    viewport.addEventListener("pointerdown", event => {
      if (!event.isPrimary || event.button !== 0 || pointer) {
        return;
      }
      pointer = {id: event.pointerId, x: event.clientX, frame: requested};
      viewport.setPointerCapture(event.pointerId);
      viewport.classList.add("is-dragging");
      if (event.pointerType === "mouse") {
        viewport.focus({preventScroll: true});
      }
    });

    viewport.addEventListener("pointermove", event => {
      if (!pointer || pointer.id !== event.pointerId) {
        return;
      }
      const index = dragFrame(event);
      if (wrap(index, count) === requested) {
        cancelScheduledFrame();
        return;
      }
      cancelScheduledFrame();
      scheduled = requestAnimationFrame(() => {
        scheduled = undefined;
        showFrame(index, false, false);
      });
    });

    function endDrag(event, completed) {
      if (!pointer || pointer.id !== event.pointerId) {
        return;
      }
      const index = completed ? dragFrame(event) : requested;
      pointer = undefined;
      cancelScheduledFrame();
      viewport.classList.remove("is-dragging");
      if (viewport.hasPointerCapture(event.pointerId)) {
        viewport.releasePointerCapture(event.pointerId);
      }
      showFrame(index, true, true);
    }

    viewport.addEventListener("pointerup", event => endDrag(event, true));
    viewport.addEventListener("pointercancel", event => endDrag(event, false));
    viewport.addEventListener("lostpointercapture", event => endDrag(event, false));

    orbit.addEventListener("focusin", () => preloadAdjacent(displayed), {once: true});
    viewport.tabIndex = 0;
    viewport.setAttribute("role", "group");
    if (!viewport.hasAttribute("aria-label") && !viewport.hasAttribute("aria-labelledby")) {
      viewport.setAttribute("aria-label", "360-degree view");
    }
    image.draggable = false;
    controls.hidden = false;
    if (hint) {
      hint.hidden = false;
    }
    announce(false);
  }
})();
