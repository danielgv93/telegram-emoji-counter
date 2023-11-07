import { StatCard, UserStatI } from 'pages/shared/StatCard';
import { Layout } from 'pages/shared/Layout';
import { useChatStore } from 'domain/store/chatStore';
import { StatsByUserI } from 'domain/models/statsModel';
import React from 'react';
import { toFixedIfDecimal } from 'domain/utils/common.utils';

const createRowsArray = (summaryStats: StatsByUserI): UserStatI[] => {
	return [
		{ key: 'Total', value: toFixedIfDecimal(summaryStats.statsByUser.total) },
		{ key: 'Media', value: toFixedIfDecimal(summaryStats.statsByUser.mean) },
		{ key: 'Maximo', value: toFixedIfDecimal(summaryStats.statsByUser.max) },
	];
};

export const StatsByUser = () => {
	const { data } = useChatStore();
	const maxUser = React.useMemo(() => {
		if (data && data.statsByUser) {
			return data.statsByUser.reduce((acc, curr) =>
				curr.statsByUser.total > acc.statsByUser.total ? curr : acc
			).user;
		}
		return '';
	}, [data]);
	if (!data?.statsByUser) {
		return null;
	}

	return (
		<Layout title={'Stats by user'}>
			{data.statsByUser.map((element) => (
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
