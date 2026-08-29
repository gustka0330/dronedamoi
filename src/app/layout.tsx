import type { Metadata, Viewport } from 'next';
import { Inter, Noto_Sans_KR } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { JsonLd } from '@/components/JsonLd';
import { siteConfig } from '@/data/siteConfig';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansKr = Noto_Sans_KR({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800', '900'],
  variable: '--font-noto-sans-kr',
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#081526',
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: '윤현삼 | 학생드론교육 전문가 | DRONEDAMOI DRONE SCHOOL',
    template: '%s | DRONEDAMOI DRONE SCHOOL · 윤현삼',
  },
  description:
    '11년차 현직 초등교사 윤현삼의 학생드론교육 전문 플랫폼. 초등학교 드론수업, 드론코딩, 드론촬영, 드론축구, 학교자율시간, 교사연수 및 교육기관 출강 프로그램을 제공합니다.',
  keywords: siteConfig.keywords,
  authors: [{ name: '윤현삼', url: siteConfig.url }],
  creator: '윤현삼',
  publisher: 'DRONEDAMOI DRONE SCHOOL',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: siteConfig.url,
    siteName: 'DRONEDAMOI DRONE SCHOOL',
    title: '윤현삼 | 학생드론교육 전문가 | DRONEDAMOI DRONE SCHOOL',
    description:
      '11년차 현직 초등교사 윤현삼의 학생드론교육 전문 플랫폼. 초등 드론수업, 코딩, 촬영, 드론축구, 학교자율시간, 교원연수 출강.',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'DRONEDAMOI DRONE SCHOOL 윤현삼 드론교육',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '윤현삼 | 학생드론교육 전문가 | DRONEDAMOI DRONE SCHOOL',
    description:
      '11년차 현직 초등교사 윤현삼의 학생드론교육 전문 플랫폼. 교실에서 시작해 세계무대까지.',
    images: ['/images/hero.jpg'],
  },
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${inter.variable} ${notoSansKr.variable}`}>
      <body className="min-h-screen flex flex-col antialiased bg-white text-[#101828]">
        <JsonLd />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
