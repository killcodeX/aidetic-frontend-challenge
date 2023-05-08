import React, { useEffect, useState, useContext } from "react";
import { Modal, Form, Input, Switch } from "antd";
import { fetchEditProfile } from "../../StateMangement/action";
import { StoreContext } from "../../StateMangement/index";
import { updateUserApi } from "../../API/api";

interface ModalProps {
  id: string;
  isModalOpen: boolean;
  setIsModalOpen: (value: boolean) => void;
}

export default function EditProfile({
  id,
  isModalOpen,
  setIsModalOpen,
}: ModalProps) {
  const { state, dispatch } = useContext(StoreContext);
  console.log(state);
  const [imagelink, setImageLink] = useState(state.updatedProfile.image_url);
  const [firstName, setFirstName] = useState(state.updatedProfile.first_name);
  const [lastName, setLastName] = useState(state.updatedProfile.last_name);
  const [email, setEmail] = useState(state.updatedProfile.email);
  const [description, setDescription] = useState(state.updatedProfile.description);
  const [verified, setVerified] = useState(state.updatedProfile.is_verified);
  const [form] = Form.useForm();

  const handleNewProfile = (event: React.FormEvent<EventTarget>) => {
    let obj = {
      updateProfileId: id,
      imageUrl: imagelink,
      firstName: firstName,
      lastName: lastName,
      email: email,
      description: description,
      isVerified: verified,
    };

    updateUserApi(obj);
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    dispatch(fetchEditProfile(id));
  }, []);
  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(!isModalOpen)}
      footer={[]}
      className="profile-create"
    >
      <Form
        form={form}
        initialValues={{
          imageUrl: imagelink,
          firstName: firstName,
          lastName: lastName,
          email: email,
          description: description,
          isVerified: verified,
        }}
        layout="vertical"
        onFinish={handleNewProfile}
        autoComplete="off"
      >
        <div className="modal-header">
          <div className="modal-title">Edit Profile</div>
        </div>
        <div className="modal-body">
          <div className="row">
            <div className="col">
              <div className="row">
                <div className="col">
                  <Form.Item
                    name="imagelink"
                    label="Image Link"
                    rules={[
                      { required: true },
                      { type: "url", warningOnly: true },
                      { type: "string", min: 6 },
                    ]}
                  >
                    <Input
                      value={imagelink}
                      onChange={(e) => setImageLink(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Item
                    name="firstName"
                    label="First Name"
                    rules={[
                      { required: true },
                      { warningOnly: true },
                      { type: "string", min: 2 },
                    ]}
                  >
                    <Input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                    />
                  </Form.Item>
                </div>
                <div className="col">
                  <Form.Item
                    name="lastName"
                    label="Last Name"
                    rules={[
                      { required: true },
                      { warningOnly: true },
                      { type: "string", min: 2 },
                    ]}
                  >
                    <Input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                      { required: true },
                      { type: "email", warningOnly: true },
                      { type: "string" },
                    ]}
                  >
                    <Input
                      type="text"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Item
                    name="description"
                    label="Description"
                    rules={[{ required: true }, { type: "string" }]}
                  >
                    <Input.TextArea
                      placeholder="Write a description for the talent"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                    />
                  </Form.Item>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <Form.Item name="verification" label="Verification">
                    <div className="verified-area">
                      <div className="verified-text">Talent is verified</div>
                      <Switch
                        checked={verified}
                        onChange={() => setVerified(!verified)}
                      />
                    </div>
                  </Form.Item>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="modal-footer">
          <button
            className="profile-accept"
            type="submit"
            //onClick={() => setIsModalOpen(!isModalOpen)}
          >
            Create Profile
          </button>
        </div>
      </Form>
    </Modal>
  );
}
