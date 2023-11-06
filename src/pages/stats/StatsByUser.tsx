import { StatCard, UserStatI } from 'pages/shared/StatCard';
import { Layout } from 'pages/shared/Layout';
import { useChatStore } from 'domain/store/chatStore';
import { SummaryStats } from 'domain/models/statsModel';
import React from 'react';

const createRowsArray = (summaryStats: SummaryStats): UserStatI[] => {
	return [
		{ key: 'Total', value: summaryStats.stats.total },
		{ key: 'Media', value: summaryStats.stats.mean },
		{ key: 'Maximo', value: summaryStats.stats.max },
		{ key: 'Minimo', value: summaryStats.stats.min },
	];
};

export const StatsByUser = () => {
	const { data } = useChatStore();
	const maxUser = React.useMemo(() => {
		if (data && data.stats) {
			return data?.stats.reduce((acc, curr) =>
				curr.stats.total > acc.stats.total ? curr : acc
			).user;
		}
		return '';
	}, [data]);

	return (
		<Layout title={'Stats by user'}>
			{data?.stats.map((element) => (
				<StatCard
					className={maxUser === element.user ? '!bg-yellow-100' : ''}
					key={`${element.user}-card`}
					cardRows={createRowsArray(element)}
					cardTitle={element.user}
				/>
			))}
		</Layout>
	);
};
