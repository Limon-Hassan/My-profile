import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import CustomCursor from '@/components/anime/CustomCursor';
import SmoothScroll from '@/components/anime/SmoothScroll';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-Inter',
});

export const metadata: Metadata = {
  title: 'Mahammud Hassan Limon | Full Stack Developer',
  description:
    'I am a Full Stack Web Developer from Bangladesh. I build modern, responsive, and scalable web applications using React, Next.js, Node.js, Express, and MongoDB. Focused on performance, UI/UX, and clean architecture.',
  keywords: [
    'Full Stack Developer',
    'React Developer',
    'Next.js Developer',
    'MERN Stack Developer',
    'Bangladesh Developer',
    'Web Developer',
    'Frontend Developer',
    'Backend Developer',
    'UI/UX Designer',
    'JavaScript',
    'TypeScript',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta
        name="google-site-verification"
        content="pGN27yJE9LEHS2byaNn7sRypQgLx1sZh57kWq4uchEY"
      />
      <body className={`${inter.variable} antialiased`}>
        <CustomCursor />
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
