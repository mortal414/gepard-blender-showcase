# R41 gallery — rendering provenance

The public gallery uses exactly the 15 supplied R41 model renders: 10 Base and 5 Equipped. R40 renders, reference photographs, annotation sheets, private comparison boards and review-page images are excluded.

Each supplied image is checked against its sidecar's image SHA-256 and the corresponding native R41 model hash. Public JPEG metadata is removed without reencoding; decoded pixels remain identical to the supplied renders. No Blender model is changed or resaved and no renders are regenerated for this update.

The supplied images are 1040 × 700, rendered in Blender 4.5.16 LTS with Cycles, 16 samples, denoising, a studio setup and AgX Medium High Contrast at +0.6 exposure. These are native Blender renders, with no reference-photo compositing, generative imagery or manual image retouching.

Base is the default, with `R41_Base_Camo_overall.jpg` as the cover. Equipped leads with the Camo and Charcoal overviews side by side. Each variant has a separate private Blender download and includes Camo, Charcoal and neutral clay. Native receipts record independent reopen PASS, all 247 images packed and 16 equipment-state checks per scene.

[R41 revision notes](../../HISTORY.md#r41--current-showcase)

The R39 gallery is preserved unchanged in [R39-ARCHIVE.md](../../R39-ARCHIVE.md). R38, R33 and Detail10 media and galleries remain intact, including the historical turntables. [RIGHTS.md and attribution](../../RIGHTS.md) are unchanged. This update concerns the Blender showcase; the Reforger port remains a separate task.

[Full R41 gallery](../../galleries/R41.md) · [Model overview](../../README.md)

[Base model details](../../models/R41-Base.md) · [Equipped model details](../../models/R41-Equipped.md)
