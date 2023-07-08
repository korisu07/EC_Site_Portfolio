import ScrollLink from '@/components/ui-action/atoms/ScrollLink';
import styles from '@/styles/globals/Layout.module.scss';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <>
      <div className={styles.footerTopLinkBox}>
        <div className={styles.container}>
          <ScrollLink className={styles.footerTopLink} to="#top">
            ▲トップへ戻る
          </ScrollLink>
        </div>
      </div>
      <footer>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.footerMenu}>
              <h3>メニュー</h3>
              <ul>
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
    </>
  );
};

export default Footer;
