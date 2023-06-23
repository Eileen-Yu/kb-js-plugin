# An External Plugin for Kubebuilder

A sample external plugin written in Javascript.


## Quick Start

1. Build the js plugin into an executable
```shell
# Install Dependencies
npm ci

# Build an executable into dist/kb-js-plugin/v1/kb-js-plugin
npm run build
```

2. Load the plugin and run kb command

```shell
EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder init --plugins=kb-js-plugin/v1
```

3. Check the output
The plugin triggered by `init` will generate two files `file1` and `file2`.
