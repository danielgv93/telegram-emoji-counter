import { ILayoutProps } from 'react-dropzone-uploader';
import { twMerge } from 'tailwind-merge';

export const CustomLayout = ({
	input,
	dropzoneProps,
	files,
	extra: { maxFiles },
}: ILayoutProps) => {
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { className, ...rest } = dropzoneProps;
	return (
		<div className={'w-full h-screen cursor-default'}>
			<div
				className={twMerge(
					className,
					'flex justify-center items-center overflow-auto w-full h-full z-0 border-0'
				)}
				{...rest}>
				{files.length < maxFiles && input}
			</div>
		</div>
	);
};
