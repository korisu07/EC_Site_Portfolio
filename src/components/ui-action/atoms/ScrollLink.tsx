import styles from '@/styles/globals/Layout.module.scss';
import { P } from '@/types/interface';
import classNames from 'classnames';
import { Link as Scroll } from 'react-scroll';

interface Props extends P {
  to: string;
  className?: string;
  duration?: number;
}

const ScrollLink: React.FC<Props> = ({ children, to, className, duration }) => {
  return (
    <Scroll
      style={{ cursor: 'pointer' }}
      className={classNames(styles.scrollLink, className)}
      to={to}
      smooth
      duration={duration || 400}
    >
      {children}
    </Scroll>
  );
};

export default ScrollLink;
