import React, { useEffect, useState } from 'react'
import { getStatistics } from '../services/api';

const Statistics = ({ month }) => {
  const [statistics, setStatistics] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await getStatistics({ month });
      setStatistics(data);
    };
    fetchData();
  }, [month]);


  return (
    <div className='h-[150px] w-60 bg-yellow-200 rounded-xl p-3 border-none leading-8'>
      <h3 className='text-lg'>Statistics for: <strong>{month}</strong></h3>
      <p>Total Sale Amount: {statistics?.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics?.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics?.totalNotSoldItems}</p>
    </div>
  )
}

export default Statistics