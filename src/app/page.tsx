'use client';

import { useEffect, useState } from 'react';
import styles from '/src/styles/globals/Layout.module.scss';

export default function Home() {
  const [click, setClick] = useState<boolean>();
  useEffect(() => {
    if (typeof click == 'undefined') return;

    const req = async () => {
      const data = await fetch('http://localhost:3000/api/');
      const json = await data.json();
      console.log('test', json.data);
    };
    req();
  }, [click]);

  return (
    <>
      <div className={styles.layout}>
        <header>
          <div className={styles.container}>
            <h1>
              <a href="/">EC Portfolio</a>
            </h1>
            <div className={styles.headerTopArea}></div>
            <nav>
              <ul>
                <li>
                  <a href="#">
                    <span>トップ</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>商品一覧</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>会員登録</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>ログイン</span>
                  </a>
                </li>
                <li>
                  <a href="#">
                    <span>個人設定</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        <main>
          <div className={styles.container}>
            <div className={styles.content}>
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
              text <br />
            </div>
          </div>
        </main>
        <footer>
          <div className={styles.container}>
            <div className={styles.content}>
              <div className={styles.footerMenu}>
                <h3>メニュー</h3>
                <ul>
                  <li>
                    <a href="#">トップ</a>
                  </li>
                  <li>
                    <a href="#">商品一覧</a>
                  </li>
                  <li>
                    <a href="#">マイページ</a>
                  </li>
                  <li>
                    <a href="#">マイカート</a>
                  </li>
                  <li>
                    <a href="#">お気に入り</a>
                  </li>
                  <li>
                    <a href="#">個人設定</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerMenuSpace}></div>
              <div className={styles.footerMenu}>
                <h3>ヘルプ</h3>
                <ul>
                  <li>
                    <a href="#">ヘルプ</a>
                  </li>
                  <li>
                    <a href="#">使い方</a>
                  </li>
                  <li>
                    <a href="#">よくある質問</a>
                  </li>
                </ul>
              </div>
              <div className={styles.footerMenuSpace}></div>
              <div className={styles.footerMenu}>
                <h3>会社について</h3>
                <ul>
                  <li>
                    <a href="#">会社情報</a>
                  </li>
                  <li>
                    <a href="#">プライバシーポリシー</a>
                  </li>
                  <li>
                    <a href="#">採用情報</a>
                  </li>
                  <li>
                    <a href="#">お問い合わせ</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
