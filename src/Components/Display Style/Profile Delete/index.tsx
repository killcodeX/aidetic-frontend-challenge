import React from "react";
import { Modal } from "antd";

interface ModalProps {
  id: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
  handleProfileDelete: (value: string) => void;
}

export default function ProfileDelete({
  id,
  isModalOpen,
  setIsModalOpen,
  handleProfileDelete,
}: ModalProps) {
  return (
    <Modal open={isModalOpen} onCancel={() => setIsModalOpen(!isModalOpen)} footer={[]}>
      <div className="modal-header">
        <div className="modal-title">Remove Profile</div>
      </div>
      <div className="modal-body">
          Removed profile will be deleted permenantly and won’t be available
          anymore.
      </div>
      <div className="modal-footer">
        <button className='profile-cancel' key="back" onClick={() => setIsModalOpen(!isModalOpen)}>
          Cancel
        </button>
        <button className='profile-delete' onClick={() => handleProfileDelete(id)}>
          Delete
        </button>
      </div>
    </Modal>
  );
}
