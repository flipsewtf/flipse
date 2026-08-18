// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';

export default defineConfig({
    site: 'https://flipse.wtf',

    integrations: [sitemap(), mdx()],

    devToolbar: {
        enabled: false,
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
