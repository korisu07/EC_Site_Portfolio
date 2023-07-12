'use client';

import ItemCard from '@/components/ui-parts/organisms/ItemCard';
import { itemList } from '@/helper/testData';
import { useFetchApi } from '@/hooks/useFetchApi';
import { Grid, GridItem } from '@chakra-ui/react';

export default function Home() {
  const data = useFetchApi('/');

  return (
    <>
      <div>{data?.test || ''}</div>
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        {itemList.map((item, i) => {
          return (
            <GridItem w="100%" key={i}>
              <ItemCard item={item} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  );
}
