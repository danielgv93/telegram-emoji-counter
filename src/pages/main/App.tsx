import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';
import { useChatStore } from 'domain/store/chatStore';
import { useNavigate } from 'react-router-dom';
import { ChatModel } from 'domain/models/statsModel';

function isChat(chat: unknown): chat is ChatModel {
	return (chat as ChatModel).messages !== undefined;
}
export const App = () => {
	const navigate = useNavigate();
	const { setFileChat } = useChatStore();

	const handleFile = ({ file }: { file: File }) => {
		file.text().then((f) => {
			const chatContent = JSON.parse(f);
			if (isChat(chatContent)) {
				setFileChat(chatContent);
				navigate('/stats');
				return;
			}
		});
	};

	return (
		<div className='flex justify-center items-center w-screen h-screen'>
			<Dropzone
				onChangeStatus={handleFile}
				styles={{
					dropzone: {
						overflow: 'auto',
						width: '100%',
						height: '100%',
						background: 'transparent',
						cursor: 'default',
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
					},
					inputLabel: {
						border: '1px dashed #ddd',
						padding: '1rem 2rem',
						borderRadius: '1.75rem',
						cursor: 'pointer',
						position: 'relative',
					},
					inputLabelWithFiles: {
						margin: '20px 3%',
					},
				}}
				accept='.json'
				canRemove={true}
			/>
		</div>
	);
};
