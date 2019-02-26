import {RefObject} from 'react';

interface Item {
  title: string;
  description: string;
  expiration: Date;
  state: React.RefObject<HTMLSelectElement>;
}

export default Item;
