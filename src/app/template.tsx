'use client';

import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import { P } from '@/types/interface';
import { useEffect, useState } from 'react';
import styles from '/src/styles/globals/Layout.module.scss';

interface Props extends P {
  /* empty */
}

const RootTemplate: React.FC<Props> = ({ children }) => {
  // TODO：リロード時の画面チラつき対策（一時対応）
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <div
      style={{ visibility: !mounted ? 'hidden' : 'visible' }}
      className={styles.layout}
    >
      <Header />
      <main id="#top">
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RootTemplate;
