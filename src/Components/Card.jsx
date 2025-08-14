import React from 'react';

const Card = ({ item }) => {
  const {
    itemName,
    type,
    name,
    roll,
    location,
    description,
    contact,
  } = item;

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-md p-5">
      <div className="mb-3">
        <h2 className="text-xl font-semibold text-pink-600 capitalize">
          {type === 'found' && 'Found Item' || type === 'lost' &&'Lost Item'||type==='claimed'&& 'claimed Item' }: {itemName}
        </h2>
        <p className="text-gray-500">Location: {location}</p>
      </div>

      <div className="mb-4">
        <p className="text-gray-700">
          <span className="font-semibold">Description:</span> {description}
        </p>
      </div>

      <div className="mb-4 border-t pt-3">
        <p className="text-sm text-gray-500">
          <span className="font-medium">Reported by:</span> {name} (Roll: {roll})
        </p>
        <p className="text-sm text-gray-500">
          <span className="font-medium">Contact:</span> 📞 {contact}
        </p>
      </div>
    </div>
  );
};

export default Card;
