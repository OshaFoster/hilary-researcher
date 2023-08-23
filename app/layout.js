import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hilary Watts',
  description: 'researcher',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={inter.className}>{children}</body>
      <a href='#main-content' class='skip-link'>
        Skip to main content
      </a>
      <a href='#background' class='skip-link'>
        Skip to menu
      </a>
      <a href='#footer' class='skip-link'>
        Skip to footer
      </a>
    </html>
  );
}
