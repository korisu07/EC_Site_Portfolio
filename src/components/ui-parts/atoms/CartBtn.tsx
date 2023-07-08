import { Button } from '@chakra-ui/react';
import { MouseEventHandler } from 'react';

interface Props {
  id: number;
}

const CartBtn: React.FC<Props> = ({ id }) => {
  const onClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    // ここにクリック時の処理
  };

  return (
    <Button variant="solid" colorScheme="blue" onClick={onClick}>
      カートに入れる
    </Button>
  );
};

export default CartBtn;
