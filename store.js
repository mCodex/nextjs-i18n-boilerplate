import { observable } from 'mobx';

const defaultStore = {
  app: {
    locale: 'en',
  }
};

export default function initStore() {
  return observable(defaultStore);
}
