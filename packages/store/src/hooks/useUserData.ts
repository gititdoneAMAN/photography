import { useRecoilValue } from "recoil";
import userAtom from "../atoms/userAtom";

export default function useUserData() {
  const data = useRecoilValue(userAtom);
  return data;
}
