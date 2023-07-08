'use client';

import ItemCard from '@/components/ui-parts/organisms/ItemCard';
import { itemList } from '@/helper/testData';
import { Grid, GridItem } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [click, setClick] = useState<boolean>();
  useEffect(() => {
    if (typeof click == 'undefined') return;

    const req = async () => {
      const data = await fetch('http://localhost:3000/api/');
      const json = await data.json();
      console.log('test', json.data);
    };
    req();
  }, [click]);

  return (
    <>
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
