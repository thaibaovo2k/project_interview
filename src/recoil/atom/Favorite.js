import { atom } from "recoil";

export const favoriteAtom = atom({
  key: 'favorite',
  default: []
})