export type CoffeeStores = {
  id?: number;
  name: string;
  imgUrl: string;
  websiteUrl: string;
  address: string;
  neighbourhood: string;
};

export type BannerProps = {
  buttonText: string;
  handleClick: () => void;
};

export interface CoffeeStoreProps {
  coffeeStore: CoffeeStores;
}
