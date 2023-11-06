import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

export type StatCardI = {
	cardTitle: string;
	cardRows: UserStatI[];
};

export type UserStatI = {
	key: string;
	value: string | number;
};

export type StatCardProps = StatCardI & React.HTMLProps<HTMLDivElement>;

export const StatCard: FC<StatCardProps> = ({
	cardTitle,
	cardRows,
	...htmlProps
}) => {
	const { className, ...rest } = htmlProps;
	return (
		<div
			{...rest}
			className={twMerge(
				className,
				'flex flex-col border rounded-lg bg-blue-50',
				'p-4 gap-4 w-full transition-all hover:scale-[1.02]',
				'cursor-pointer hover:shadow-lg shadow-sm'
			)}>
			<span className={'text-center text-xl text-gray-600'}>{cardTitle}</span>
			<div className={''}>
				{cardRows.map((stat) => (
					<div
						key={`stat-${stat.key}-${stat.value}`}
						className={'flex flex-row gap-2'}>
						<span>{stat.key}</span>
						<span className={'font-bold'}>{stat.value}</span>
					</div>
				))}
			</div>
		</div>
	);
};
