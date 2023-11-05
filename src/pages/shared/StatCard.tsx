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
			className={
				'flex flex-col border rounded-lg bg-blue-50 p-4 gap-4 w-full transition-all hover:scale-[1.02] cursor-pointer hover:shadow-lg shadow-sm'
			}>
			<span className={'text-center text-xl text-gray-600'}>
				{statCard.title}
			</span>
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
