# R33 gallery · rendering notes

Rendered on 17 November 2026 in Blender 4.5.15 LTS using Cycles on the assistant's cloud computer.

## Still images

- Six matched views: front three-quarter, rear three-quarter and turret/tracking-radar detail, in camouflage and charcoal.
- 1600 × 1100 pixels; adaptive sampling, with 48 Cycles samples for camouflage and 96 for charcoal. Both use standard denoising. Charcoal is denoised in a separate Blender image-only pass to avoid exceeding render memory; its geometry and appearance are not manually retouched.
- Orthographic cameras, three area lights and a neutral studio world. AgX, Medium High Contrast, +0.6 exposure.
- Original geometry, materials, textures and saved pose retained. Source lights are replaced by presentation lights only in the temporary rendering scene. No model file is saved or distributed by this update.
- Unused second-scene data are unloaded in memory for each render to fit the cloud computer's memory limit; the original Blender file is preserved byte-for-byte.
- The original source was hash-verified before rendering. Embedded project scripts were disabled. Source file identities and private research records are not distributed here.
- Published JPEGs are high-quality encodings of the rendered PNGs. No generative imagery, composite scenery, shape repair or manual image retouching is used.

These views show an accepted work-in-progress authoring baseline, not dimensional certification or the currently published game model. Some components remain unfinished. See the [project overview](../../README.md#status-and-limits) and [rights notices](../../RIGHTS.md).
