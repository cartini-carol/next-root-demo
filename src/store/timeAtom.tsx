import { atom } from "jotai";

const timeAtom = atom<number>(Date.now());

export default timeAtom;
