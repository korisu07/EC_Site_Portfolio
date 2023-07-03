import { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'EC Portfolio',
  description: 'ECサイトの模倣ポートフォリオです。',
  openGraph: {
    type: 'website',
    url: process.env.NEXT_PUBLIC_BASE_URL,
    title: 'EC Portfolio',
    description: 'ECサイトの模倣ポートフォリオです。',
    siteName: 'EC Portfolio',
    // images: [{
    //   url: "https://example.com/og.png",
    // }],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
