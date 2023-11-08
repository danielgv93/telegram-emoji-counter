import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useChatStore } from 'domain/store/chatStore';
import Dropzone from 'react-dropzone-uploader';
import { CustomLayout } from 'pages/main/CustomLayout';
import { InputUpload } from 'pages/main/InputUpload';
import { ChatModel } from 'domain/models/statsModel';

function isChat(chat: unknown): chat is ChatModel {
	return (chat as ChatModel).messages !== undefined;
}
export const CustomDropzone = () => {
	const navigate = useNavigate();
	const { setFileChat } = useChatStore();
	//const { emoji } = useSettingsStore();

	const handleFile = ({ file }: { file: File }) => {
		file.text().then((f) => {
			//if (emoji === '') {
			//	return;
			//}
			const chatContent = JSON.parse(f);
			if (isChat(chatContent)) {
				setFileChat(chatContent);
				navigate('/stats');
				return;
			}
		});
	};

	return (
		<Dropzone
			onChangeStatus={handleFile}
			LayoutComponent={CustomLayout}
			InputComponent={InputUpload}
			accept={'.json'}
		/>
	);
};
