'use client';

import { P } from '@/types/interface';
import { Card, CardBody, Heading } from '@chakra-ui/react';

import styles from '@/styles/components/Card.module.scss';
import classNames from 'classnames';

interface Props extends P {
  titleClassName?: string;
  bodyClassName?: string;
  title?: string;
}

const CardFrame: React.FC<Props> = ({
  children,
  titleClassName = '',
  bodyClassName = '',
  title = '',
}) => {
  return (
    <>
      <Card className={classNames(styles.cardFrame, bodyClassName)}>
        <CardBody className={styles.cardContent}>
          {title && (
            <Heading size="md" className={classNames(titleClassName)}>
              {title}
            </Heading>
          )}
          {children}
        </CardBody>
      </Card>
    </>
  );
};

export default CardFrame;
