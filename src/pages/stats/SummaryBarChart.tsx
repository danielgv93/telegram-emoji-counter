import { Months } from 'domain/core';
import { useChat } from 'domain/hooks/chatHooks';
import {
	Bar,
	BarChart,
	CartesianGrid,
	Legend,
	ResponsiveContainer,
	Tooltip,
	XAxis,
	YAxis,
} from 'recharts';
import { useSettingsStore } from 'domain/store/settingsStore';
import { getBarColor } from 'domain/utils/colors.utils';

const Years = ['2020', '2021', '2022'] as const;

export const SummaryBarChart = () => {
	const { setYear, setMonth, month } = useSettingsStore();
	const stats = useChat(month);
	return (
		<div>
			<select onChange={(e) => setMonth(e.target.value)}>
				{Months.map((m) => (
					<option key={m} value={m}>
						{m}
					</option>
				))}
			</select>
			<select onChange={(e) => setYear(e.target.value)}>
				{Years.map((y) => (
					<option key={y} value={y}>
						{y}
					</option>
				))}
			</select>
			<ResponsiveContainer height={300} width={800}>
				<BarChart data={stats?.data}>
					<CartesianGrid strokeDasharray='3 3' />
					<XAxis dataKey='date' />
					<YAxis />
					<Tooltip />
					<Legend />
					{stats?.users.map((user, index) => (
						<Bar
							key={user}
							type='monotone'
							name={user}
							dataKey={user}
							stroke={getBarColor(index)}
							fill={getBarColor(index)}
						/>
					))}
				</BarChart>
			</ResponsiveContainer>
		</div>
	);
};
