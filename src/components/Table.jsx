import React, { useEffect, useState } from 'react'
import { getTransactions } from '../services/api';
import axios from 'axios'

const Table = ({ month }) => {
    const [transactions, setTransactions] = useState([]);
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const perPage = 10;

    const fetchData = async () => {
        const response = await getTransactions({ month, search, page, perPage });
        const data = await response.data;
        setTransactions(data.transactions);
        setPage(data.page)
    }

    useEffect(() => {
        fetchData();
    }, [month, search, page, perPage]);

    console.log(transactions);
    return (
        <div className='h-full w-full flex justify-center flex-col items-center gap-1'>
            <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search transactions"
                className='w-[200px] h-8 border-solid border-2 rounded-md border-gray-700 pl-2'
            />
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Date of Sale</th>
                        <th>Category</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction?._id}>
                            <td>{transaction?.title}</td>
                            <td>{transaction?.description}</td>
                            <td>{transaction?.price}</td>
                            <td>{new Date(transaction?.dateOfSale).toLocaleDateString()}</td>
                            <td>{transaction?.category}</td>
                            <td>{transaction?.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className='flex gap-4'>
                <button onClick={() => setPage(page - 1)} disabled={page === 1} className='border-solid border-1 bg-yellow-800 text-white p-2 w-[100px] rounded-md disabled:bg-slate-400'>Previous</button>
                <div className='border-solid border-1 bg-yellow-400 p-2 w-10 text-center rounded-md font-semibold'>{page}</div>
                <button onClick={() => setPage(page + 1)} disabled={page === 6} className='border-solid border-1 bg-yellow-800 text-white p-2 w-[100px] rounded-md disabled:bg-slate-400'>Next</button>
            </div>
        </div>
    )
}

export default Table