import { useState } from 'react';
import { Months } from '../../domain/core/constants';
import { useChat } from '../../domain/hooks/chatHooks';
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
import { getBarColor } from '../../domain/utils/colors.utils';

export const SummaryBarChart = () => {
	const [month, setMonth] = useState<string>(Months[0]);
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
