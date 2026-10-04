import './globals.css';

export const metadata = {
  title: 'Lucid - Modern Landing Page',
  description:
    'Carefully crafted and beautiful landing page built with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
