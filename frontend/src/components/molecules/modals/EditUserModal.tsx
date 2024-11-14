import React, { useState, useEffect } from 'react';

interface User {
  id: number;
  username: string;
}

interface EditUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  users: User[];
  selectedUserIds: number[];
  onUserSelectionChange: (selectedUserIds: number[]) => void; 
}

const EditUserModal: React.FC<EditUserModalProps> = ({
  isOpen,
  onClose,
  users,
  selectedUserIds,
  onUserSelectionChange,
}) => {
  const [checkedUserIds, setCheckedUserIds] = useState<number[]>(selectedUserIds);

  useEffect(() => {
    setCheckedUserIds(selectedUserIds);
  }, [selectedUserIds]);

  const handleCheckboxChange = (userId: number) => {
    setCheckedUserIds((prevCheckedUserIds) => {
      if (prevCheckedUserIds.includes(userId)) {
        return prevCheckedUserIds.filter((id) => id !== userId);
      } else {
        return [...prevCheckedUserIds, userId];
      }
    });
  };

  const handleSave = () => {
    console.log("The checkedUserIds: ",checkedUserIds);
    
    onUserSelectionChange(checkedUserIds); 
    onClose();  
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-lg w-full relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          &times;
        </button>
        <h2 className="text-xl font-bold mb-4">Select Users</h2>
        <div className="space-y-2 max-h-80 overflow-y-auto">
          {users.map((user) => (
            <div key={user.id} className="flex items-center">
              <input
                type="checkbox"
                id={`user-${user.id}`}
                checked={checkedUserIds.includes(user.id)}  
                onChange={() => handleCheckboxChange(user.id)} 
                className="mr-2 checkbox checkbox-primary"
              />
              <label htmlFor={`user-${user.id}`}>{user.username} </label>
            </div>
          ))}
        </div>
        <div className="mt-4 flex justify-end space-x-2">
          <button
            onClick={handleSave}
            className="btn bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
          >
            Save
          </button>
          <button
            onClick={onClose}
            className="btn bg-gray-300 text-gray-700 rounded-lg px-4 py-2 hover:bg-gray-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
