# R47 rendering provenance

The 16 supplied PNGs are native model-only renders from the reviewed R47 source files: eight Base and eight Equipped. Each image is checked against its sidecar image hash and the corresponding model's release hash. The preview pose is recorded in the image manifest. Interior views use the supplied open-hatch presentation poses; the native models retain their saved states.

Public copies retain the original PNG image data, alpha and color-management chunks. Embedded text, EXIF and timestamp metadata are removed to exclude local file paths. Decoded RGBA pixels are verified identical to the originals. No images are regenerated or retouched, and no Blender file is resaved for publication. The renders use Cycles at 32 samples; image sizes, cameras and source identities are recorded in the manifest.

Base leads with `front.png`; Equipped leads with `rear.png` to show the optional stowage. Both models include Camo, Charcoal and neutral clay scenes, with independent reopen PASS and all 248 images packed. The supplied Base previews use Camo and Equipped previews use Charcoal. Native source files follow the established private Drive multipart workflow. Reference photos and private review boards remain local.

The earlier R42 gallery and all earlier media remain intact. Turntables retain their R41 labels. RIGHTS.md and its attribution are unchanged.

[Image checksums and model identities](manifest.json) · [Base download](../../models/R47-Base.md) · [Equipped download](../../models/R47-Equipped.md) · [Rights and attribution](../../RIGHTS.md)
