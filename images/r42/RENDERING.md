# R42 rendering provenance

The gallery contains the 33 supplied model-only R42 JPEGs: 24 Base and 9 Equipped. Each is verified against its image sidecar and the corresponding native model hash in the private delivery record. R41 comparison renders, reference photographs, annotations and comparison boards are excluded.

The images are 1200 × 800, rendered in Blender 4.5.16 LTS with Cycles, 24 samples, standard denoising, OptiX, a 1024-pixel texture limit and the established studio setup. Color management is AgX Medium High Contrast at +0.6 exposure. The driver’s visor is temporarily opened for the `hatch` previews; its saved pose is retained in the native files. Public JPEG metadata is removed without reencoding, and decoded pixels remain identical to the supplied images. No renders or Blender source files are regenerated for this publication.

Base leads with its Camo overview. Equipped leads with the Camo and Charcoal overviews side by side. Both native files include the painted scenes and neutral clay, with independent reopen PASS and all 247 images packed. Native files follow the private Drive multipart workflow; they are not included in Git.

The turntables linked from the overview retain their R41 labels and belong to the earlier checkpoint. The R41 gallery, all previous media and RIGHTS.md attribution are preserved.

[Image checksums and model identities](manifest.json) · [Base download details](../../models/R42-Base.md) · [Equipped download details](../../models/R42-Equipped.md) · [Rights and attribution](../../RIGHTS.md)

[Post-publication Blender download verification](DOWNLOAD-VERIFICATION.json): both published private links were followed, all eight parts per model were downloaded and checked, and the supplied helper restored the exact delivery bytes and SHA-256 in a separate folder. Both original masters retain their hashes.
