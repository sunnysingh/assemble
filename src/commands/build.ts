import {Command, flags} from '@oclif/command';
import * as fs from 'fs-extra';
import * as path from 'path';
import globby from 'globby';

import {renderDocument, renderSidebar, Link} from '../templates';

export default class Build extends Command {
  static description = 'build static site';

  static flags = {
    help: flags.help({char: 'h'}),
    distPath: flags.string({default: '.assembledocs/dist'}),
  };

  static args = [{name: 'path', default: process.cwd()}];

  async run() {
    const {args, flags} = this.parse(Build);

    const ignorePaths = [flags.distPath];

    const baseDistPath = path.join(args.path, flags.distPath);

    const markdownPaths = await globby('**/*.md', {
      cwd: args.path,
      ignore: ignorePaths,
      gitignore: true,
      dot: false,
    });

    const sidebarLinks: Link[] = [];
    const level = {result: sidebarLinks};

    markdownPaths.forEach(path => {
      path.split('/').reduce<Record<string, any>>((prev, name) => {
        if (!prev[name]) {
          prev[name] = {result: []};
          prev.result.push({name, path, children: prev[name].result});
        }

        return prev[name];
      }, level);
    });

    await fs.emptyDir(baseDistPath);

    await Promise.all(
      markdownPaths.map(async markdownPath => {
        await fs.ensureDir(path.join(baseDistPath, path.dirname(markdownPath)));
        return fs.copyFile(markdownPath, path.join(baseDistPath, markdownPath));
      })
    );

    const html = renderDocument();
    const sidebar = renderSidebar(sidebarLinks);

    await Promise.all([
      fs.outputFile(path.join(baseDistPath, 'index.html'), html),
      fs.outputFile(path.join(baseDistPath, '_sidebar.md'), sidebar),
    ]);

    this.log('✨ Static site built!');
  }
}
