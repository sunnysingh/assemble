export type Link = {
  name: string;
  path: string;
  children: Link[];
};

export function renderLink(link: Link, indentLevel = 0): string {
  if (link.children.length === 0) {
    return `${'  '.repeat(indentLevel)}- [${link.name}](${link.path})\n`;
  }

  const indent = indentLevel > 0 ? '  '.repeat(indentLevel) : '';
  const nextIndentLevel = indentLevel + 1;

  return `${indent}- ${link.name}\n\n${indent}${link.children
    .map(innerLink => renderLink(innerLink, nextIndentLevel))
    .join('\n')}`;
}

export function renderSidebar(links: Link[]): string {
  console.log(JSON.stringify(links, null, 2));

  return links.map(link => renderLink(link)).join('\n');
}
