import { Months } from 'domain/core';
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
import { useChatStore } from 'domain/store/chatStore';

export const SummaryBarChart = () => {
	const { setYear, setMonth } = useSettingsStore();
	const stats = useChatStore((store) => store.data);
	return (
		<div className={'w-full'}>
			<select onChange={(e) => setMonth(e.target.value)}>
				{Months.map((m) => (
					<option key={m} value={m}>
						{m}
					</option>
				))}
			</select>
			<select onChange={(e) => setYear(e.target.value)}>
				{['ALL', ...(stats?.years ?? [])].map((y) => (
					<option key={y} value={y}>
						{y}
					</option>
				))}
			</select>
			<div className={'w-full flex justify-center'}>
				<ResponsiveContainer height={300} width='90%'>
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
		</div>
	);
};
