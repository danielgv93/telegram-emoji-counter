export type StatCardI = {
	title: string;
	rows: UserStatI[];
};
export type UserStatI = {
	key: string;
	value: string;
};

export const StatCard = (statCard: StatCardI) => {
	return (
		<div
			className={'flex flex-col border rounded border-black p-4 gap-4 w-full'}>
			<span className={'text-center text-lg'}>{statCard.title}</span>
			<div className={''}>
				{statCard.rows.map((stat) => (
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
