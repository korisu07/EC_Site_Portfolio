'use client';

import { P } from '@/types/interface';
import { Card, CardBody } from '@chakra-ui/react';

import styles from '@/styles/components/Card.module.scss';
import classNames from 'classnames';

interface Props extends P {
  className?: string;
}

const CardFrame: React.FC<Props> = ({ children, className = '' }) => {
  return (
    <>
      <Card className={classNames(styles.cardFrame, className)}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
};

export default CardFrame;
