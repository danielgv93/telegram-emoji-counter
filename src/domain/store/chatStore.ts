import { create } from 'zustand';

import { ChatModel, StatsModel } from '../models/statsModel';

type ChatStore = {
	fileChat: ChatModel | null;
	setFileChat: (chat: ChatModel) => void;
	data: StatsModel | undefined;
	setData: (data: StatsModel) => void;
};

export const useChatStore = create<ChatStore>()((set) => ({
	fileChat: null,
	setFileChat: (chat) => set(() => ({ fileChat: chat })),
	data: undefined,
	setData: (data) => set(() => ({ data })),
}));
