import { create } from 'zustand'

import {ChatModel} from "../models/statsModel";

type ChatStore = {
    chat: ChatModel | null
    setChat: (chat: ChatModel) => void
}

export const useChatStore = create<ChatStore>()((set) => ({
    chat: null,
    setChat: (chat) => set(() => ({ chat })),
}))