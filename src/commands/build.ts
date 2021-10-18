import {Command, flags} from '@oclif/command';
import * as fs from 'fs-extra';
import * as path from 'path';
import glob from 'tiny-glob';

import {createHtml} from '../html-template';
import {escapeRegExp} from '../utils';

export default class Build extends Command {
  static description = 'Build static site.';

  static examples = [
    `$ assemble build
Static site built!
`,
  ];

  static flags = {
    help: flags.help({char: 'h'}),

    // FIXME: Breaks if a path is a nested dir. Example: `.assemble/dist`
    distPath: flags.string({default: '.assemble'}),
  };

  static args = [{name: 'path', default: process.cwd()}];

  async run() {
    const {args, flags} = this.parse(Build);

    // TODO: Use .gitignore in project dir if available.
    // TODO: Ignore any dirs that start with a period.
    const ignorePaths = ['node_modules', 'dist', 'build', flags.distPath];

    const baseDistPath = path.join(args.path, flags.distPath);

    const rootMarkdownPaths = await glob(`${args.path}/*.md`);
    const nestedMarkdownPaths = await glob(
      `${args.path}/!(${ignorePaths.map(escapeRegExp).join('|')})/**/*.md`
    );
    const allMarkdownPaths = [...rootMarkdownPaths, ...nestedMarkdownPaths];

    await Promise.all(
      allMarkdownPaths.map(async markdownPath => {
        await fs.ensureDir(path.join(baseDistPath, path.dirname(markdownPath)));
        return fs.copyFile(markdownPath, path.join(baseDistPath, markdownPath));
      })
    );

    const html = createHtml();

    await fs.outputFile(path.join(baseDistPath, 'index.html'), html);

    this.log('Static site build!');
  }
}
