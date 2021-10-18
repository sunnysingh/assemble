export type Link = {
  name: string;
  path: string;
  children: Link[];
};

export function renderLink(link: Link, indentLevel = 0): string {
  if (link.children.length === 0) {
    return `- [${link.name}](${link.path})`;
  }

  const indent = indentLevel > 1 ? '  '.repeat(indentLevel) : '';
  const nextIndentLevel = indentLevel + 1;

  return `${indent}- ${link.name}\n  ${indent}${link.children
    .map(innerLink => renderLink(innerLink, nextIndentLevel))
    .join('\n')}`;
}

export function renderSidebar(links: Link[]): string {
  return links.map(renderLink).join('\n');
}
