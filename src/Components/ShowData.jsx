import React, { useEffect, useState } from 'react';
import useGetData from '../hook/useGetData';
import Card from './Card';

const ShowData = () => {
    const [search, setSearch] = useState('')
    const [type, setType] = useState('');
    const { items, isLoading } = useGetData(search, type)





    return (
        <div>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-gray-100 p-4 rounded-md">
                <h2 className="text-2xl font-semibold text-gray-800">All Items</h2>

                <div className="flex gap-4 w-full md:w-auto">
                    {/* Status Dropdown */}
                    <select onChange={(e) => setType(e.target.value)} className="select select-bordered w-full md:w-48">
                        <option value="">All Statuses</option>
                        <option value="lost">Lost</option>
                        <option value="found">Found</option>
                        <option value="claimed">Claimed</option>
                    </select>

                    {/* Search Input */}
                    <input
                        type="text"
                        placeholder="Search by name"
                        className="input input-bordered w-full md:w-64"
                        onChange={(e) => setSearch(e.target.value)}
                        value={search}
                    />
                </div>
            </div>

            {/* Data Grid */}
            {!isLoading && (
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-6">
                    {items.length === 0 ? (
                        <div className="col-span-full text-center text-gray-500 text-lg py-10 border rounded-md">
                            🚫 No data found matching your criteria.
                        </div>
                    ) : (
                        items.map((item) => <Card key={item._id} item={item} />)
                    )}
                </div>
            )}
        </div>
    );
};

export default ShowData;