import { atom } from "recoil";

const userAtom = atom<number>({
  key: "userAtom",
  default: 0,
});

export default userAtom;
