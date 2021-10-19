🚨 WORK IN PROGRESS

***

<p align="center">
  <img src="/logo-81c346fd8b.svg" width="100">
</p>

<h1 align="center">Assemble</h1>

<p align="center">Project Documentation Generator</p>

</center>

***

<!-- toc -->

*   [What is Assemble?](#what-is-assemble)
*   [Usage](#usage)
*   [Commands](#commands)

<!-- tocstop -->

# What is Assemble?

Assemble is a single-purpose tool meant to solve common documentation problems for project contributors.

Imagine that you are brand new to a project. You clone the repository and open the `README.md` file to get started. You then want to update some code that looks quite complex, and you wonder if there is some documentation for it. Where do you look? If you're lucky, the documentation exists but it's in another app. Not only is the documentation hard to find, but it also makes it hard for developers to update that documentation.

This is where Assemble comes in. It reduces the obstacle of writing documentation by enabling developers to write it in Markdown files right next to where their code is. Here is an example file structure:

    .
    ├── features/
    │   └── auth/
    │       ├── index.js
    │       └── readme.md
    └── readme.md

Assemble would build a site with two pages:

*   Main Readme
*   Auth Readme

The site can then easily be deployed to any static site host such as GitHub Pages from the same project repository to ensure that documentation stays in sync. This enables existing contributors to code and document at the same time, while also empowering newcomers to browse through the documentation site to learn about the codebase.

# Usage

<!-- usage -->

```sh-session
$ npm install -g @assembledocs/cli
$ assemble COMMAND
running command...
$ assemble (-v|--version|version)
@assembledocs/cli/0.0.0 darwin-x64 node-v14.15.5
$ assemble --help [COMMAND]
USAGE
  $ assemble COMMAND
...
```

<!-- usagestop -->

# Commands

<!-- commands -->

*   [`assemble build [PATH]`](#assemble-build-path)
*   [`assemble help [COMMAND]`](#assemble-help-command)

## `assemble build [PATH]`

build static site

    USAGE
      $ assemble build [PATH]

    OPTIONS
      -h, --help           show CLI help
      --distPath=distPath  [default: .assembledocs/dist]

*See code: [src/commands/build.ts](https://github.com/sunnysingh/assemble/blob/v0.0.0/src/commands/build.ts)*

## `assemble help [COMMAND]`

display help for assemble

    USAGE
      $ assemble help [COMMAND]

    ARGUMENTS
      COMMAND  command to show help for

    OPTIONS
      --all  see all commands in CLI

*See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v3.2.3/src/commands/help.ts)*

<!-- commandsstop -->
