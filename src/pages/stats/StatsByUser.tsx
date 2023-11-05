import { StatCard, StatCardI } from 'pages/shared/StatCard';
import { Layout } from 'pages/shared/Layout';

const mockStats = (title: string): StatCardI => {
	return {
		title,
		rows: [
			{ key: 'Total', value: '30' },
			{ key: 'Media', value: '1.5' },
			{ key: 'Maximo', value: '1' },
			{ key: 'Minimo', value: '2' },
		],
	};
};

export const StatsByUser = () => {
	return (
		<Layout title={'Stats by user'}>
			<StatCard
				rows={mockStats('Daniel').rows}
				title={mockStats('Daniel').title}
			/>
			<StatCard
				rows={mockStats('Karla').rows}
				title={mockStats('Karla').title}
			/>
			<StatCard
				rows={mockStats('Sergio Niño Polla').rows}
				title={mockStats('Sergio Niño Polla').title}
			/>
			<StatCard
				rows={mockStats('Álvaro').rows}
				title={mockStats('Álvaro').title}
			/>
		</Layout>
	);
};
