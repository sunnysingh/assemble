declare module 'remark-copy-linked-files' {
  import type {Attacher} from 'unified';
  let root: Attacher<[{destinationDir: string}]>;
  export = root;
}
