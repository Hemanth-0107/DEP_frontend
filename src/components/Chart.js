

import { useColorMode } from '@chakra-ui/react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const Chart = () => {
  const { colorMode } = useColorMode();

  const data = [
    { week: 1, rating: 64 },
    { week: 2, rating: 61 },
    { week: 3, rating: 64 },
    { week: 4, rating: 62 },
    { week: 5, rating: 64 },
    { week: 6, rating: 60 },
    { week: 7, rating: 58 },
    { week: 8, rating: 59 },
    { week: 9, rating: 53 },
    { week: 10, rating: 54 },
    { week: 11, rating: 61 },
    { week: 12, rating: 60 },
    { week: 13, rating: 55 },
    { week: 14, rating: 60 },
    { week: 15, rating: 56 },
    { week: 16, rating: 60 },
    { week: 17, rating: 59.5 },
    { week: 18, rating: 63 },
    { week: 19, rating: 58 },
    { week: 20, rating: 54 },
    { week: 21, rating: 59 },
    { week: 22, rating: 64 },
    { week: 23, rating: 59 },
  ];
  data.map((data,_) => data.rating = data.rating/20)

  return (
    <ResponsiveContainer width="100%" height={400}>
    <LineChart data={data}>
      <XAxis dataKey="week" label={{ value: 'Week of Year', position: 'insideBottomRight' }} interval={2} stroke={colorMode === 'light' ? '#18202c' : '#2e3544'} />
      <YAxis label={{ value: 'Rating %', angle: -90, position: 'insideLeft' }} suffix="%" stroke={colorMode === 'light' ? '#18202c' : '#2e3544'} />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="rating" stroke={colorMode === 'light' ? '#0072b2' : '#56b4e9'} activeDot={{ r: 8 }} />
    </LineChart>
  </ResponsiveContainer>
  
  );
};

export default Chart;

