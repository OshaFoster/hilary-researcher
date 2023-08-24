import React from 'react';
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
      <head>{/* Add your head content here */}</head>
      <body>
        {children}

        <a href='#main-content' className='skip-link'>
          Skip to main content
        </a>
        <a href='#background' className='skip-link'>
          Skip to menu
        </a>
        <a href='#footer' className='skip-link'>
          Skip to footer
        </a>
      </body>
    </html>
  );
}
