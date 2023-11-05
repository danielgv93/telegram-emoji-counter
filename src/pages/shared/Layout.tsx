import { PropsWithChildren } from 'react';

export const Layout = (props: PropsWithChildren<{ title: string }>) => {
	const { children, title } = props;
	return (
		<div>
			<h2 className={'text-3xl text-center text-gray-500'}>{title}</h2>
			<div
				className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-4'}>
				{children}
			</div>
		</div>
	);
};
