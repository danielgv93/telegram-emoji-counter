import { create } from 'zustand';

type SettingsStore = {
	emoji: string;
	month: string;
	year: string;
	setEmoji: (emoji: string) => void;
	setMonth: (month: string) => void;
	setYear: (year: string) => void;
};

export const useSettingsStore = create<SettingsStore>()((set) => ({
	emoji: '',
	month: 'ALL',
	year: 'ALL',
	setEmoji: (emoji) => set({ emoji }),
	setMonth: (month) => set({ month }),
	setYear: (year) => set({ year }),
}));
