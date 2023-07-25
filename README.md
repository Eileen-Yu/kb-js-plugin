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
# 1. Display help info for `init` / `create api` / `create webhook` subcommand
EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder init --plugins=kb-js-plugin/v1 --help

EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder create api --plugins=kb-js-plugin/v1 --help

EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder create webhook --plugins=kb-js-plugin/v1 --help


# 2. scaffold the project by `init` subcommand with valid flag `--domain`
EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder init --plugins=kb-js-plugin/v1 --domain eileen.io


# 3. create an api for the project by `create api` subcommand with GVK
EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder create api --plugins=kb-js-plugin/v1 --group webapp --version v1 --kind Guestbook


# 4. create a webhook for the project by `create webhook` subcommand with GVK
EXTERNAL_PLUGINS_PATH=/Users/eileen/programming/kb-js-plugin/dist/ \
  kubebuilder create webhook --plugins=kb-js-plugin/v1 --group webapp --version v1 --kind Guestbook

```

3. Check the output

The plugin triggered by `init` will generate the PROJECT file, and another file `initFile` with the domain you specified.

The plugin triggered by `create api` will generate a file `apiFile` with the GVK you specified.

The plugin triggered by `create webhook` will generate a file `webhookFile` with the GVK you specified.
