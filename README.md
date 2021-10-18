<p align="center">
  <img src="./logo.svg" width="100">
</p>

<h1 align="center">Assemble</h1>

<p align="center">Project Documentation Generator</p>

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
