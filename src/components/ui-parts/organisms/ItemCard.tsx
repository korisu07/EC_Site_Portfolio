import ItemCardFrame from '@/components/ui-parts/molecules/ItemCardFrame';
import ItemIface from '@/types/itemIface';
import { Heading, Image, Stack, Text } from '@chakra-ui/react';

interface Props {
  item: ItemIface;
}

const ItemCard: React.FC<Props> = ({ item }) => {
  return (
    <ItemCardFrame id={item.id}>
      <Image
        w="100%"
        maxH="330px"
        src={item.img?.src || '/img/no_image.png'}
        alt={item.img?.alt || '商品画像です'}
        borderRadius="lg"
      />
      <Stack mt="6" spacing="3">
        <Heading size="md">{item.title}</Heading>
        <Text>{item.description || '説明文はありません'}</Text>
        <Text color="blue.600" fontSize="2xl">
          {item.price || 0}円
        </Text>
      </Stack>
    </ItemCardFrame>
  );
};

export default ItemCard;
