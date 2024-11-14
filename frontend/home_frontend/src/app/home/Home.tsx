'use client';

import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/redux/store';
import { setSelectedUser } from '@/lib/redux/slices/userSlice';
import { homeService, getUsersForHomeID } from '@/modules/services/home/homeService';
import HomeCards from '@/components/molecules/homeCards/HomeCards';
import EditUserModal from '@/components/molecules/modals/EditUserModal';
import Dropdown from '@/components/atoms/dropdown/Dropdown';
import PaginationControls from '@/components/molecules/paginationControl/PaginationControls';
import Spinner from '@/components/atoms/loaders/Spinner';
import { getAllUsers } from '@/modules/services/user/userService';
import { updateUsersForHome } from '@/modules/services/user_home_relationship/userHomeRelationship';
import Alert from '@/components/atoms/alert/Alert';

const Homes = () => {
  const dispatch = useDispatch();
  const selectedUser = useSelector((state: RootState) => state.user.selectedUser);
  const [selectedUserIds, setSelectedUserIds] = useState<number[]>([]);
  const [selectedHomeId, setSelectedHomeId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [page, setPage] = useState(1);
  const pageSize = 10;

  const [homesData, setHomesData] = useState<any>(null);
  const [homesLoading, setHomesLoading] = useState(true);
  const [homesError, setHomesError] = useState<string | null>(null);

  const [usersData, setUsersData] = useState<any>(null);
  const [usersLoading, setUsersLoading] = useState(true);

  const [statusMessage, setStatusMessage] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      setUsersLoading(true);
      try {
        const data = await getAllUsers();
        setUsersData(data);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        setUsersLoading(false);
      }
    };

    fetchUsers();
  }, []);

  const fetchHomesData = async () => {
    if (!selectedUser) {
      setHomesData([]);
      setHomesLoading(false);
      return;
    }

    setHomesLoading(true);
    try {
      const data = await homeService(selectedUser, page, pageSize);
      setHomesData(data);
    } catch (error: any) {
      setHomesError(error.message || 'Failed to fetch homes');
    } finally {
      setHomesLoading(false);
    }
  };

  useEffect(() => {
    fetchHomesData();
  }, [selectedUser, page]);

  useEffect(() => {
    const fetchUsersForHome = async () => {
      if (!selectedHomeId) {
        setSelectedUserIds([]);
        return;
      }

      try {
        const data = await getUsersForHomeID(selectedHomeId);
        setSelectedUserIds(data.map((user: { id: number }) => user.id));
      } catch (error) {
        console.error('Error fetching users for home:', error);
      }
    };

    fetchUsersForHome();
  }, [selectedHomeId]);

  const handleUserChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const userId = Number(event.target.value);
    if (!isNaN(userId)) {
      dispatch(setSelectedUser(userId));
    }
  };

  const handleUserSelectionChange = async (updatedUserIds: number[]) => {
    setSelectedUserIds(updatedUserIds);

    if (selectedHomeId) {
      try {
        const result = await updateUsersForHome({
          homeId: selectedHomeId,
          updatedUsers: updatedUserIds,
        });

        fetchHomesData();
        setStatusMessage({ type: 'success', message: 'Users updated successfully!' });
        setTimeout(() => {
          setStatusMessage(null);
        }, 5000);

      } catch (error) {
        console.error('Error updating users:', error);

        setStatusMessage({ type: 'error', message: 'Error updating users. Please try again.' });
        setTimeout(() => {
          setStatusMessage(null);
        }, 5000);
      }
    }
  };

  const mapUsersToDropdownOptions = (users: any[]) => {
    return users.map((user: { id: number; username: string }) => ({
      id: user.id,
      label: user.username,
    }));
  };

  const handleOpenModal = (homeId: number) => {
    setSelectedHomeId(homeId);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div className="flex w-full justify-center">
        <div>
          <h1 className='flex justify-center items-center '>Select a User</h1>
          {usersLoading ? (
            <Spinner />
          ) : usersData ? (
            <Dropdown
              options={mapUsersToDropdownOptions(usersData)}
              selectedValue={selectedUser || ''}
              onChange={handleUserChange}
              placeholder="-- Select a User --"
            />
          ) : (
            <p>No users available</p>
          )}
        </div>
      </div>

      {statusMessage && (
        <Alert
          type={statusMessage.type}
          message={statusMessage.message}
        />
      )}

      <div className="mt-2 mb-2">
        {homesLoading ? (
          <Spinner />
        ) : homesError ? (
          <p>{homesError}</p>
        ) : homesData?.data?.length > 0 ? (
          <HomeCards homes={homesData.data} onOpenModal={handleOpenModal} />
        ) : (
          <p>No homes available for the selected user.</p>
        )}
      </div>

      {homesData?.total > 0 && (
        <div className="w-full flex justify-center items-center">
          <PaginationControls
            currentPage={page}
            dataPerPage={pageSize}
            totalPages={homesData?.total || 0}
            handlePreviousPage={() => setPage(page - 1)}
            handleNextPage={() => setPage(page + 1)}
          />
        </div>
      )}

      <EditUserModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        users={usersData || []}
        selectedUserIds={selectedUserIds}
        onUserSelectionChange={handleUserSelectionChange}
      />
    </div>
  );
};

export default Homes;
