# .printai Project Format

The `.printai` format is planned as a versioned zip container with a schema-validated `manifest.json` and separately stored assets.

```txt
project.printai
  manifest.json
  assets/
    images/
    models/
    textures/
    thumbnails/
    slicing/
  history/
  logs/
```

The manifest is versioned and all archive paths must be validated before reading assets to prevent path traversal and unsafe file handling.
