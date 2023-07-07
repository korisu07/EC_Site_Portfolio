'use client';

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
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
      text <br />
    </>
  );
}
