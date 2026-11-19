# R41 gallery — rendering provenance

The still gallery uses the 15 supplied R41 model renders: 10 Base and 5 Equipped. R40 renders, reference photographs, annotation sheets, private comparison boards and review-page images are excluded.

Each supplied image is checked against its sidecar's image SHA-256 and the corresponding native R41 model hash. Public JPEG metadata is removed without reencoding; decoded pixels remain identical to the supplied renders. The supplied stills are retained unchanged. Fresh turntables are rendered separately from verified named working copies; no native Blender model is resaved.

The supplied images are 1040 × 700, rendered in Blender 4.5.16 LTS with Cycles, 16 samples, denoising, a studio setup and AgX Medium High Contrast at +0.6 exposure. These are native Blender renders, with no reference-photo compositing, generative imagery or manual image retouching.

Base is the default, with `R41_Base_Camo_overall.jpg` as the cover. Equipped leads with the Camo and Charcoal overviews side by side. Each variant has a separate private Blender download and includes Camo, Charcoal and neutral clay. Native receipts record independent reopen PASS, all 247 images packed and 16 equipment-state checks per scene.

[R41 revision notes](../../HISTORY.md#r41--current-showcase)

The R39 gallery is preserved unchanged in [R39-ARCHIVE.md](../../R39-ARCHIVE.md). R38, R33 and Detail10 media and galleries remain intact, including the historical turntables. [RIGHTS.md and attribution](../../RIGHTS.md) are unchanged. This update concerns the Blender showcase; the Reforger port remains a separate task.

[Full R41 gallery](../../galleries/R41.md) · [Model overview](../../README.md)

[Base model details](../../models/R41-Base.md) · [Equipped model details](../../models/R41-Equipped.md)

## R41 turntables

Four fresh model-only camera orbits show Base and Equipped in Camo and Charcoal. Each is rendered from its corresponding R41 native source, with the authored geometry, UVs, material assignments and local pose checked before and after rendering. Original masters and working copies retain their recorded byte sizes and SHA-256 hashes. Embedded scripts are disabled; camera, lighting and render changes stay in memory.

Each orbit contains **144 independently rendered Cycles frames**, **960 × 660**, **32 samples**, standard denoising, NVIDIA OptiX and a 1024-pixel texture limit. The studio, AgX Medium High Contrast and +0.6 exposure match the supplied R41 presentation. The vehicle remains stationary while an orthographic camera completes one revolution.

The H.264 MP4 is **six seconds at 24 fps**. The looping **720 × 495 GIF is 12 fps**, using every second rendered frame. No intermediate frames are generated or interpolated. All 144 frames in each orbit have distinct hashes and retain a border margin. Every MP4 and GIF is fully decoded during verification; quarter-turn frames are visually reviewed.

[Turntable checksums and verification](turntables-manifest.json) · [Current overview and turntables](../../README.md) · [Both finishes](../../galleries/R41.md)
