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

const MONTHS = [
    "ALL", "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST"
]
export const Stats = () => {
  const [month, setMonth] = useState<string>(MONTHS[0]);
  const stats = useChat(month);
  useChatRedirect()


  return (<>
    <select onChange={(e) => setMonth(e.target.value)}>
      {MONTHS.map(m => <option key={m} value={m}>{m}</option>)}
    </select>
    <ResponsiveContainer height={300} width={800}>
      <BarChart data={stats}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar
          type="monotone"
          name={'KratosGW'}
          dataKey="kratos"
          stroke="#8884d8"
          fill={"#8884d8"}
        />
        <Bar
          type="monotone"
          name={'FunkyPunky'}
          dataKey="funkypunky"
          stroke="red"
          fill={"red"}
        />
        <Bar
          name={'Keynann'}
          type="monotone"
          dataKey="keynann"
          stroke="orange"
          fill="orange"
        />
        <Bar
          type="monotone"
          name={'InoriChan'}
          dataKey="inori"
          stroke="#82ca9d"
          fill="#82ca9d"
        />
      </BarChart>
    </ResponsiveContainer>
  </>);
};
