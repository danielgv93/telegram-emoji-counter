import { StatCard } from '../shared/StatCard';
import { Layout } from '../shared/Layout';
import { useChatStore } from 'domain/store/chatStore';
import { capitalize, toFixedIfDecimal } from 'domain/utils/common.utils';

export const StatsByStat = () => {
	const { data } = useChatStore();
	if (!data?.summaryStats) {
		return null;
	}
	return (
		<Layout title={'Summary of Stats'}>
			{data.summaryStats.map((element) => (
				<StatCard
					key={`${element.statName}-card`}
					cardRows={Object.entries(element.summaryStats).map(
						([user, value]) => ({
							key: user,
							value: toFixedIfDecimal(value),
						})
					)}
					cardTitle={capitalize(element.statName)}
				/>
			))}
		</Layout>
	);
};
