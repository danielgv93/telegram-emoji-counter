import { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren<{ title: string }>) => {
	const { children, title } = props;
	return (
		<div className={'flex flex-col w-full'}>
			<h2 className={'text-3xl text-center text-gray-500'}>{title}</h2>
			<div className={'flex flex-row justify-center flex-wrap gap-4 my-4'}>
				{children}
			</div>
		</div>
	);
};
