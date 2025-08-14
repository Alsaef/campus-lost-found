import React from 'react';
import useFoundSearch from '../hook/useFoundSearch';
import useSearch from '../hook/useSearch';
import axios from 'axios';
import axiosInstance from '../hook/axiosInstance';

const Found = () => {

    const { search, handleSearchChange } = useSearch();
    console.log(search);
    const { items, isLoading,refetch } = useFoundSearch(search);

    const handleClaim = async (id) => {
        try {
            const res = await axiosInstance.patch(`/claim/${id}`);
            const data = res.data;
            if (data.success) {
                alert('Item claimed successfully!');
                refetch()
            } else {
                alert(data.message || 'Failed to claim item.');
            }
        } catch (error) {
            alert('Server error 500');
        }
    };

    return (
        <div>
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Found Items</h2>
                <input
                    onChange={handleSearchChange}
                    type="text"
                    placeholder="Search items..."
                    className="input input-bordered w-64"
                />
            </div>
            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>Item Name</th>
                            <th>Description</th>
                            <th>type</th>
                            <th>Location</th>
                            <th>Contact</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            items?.filter(item => item.type === 'found').map(item => (
                                <tr>
                                    <td>{item.itemName}</td>
                                    <td>{item.description}</td>
                                    <td>{item.type}</td>
                                    <td>{item.location}</td>
                                    <td>{item.contact}</td>
                                    <td>
                                        <button disabled={item.type === 'claimed'} onClick={() => handleClaim(item._id)} className="btn btn-success btn-sm">Claimed</button>
                                    </td>
                                </tr>
                            ))
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Found;