import { themes as prismThemes } from 'prism-react-renderer';
import type { Config } from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'EvmBook',
  tagline: 'Advanced Manual for EVM-Compatible Blockchain Development',
  favicon: 'img/favicon.ico',


  // Set the production url of your site here
  url: 'https://evmbook.jacklee.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'evmbook', // Usually your GitHub org/user name.
  projectName: 'evmbook', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'EvmBook',
      // logo: {
      //   alt: 'My Site Logo',
      //   src: 'img/logo.svg',
      // },
      items: [

        // { to: '/blog', label: 'Solidity', position: 'left' },
        // { to: '/docs/solidity/', label: 'Solidity', position: 'left', sidebarId: 'soliditySidebar' },
        // { to: '/docs/layer2', label: 'Layer2', position: 'left', sidebarId: 'layer2Sidebar' },
        // { to: '/chains', label: 'Chains', position: 'left' },
        { to: '/docs/security', label: 'Contract Security', position: 'left', sidebarId: 'securitySidebar' },
        { to: '/docs/security', label: 'Gas Optimization', position: 'left', sidebarId: 'securitySidebar' },
        {
          to: '/', label: 'Building Dapp', type: 'dropdown', items: [
            { to: '/docs/solidity/solidity-basic', label: 'Uniswap', sidebarId: 'solidityBasicSidebar' },
            // { to: '/docs/solidity/gas-optimization', label: 'Gas Optimization',sidebarId: 'gasOptimizationSidebar' },
          ]
        },
        {
          type: 'docSidebar',
          sidebarId: 'evmInternalsSidebar',
          position: 'left',
          label: 'Evm Internals',
        },
        {
          href: 'https://github.com/jackleeio/evmbook',
          label: 'GitHub',
          position: 'right',
        },
        { to: '/docs/security', label: 'Ethers.js', position: 'left', sidebarId: 'securitySidebar' },
        { to: '/docs/security', label: 'Web3.py', position: 'left', sidebarId: 'securitySidebar' },
        { to: '/blog', label: 'Tools', position: 'left', },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EvmBook . Built by JackLee`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
