# R38 gallery — rendering notes

Accepted exterior dated 19 November 2026. All new media are native model-only renders from the final corrected rear-light R38 source, SHA-256 `0ad178008fa6608aa5a978e93e117279a6cd2fdc556465c8626ca5556a6c2f09`, 789,453,591 bytes. The accepted master and named render copy were verified byte-for-byte. The native file stays in the private source workflow; no new public Blender binary is included.

## Stills

Six new matched **1600 × 1100** views pair Camo and Charcoal front three-quarter, rear three-quarter and turret/front-radar detail. Two matching neutral-clay overview renders are also included. Blender **4.5.16 LTS**, Cycles with NVIDIA OptiX, **96 samples**, adaptive sampling and standard denoising. Each painted finish pair uses identical orthographic camera placement, framing, three area lights, studio world and color management: AgX, Medium High Contrast, +0.6 exposure. The neutral-clay overviews use the same studio and cameras with −0.4 exposure to retain the bright clay surface detail.

The roof boxes and stern chest are fitted as saved. The search radar and gun assemblies retain their saved poses. Native geometry, UVs, material assignments, authored local transforms and parenting were checked before and after rendering. World matrices of viewport-hidden markings are lazily evaluated by Blender at render time; their authored transforms are retained. Source lights/world and cameras are replaced only in memory for presentation. Neutral clay uses the native neutral scene's material override. Embedded project scripts are disabled. No Blender source is resaved, and no geometry or paint is repaired for the gallery.

The published JPEGs are high-quality encodings of the rendered PNGs, without embedded local file paths or project metadata. No reference-photo pixels, photo comparison boards, generative imagery or manual image retouching are included. The 247 packed file images belong to the verified native source; image or source-byte availability does not grant a new whole-model license.

## Turntable

The fresh R38 Camo camera orbit contains **96 independently rendered Cycles frames**, **960 × 660** pixels, **32 samples** per frame. The stationary vehicle and saved articulation remain fixed while the camera makes a full turn. The H.264 MP4 plays at **24 fps for four seconds**. The looping GIF uses every second frame at 800 × 550, 12 fps, for the same four-second orbit. Neither encoding uses generated or interpolated intermediate views.

Representative frames across the complete orbit were visually inspected, along with all matched stills. [Media manifest](manifest.json) records file sizes, SHA-256, camera settings and validation results. The private source archive has its own separate packaging and verification records.

The previous [R33 gallery](../../R33-ARCHIVE.md) and all `images/r33/` files are preserved unchanged. [RIGHTS.md and its attribution](../../RIGHTS.md), the Kiichi notice and Detail10 history are retained unchanged.
