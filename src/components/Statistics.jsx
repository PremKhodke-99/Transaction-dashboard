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
    <div>
      <h3>Statistics for {month}</h3>
      <p>Total Sale Amount: {statistics?.totalSaleAmount}</p>
      <p>Total Sold Items: {statistics?.totalSoldItems}</p>
      <p>Total Not Sold Items: {statistics?.totalNotSoldItems}</p>
    </div>
  )
}

export default Statistics