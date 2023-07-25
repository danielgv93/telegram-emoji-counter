import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

const data = [
  {
    date: '01/01/2023',
    inori: 4,
    kratos: 2,
    funkypunky: 1,
    keynann: 3,
  },
  {
    date: '02/01/2023',
    inori: 3,
    kratos: 1,
    funkypunky: 2,
    keynann: 0,
  },
  {
    date: '03/01/2023',
    inori: 2,
    kratos: 9,
    funkypunky: 1,
    keynann: 1,
  },
  {
    date: '04/01/2023',
    inori: 2,
    kratos: 3,
    funkypunky: 1,
    keynann: 2,
  },
  {
    date: '05/01/2023',
    inori: 1,
    kratos: 4,
    funkypunky: 2,
    keynann: 1,
  },
  {
    date: '06/01/2023',
    inori: 2,
    kratos: 3,
    funkypunky: 4,
    keynann: 0,
  },
  {
    date: '07/01/2023',
    inori: 3,
    kratos: 4,
    funkypunky: 2,
    keynann: 1,
  },
];
export const Stats = () => {
  return (
    <ResponsiveContainer height={300} width={500}>
      <LineChart width={500} height={300} data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          name={'KratosGW'}
          dataKey="kratos"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          name={'FunkyPunky'}
          dataKey="funkypunky"
          stroke="red"
          activeDot={{ r: 8 }}
        />
        <Line
          name={'Keynann'}
          type="monotone"
          dataKey="keynann"
          stroke="orange"
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          name={'InoriChan'}
          dataKey="inori"
          stroke="#82ca9d"
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
