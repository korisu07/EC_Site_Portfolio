import CartBtn from '@/components/ui-parts/atoms/CartBtn';
import { P } from '@/types/interface';
import {
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
} from '@chakra-ui/react';

interface Props extends P {
  id: number;
}

const ItemCardFrame: React.FC<Props> = ({ children, id }) => {
  return (
    <Card maxW="sm">
      <CardBody>{children}</CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <CartBtn id={id} />
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
};

export default ItemCardFrame;
