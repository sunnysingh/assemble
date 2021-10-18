<center>

<img src="./logo.svg" width="100">

# Assemble

Project Documentation Generator

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@sunnysingh/assemble.svg)](https://npmjs.org/package/@sunnysingh/assemble)
[![Downloads/week](https://img.shields.io/npm/dw/@sunnysingh/assemble.svg)](https://npmjs.org/package/@sunnysingh/assemble)
[![License](https://img.shields.io/npm/l/@sunnysingh/assemble.svg)](https://github.com/sunnysingh/assemble/blob/master/package.json)

</center>

---

<!-- toc -->

- [Usage](#usage)
- [Commands](#commands)
<!-- tocstop -->

# Usage

<!-- usage -->

```sh-session
$ npm install -g @sunnysingh/assemble
$ assemble COMMAND
running command...
$ assemble (-v|--version|version)
@sunnysingh/assemble/0.0.0 darwin-x64 node-v14.15.5
$ assemble --help [COMMAND]
USAGE
  $ assemble COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

- [`assemble build [PATH]`](#assemble-build-path)
- [`assemble help [COMMAND]`](#assemble-help-command)

## `assemble build [PATH]`

Build static site.

```
USAGE
  $ assemble build [PATH]

OPTIONS
  -h, --help           show CLI help
  --distPath=distPath  [default: .assemble]

EXAMPLE
  $ assemble build
  Static site built!
```

_See code: [src/commands/build.ts](https://github.com/sunnysingh/assemble/blob/v0.0.0/src/commands/build.ts)_

## `assemble help [COMMAND]`

display help for assemble

```
USAGE
  $ assemble help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)_

<!-- commandsstop -->
