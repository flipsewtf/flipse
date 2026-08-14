// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { unified } from '@astrojs/markdown-remark';
import rehypeFigure from '@microflash/rehype-figure';

export default defineConfig({
    site: 'https://flipse.wtf',

    integrations: [sitemap(), mdx()],

    devToolbar: {
        enabled: false,
    },

    markdown: {
        syntaxHighlight: false,
        processor: unified({
            rehypePlugins: [rehypeFigure],
        }),
    },

    vite: {
        resolve: {
            alias: {
                '@': '/src',
            },
        },
        server: {
            watch: {
                usePolling: true,
                interval: 100,
            },
        },
    },
});
