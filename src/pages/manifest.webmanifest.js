// manifest.webmanifest.js
import { siteDescription } from '@/assets/data/site-desc';

export async function GET() {
    const manifest = {
        name: 'Flipse.wtf',
        short_name: 'Flipse.wtf',
        description: siteDescription,
        icons: [
            {
                src: '/favicon-192.png',
                sizes: '192x192',
                type: 'image/png',
                purpose: 'any',
            },
            {
                src: '/favicon-512.png',
                sizes: '512x512',
                type: 'image/png',
                purpose: 'any',
            },
        ],
        start_url: '/',
        display: 'browser',
        background_color: '#f6f6f6',
        theme_color: '#8e9867',
    };

    return new Response(JSON.stringify(manifest), {
        headers: {
            'Content-Type': 'application/manifest+json',
        },
    });
}
