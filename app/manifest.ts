import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Kaeru Labs - Desarrollo Web y Sistemas Informáticos',
    short_name: 'Kaeru Labs',
    description: 'Desarrollo de sitios web ultra rápidos y sistemas informáticos a medida en Chile.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0A0D0A',
    theme_color: '#38EF7D',
    icons: [
      {
        src: '/icon.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}