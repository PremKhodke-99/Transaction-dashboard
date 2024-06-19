import React, { useEffect, useState } from 'react'
import { getPieChart } from '../services/api';
import { Pie } from 'react-chartjs-2';

const PieChart = ({ month }) => {
  // const [pieChartData, setPieChartData] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const { data } = await getPieChart({ month });
  //     setPieChartData(data);
  //   };
  //   fetchData();
  // }, [month]);

  // const data = {
  //   labels: pieChartData.map(item => item._id),
  //   datasets: [
  //     {
  //       label: '# of Items',
  //       data: pieChartData.map(item => item.count),
  //       backgroundColor: [
  //         '#FF6384',
  //         '#36A2EB',
  //         '#FFCE56',
  //         '#FF6384',
  //         '#36A2EB',
  //         '#FFCE56',
  //       ],
  //       hoverBackgroundColor: [
  //         '#FF6384',
  //         '#36A2EB',
  //         '#FFCE56',
  //         '#FF6384',
  //         '#36A2EB',
  //         '#FFCE56',
  //       ],
  //     },
  //   ],
  // };

  // return <Pie data={data} />;
}

export default PieChart