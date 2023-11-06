import { StatCard, StatCardI } from '../shared/StatCard';
import { Layout } from '../shared/Layout';
import { useChatStore } from 'domain/store/chatStore';

const mockStats = (title: string): StatCardI => {
	return {
		cardTitle: title,
		cardRows: [
			{ key: 'Daniel', value: '2,7' },
			{ key: 'Karla', value: '3,7' },
			{ key: 'Sergio Niño Polla', value: '3,5' },
			{ key: 'Álvaro', value: '5' },
		],
	};
};

export const StatsByStat = () => {
	const { data } = useChatStore();
	console.log(data);
	return (
		<Layout title={'Summary of Stats'}>
			<StatCard
				cardRows={mockStats('Total').cardRows}
				cardTitle={mockStats('Total').cardTitle}
			/>
			<StatCard
				cardRows={mockStats('Media').cardRows}
				cardTitle={mockStats('Media').cardTitle}
			/>
			<StatCard
				cardRows={mockStats('Máximo').cardRows}
				cardTitle={mockStats('Máximo').cardTitle}
			/>
			<StatCard
				cardRows={mockStats('Mínimo').cardRows}
				cardTitle={mockStats('Mínimo').cardTitle}
			/>
		</Layout>
	);
};
