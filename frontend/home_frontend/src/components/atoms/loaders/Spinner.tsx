import React from 'react';

const Spinner = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="spinner-container">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    </div>
  );
};

export default Spinner;
