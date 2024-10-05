import { developer } from '@/types/type';
import { User } from 'firebase/auth';
import { atom } from 'jotai';
import { loadable } from 'jotai/utils';

// ユーザーのログイン情報を保持するatom
export const userAtom = atom<User | null | developer>(null);
export const userAtomLoadable = loadable(userAtom);

// ユーザー情報を仮で固定値を入れておく
