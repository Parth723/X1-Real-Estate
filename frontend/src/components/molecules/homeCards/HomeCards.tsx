import React from 'react';
import '../../../app/globals.css';

interface HomeCards {
  id: number;
  street_address: string;
  state: string;
  zip: string;
  sqft: number;
  beds: number;
  baths: number;
  list_price: number;
}

interface HomeCardsProps {
  homes: HomeCards[];
  onOpenModal: (homeId: number) => void;
}

const HomeCards: React.FC<HomeCardsProps> = ({ homes, onOpenModal }) => { 
   
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4 p-4">
      {homes.map((home: HomeCards) => (
        <div key={home.id} className="bg-violet-400 border border-violet-900 rounded-lg shadow-md p-4">
          <h2 className="text-lg font-bold mb-2">{home.street_address}</h2>
          <p><strong>State:</strong> {home.state || 'N/A'}</p>
          <p><strong>ZIP:</strong> {home.zip || 'N/A'}</p>
          <p><strong>Square Feet:</strong> {home.sqft}</p>
          <p><strong>Beds:</strong> {home.beds}</p>
          <p><strong>Baths:</strong> {home.baths}</p>
          <p><strong>Price:</strong> ${home.list_price.toLocaleString()}</p>
          <button
            onClick={() => onOpenModal(home.id)}
            className="mt-2 btn btn-primary border-none  text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Change Relation
          </button>
        </div>
      ))}
    </div>
  );
};

export default HomeCards;
