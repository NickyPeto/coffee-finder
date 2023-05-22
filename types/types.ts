export type CoffeeStores = {
  id?: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
};

export interface CoffeeStoreProps {
  coffeeStore: CoffeeStores;
}
