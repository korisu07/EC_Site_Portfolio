export type Dict = { [key: string]: any };

export interface P {
  children?: React.ReactNode;
}

export interface ItemIface {
  id: number;
  title: string;
  description?: string;
  img?: {
    src: string;
    alt?: string;
  };
  price: number;
}
