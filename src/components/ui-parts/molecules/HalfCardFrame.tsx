'use client';

import { P } from '@/types/interface';
import { Card, CardBody, Heading } from '@chakra-ui/react';

import classNames from 'classnames';

interface Props extends P {
  titleClassName?: string;
  bodyClassName?: string;
  title?: string;
}

const HalfCardFrame: React.FC<Props> = ({
  children,
  titleClassName = '',
  bodyClassName = '',
  title = '',
}) => {
  return (
    <>
      <Card className={classNames(bodyClassName)}>
        <CardBody>
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

export default HalfCardFrame;
