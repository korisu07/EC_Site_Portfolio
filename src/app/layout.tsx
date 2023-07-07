import { Metadata } from 'next';
import '/src/styles/globals/Globals.scss';

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

interface Props {
  children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({ children }) => {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
