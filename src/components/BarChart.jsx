import React, { useEffect, useState } from 'react'
import { getBarChart } from '../services/api';
import { Bar } from 'react-chartjs-2';

const BarChart = ({ month }) => {
  // const [barChartData, setBarChartData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await getBarChart({ month });
  //     setBarChartData(data);
  //   };
  //   fetchData();
  // }, [month]);

  // const data = {
  //   labels: ['0-100', '101-200', '201-300', '301-400', '401-500', '501-600', '601-700', '701-800', '801-900', '901-above'],
  //   datasets: [
  //     {
  //       label: 'Number of Items',
  //       data: barChartData.map(item => item.count),
  //       backgroundColor: 'rgba(75,192,192,0.4)',
  //       borderColor: 'rgba(75,192,192,1)',
  //       borderWidth: 1,
  //     },
  //   ],
  // };

  // return <Bar data={data} />;
}

export default BarChart