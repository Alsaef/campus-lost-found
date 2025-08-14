import React from 'react';
import useFoundSearch from '../hook/useFoundSearch';
import useSearch from '../hook/useSearch';

const Cliemd = () => {

  const { search, handleSearchChange } = useSearch();
    console.log(search);
    const {items,isLoading}=useFoundSearch(search)

    return (
        <div>
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold">Claimed Items</h2>
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
                    items?.filter(item=>item.type==='claimed').map(item=>(
                              <tr>
                            <td>{item.itemName}</td>
                            <td>{item.description}</td>
                            <td>{item.type}</td>
                            <td>{item.location}</td>
                            <td>{item.contact}</td>
                            <td>
                                <button disabled className="btn btn-success btn-sm">Claimed</button>
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

export default Cliemd;