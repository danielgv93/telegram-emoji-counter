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
import { useState } from 'react';
import {useChat, useChatRedirect} from "../../domain/hooks/chatHooks";
import {getBarColor} from "../../domain/utils/colors.utils";
import {Months} from "../../domain/core/constants";

export const Stats = () => {
  const [month, setMonth] = useState<string>(Months[0]);
  const stats = useChat(month);

  useChatRedirect();

  return (<>
    <select onChange={(e) => setMonth(e.target.value)}>
      {Months.map(m => <option key={m} value={m}>{m}</option>)}
    </select>
    <ResponsiveContainer height={300} width={800}>
      <BarChart data={stats?.data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        {
          stats?.users.map((user, index) =>
              <Bar type="monotone"
                   name={user}
                   dataKey={user}
                   stroke={getBarColor(index)}
                   fill={getBarColor(index)} />)
        }
      </BarChart>
    </ResponsiveContainer>
  </>);
};
