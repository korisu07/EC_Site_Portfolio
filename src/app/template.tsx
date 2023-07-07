'use client';

import { P } from '@/types/interface';
import Link from 'next/link';
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
      <header>
        <div className={styles.container}>
          <h1>
            <Link href="/">EC Portfolio</Link>
          </h1>
          <div className={styles.headerTopArea}></div>
          <nav>
            <ul>
              <li>
                <Link href="/">
                  <span>トップ</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>商品一覧</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>会員登録</span>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <span>ログイン</span>
                </Link>
              </li>
              <li>
                <Link href="#">
                  <span>個人設定</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <main>
        <div className={styles.container}>
          <div className={styles.content}>{children}</div>
        </div>
      </main>
      <footer>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.footerMenu}>
              <h3>メニュー</h3>
              <ul>
                <li>
                  <Link href="#">トップ</Link>
                </li>
                <li>
                  <Link href="#">商品一覧</Link>
                </li>
                <li>
                  <Link href="#">マイページ</Link>
                </li>
                <li>
                  <Link href="#">マイカート</Link>
                </li>
                <li>
                  <Link href="#">お気に入り</Link>
                </li>
                <li>
                  <Link href="#">個人設定</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerMenuSpace}></div>
            <div className={styles.footerMenu}>
              <h3>ヘルプ</h3>
              <ul>
                <li>
                  <Link href="#">ヘルプ</Link>
                </li>
                <li>
                  <Link href="#">使い方</Link>
                </li>
                <li>
                  <Link href="#">よくある質問</Link>
                </li>
              </ul>
            </div>
            <div className={styles.footerMenuSpace}></div>
            <div className={styles.footerMenu}>
              <h3>会社について</h3>
              <ul>
                <li>
                  <Link href="#">会社情報</Link>
                </li>
                <li>
                  <Link href="#">プライバシーポリシー</Link>
                </li>
                <li>
                  <Link href="#">採用情報</Link>
                </li>
                <li>
                  <Link href="#">お問い合わせ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default RootTemplate;
