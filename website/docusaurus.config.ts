import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';


const config: Config = {
    title: 'Business4s',
    tagline: 'Scala Community Focused On Business Problems',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    url: 'https://business4s.github.io/',
    baseUrl: '/',
    organizationName: 'business4s',
    projectName: 'business4s.github.io',
    trailingSlash: true,

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
                docs:
                    {
                        path: 'mentorship',
                        routeBasePath: 'mentorship',
                        sidebarPath: './sidebars.ts',
                        editUrl: 'https://github.com/business4s/workflows4s/webstie',
                    },
                theme: {
                    customCss: './src/css/custom.css',
                },
            } satisfies Preset.Options,
        ],
    ],

    themeConfig: {
        image: 'img/Business4s.drawio.png',
        navbar: {
            title: 'Business4s',
            logo: {
                alt: 'Business4s Logo',
                src: 'img/Business4s.drawio.png',
            },
            items: [
                {
                    type: 'docSidebar',
                    sidebarId: 'mentorshipSidebar',
                    position: 'left',
                    label: 'Mentorship Program',
                },
                {
                    href: 'https://medium.com/business4s-blog',
                    label: 'Blog',
                    position: 'right',
                },
                {
                    href: 'https://github.com/business4s',
                    label: 'GitHub',
                    position: 'right',
                },
                {
                    href: 'https://bit.ly/business4s-discord',
                    label: 'Discord',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Community',
                    items: [
                        {
                            label: 'Discord',
                            href: 'https://bit.ly/business4s-discord',
                        },
                        {
                            label: 'Twitter',
                            href: 'https://twitter.com/business4scala',
                        },
                    ],
                },
            ],
            // copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
            additionalLanguages: ['java', 'scala', "json"]
        },
    } satisfies Preset.ThemeConfig,
    customFields: {
        decisions4sVersion: process.env.DECISIONS4S_VERSION,
    },
};

export default config;
