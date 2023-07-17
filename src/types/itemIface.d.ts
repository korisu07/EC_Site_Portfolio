interface ItemIface {
  id: number;
  title: string;
  description?: string;
  img?: {
    src: string;
    alt?: string;
  };
  price: number;
}

export default ItemIface;
