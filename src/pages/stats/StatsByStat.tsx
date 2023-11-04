import { StatCard } from '../shared/StatCard';
import { Layout } from '../shared/Layout';

const mockStats = (title: string) => {
	return {
		title,
		rows: [
			{ key: 'Daniel', value: '2,7' },
			{ key: 'Karla', value: '3,7' },
			{ key: 'Sergio Niño Polla', value: '3,5' },
			{ key: 'Álvaro', value: '5' },
		],
	};
};

export const StatsByStat = () => {
	return (
		<Layout title={'Summary of Stats'}>
			<StatCard
				rows={mockStats('Total').rows}
				title={mockStats('Total').title}
			/>
			<StatCard
				rows={mockStats('Media').rows}
				title={mockStats('Media').title}
			/>
			<StatCard
				rows={mockStats('Mediana').rows}
				title={mockStats('Mediana').title}
			/>
		</Layout>
	);
};
