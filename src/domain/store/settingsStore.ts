import { create } from 'zustand';

type SettingsStore = {
	month: string;
	year: string;
	setMonth: (month: string) => void;
	setYear: (year: string) => void;
};

export const useSettingsStore = create<SettingsStore>()((set) => ({
	month: 'ALL',
	year: 'ALL',
	setMonth: (month) => set({ month }),
	setYear: (year) => set({ year }),
}));
