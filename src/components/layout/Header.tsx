'use client';

import styles from '@/styles/globals/Layout.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
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
  );
};

export default Header;
