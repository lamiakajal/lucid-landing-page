import './globals.css';

export const metadata = {
  title: 'Lucid - Modern Landing Page',
  description:
    'Carefully crafted and beautiful landing page built with Next.js',
  icons: {
    icon: '/assets/icon.png?v=1',
    shortcut: '/assets/icon.png?v=1',
    apple: '/assets/icon.png?v=1',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/assets/icon.png?v=1"
          type="image/png"
          sizes="any"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
