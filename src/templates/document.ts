type Document = {
  title?: string;
  favicon?: string;
};

export function renderDocument({
  title = 'Docs',
  favicon = '📖',
}: Document = {}) {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>${title}</title>

      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width,initial-scale=1" />

      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${favicon}</text></svg>"
      />

      <!-- TODO: Copy assets locally for offline support -->
      <link rel="stylesheet" href="https://unpkg.com/docsify@4.12.1/themes/vue.css" />
    </head>
    <body>
      <div id="app"></div>

      <script>
        window.$docsify = {
          name: '${title}',
          nameLink: '/#/',
          loadSidebar: true,

          // Use TOC Plugin instead of the sidebar.
          maxLevel: 0,
          subMaxLevel: 0,
          toc: {
            tocMaxLevel: 5,
            target: 'h2, h3, h4, h5, h6'
          },
        };
      </script>

      <!-- TODO: Copy assets locally for offline support -->
      <script src="https://unpkg.com/docsify@4.12.1/lib/docsify.min.js"></script>
      <script src="https://unpkg.com/docsify@4.12.1/lib/plugins/search.min.js"></script>
      <script src="https://unpkg.com/docsify-plugin-toc@1.2.1/dist/docsify-plugin-toc.min.js"></script>
      <script src="https://unpkg.com/docsify-copy-code@2.1.1/dist/docsify-copy-code.min.js"></script>
      <script src="https://unpkg.com/prismjs@1.25.0/components/prism-python.min.js"></script>
      <script src="https://unpkg.com/prismjs@1.25.0/components/prism-jsx.min.js"></script>
      <script src="https://unpkg.com/prismjs@1.25.0/components/prism-typescript.min.js"></script>
      <script src="https://unpkg.com/prismjs@1.25.0/components/prism-tsx.min.js"></script>
    </body>
  </html>
  `.trim();
}
