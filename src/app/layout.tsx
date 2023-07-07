import CustomChakraProviders from '@/components/modules/CustomChakraProviders';
import { P } from '@/types/interface';
import { Metadata } from 'next';
import '/src/styles/globals/Globals.scss';

export const metadata: Metadata = {
  title: 'EC Portfolio',
  description: 'ECサイトの模倣ページ（ポートフォリオ）です。',
  // openGraph: {
  //   type: 'website',
  //   url: process.env.NEXT_PUBLIC_BASE_URL,
  //   title: 'EC Portfolio',
  //   description: 'ECサイトの模倣ページ（ポートフォリオ）です。',
  //   siteName: 'EC Portfolio',
  //   // images: [{
  //   //   url: "https://example.com/og.png",
  //   // }],
  // },
};

const RootLayout: React.FC<P> = ({ children }) => {
  return (
    <html lang="ja">
      <body>
        <CustomChakraProviders>{children}</CustomChakraProviders>
      </body>
    </html>
  );
};

export default RootLayout;
