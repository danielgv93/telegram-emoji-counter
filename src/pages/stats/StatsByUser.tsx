import { StatCard, UserStatI } from 'pages/shared/StatCard';
import { Layout } from 'pages/shared/Layout';
import { useChatStore } from 'domain/store/chatStore';
import { StatsByUserI } from 'domain/models/statsModel';
import React from 'react';
import { toFixedIfDecimal } from 'domain/utils/common.utils';

const createRowsArray = (summaryStats: StatsByUserI): UserStatI[] => {
	return [
		{
			key: 'Total',
			value: summaryStats.statsByUser.Total
				? toFixedIfDecimal(summaryStats.statsByUser.Total)
				: '',
		},
		{
			key: 'Media',
			value: summaryStats.statsByUser.Media
				? toFixedIfDecimal(summaryStats.statsByUser.Media)
				: '',
		},
		{
			key: 'Maximo',
			value: summaryStats.statsByUser.Maximo
				? toFixedIfDecimal(summaryStats.statsByUser.Maximo)
				: '',
		},
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
