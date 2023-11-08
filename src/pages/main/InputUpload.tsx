import React from 'react';
import { IInputProps } from 'react-dropzone-uploader';
export const InputUpload = ({
	accept,
	onFiles,
	getFilesFromEvent,
}: IInputProps) => {
	//const { emoji, setEmoji } = useSettingsStore();
	return (
		<div className={'relative'}>
			<label
				className={
					'z-10 border-2 border-blue-300 border-dotted transition-all py-4 px-8 cursor-pointer rounded-full hover:shadow-md hover:bg-blue-50'
				}>
				Arrastra archivos o haz click aquí para subirlos
				<input
					style={{ display: 'none' }}
					type='file'
					accept={accept}
					onChange={async (e) => {
						const chosenFiles = await getFilesFromEvent(e);
						onFiles(chosenFiles as File[]);
					}}
				/>
			</label>
			{
				//<input
				//	className={
				//		'absolute right-0 border border-gray border-solid rounded-md p-2'
				//	}
				//	type={'text'}
				//	onChange={(e) => setEmoji(e.target.value)}
				//	value={emoji}
				///>
			}
		</div>
	);
};
