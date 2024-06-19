import { useState } from 'react'
import Table from './components/Table'
import Statistics from './components/Statistics'
import BarChart from './components/BarChart'
import PieChart from './components/PieChart'

function App() {
  const [month, setMonth] = useState('Select One');
  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  return (
    <div className="h-full w-full flex justify-center flex-col items-center mt-[50px] gap-3">
      <div className='h-[170px] w-[170px] bg-yellow-100 flex justify-center items-center rounded-full'>
        <h1 className='text-2xl font-bold'>Transaction<br /> Dashboard</h1>
      </div>
      <select value={month} onChange={(e) => {
        e.preventDefault();
        setMonth(e.target.value);
      }} className='w-[200px] h-8 border-solid border-2 rounded-md border-gray-700 pl-1'>
        <option value={'select'}>Select Month</option>
        {
          months.map((m) => (
            <option key={m} value={m}>{m}</option>
          ))
        }
      </select>
      <Table month={month} />
      <Statistics month={month} />
      <BarChart month={month} />
      <PieChart month={month} />
    </div>
  )
}

export default App
