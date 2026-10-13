import { create } from 'zustand';

type Lang = 'en' | 'ru';

interface LangState {
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useLangStore = create<LangState>((set) => ({
  lang: 'en',
  setLang: (lang) => set({ lang }),
}));

export function useLang(): Lang {
  return useLangStore((state) => state.lang);
}
