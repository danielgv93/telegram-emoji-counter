import { useEffect } from 'react';
import { StatsModel } from '../models/statsModel';
import { Api } from 'domain/core';
import { useChatStore } from '../store/chatStore';
import { useNavigate } from 'react-router-dom';
import { useSettingsStore } from 'domain/store/settingsStore';

export const useChat = () => {
	const { month, year } = useSettingsStore();
	const { fileChat, setData } = useChatStore();

	useEffect(() => {
		if (!fileChat) {
			return;
		}
		fetch(`${Api.baseUrl}/chat`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				chat: fileChat,
				emoji: '💩',
				options: {
					month,
				},
			}),
		})
			.then((r) => r.json())
			.then((r: StatsModel) => setData(r));
	}, [month, year, fileChat]);

	return null;
};

export const useChatRedirect = () => {
	const navigate = useNavigate();
	const { fileChat } = useChatStore();
	useEffect(() => {
		if (!fileChat) {
			navigate('/');
		}
	}, [fileChat]);
};
