import React, { useState } from "react";
import { Modal, Form, Input, Switch } from "antd";

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
  const [imagelink, setImageLink] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");
  const [verified, setVerified] = useState(false);
  const [form] = Form.useForm();
  const handleNewProfile = (event: React.FormEvent<EventTarget>) => {
    let obj = {
      imagelink,
      firstName,
      lastName,
      email,
      description,
      verified,
    };

    console.log(obj);
    setIsModalOpen(!isModalOpen);
  };
  return (
    <Modal
      open={isModalOpen}
      onCancel={() => setIsModalOpen(!isModalOpen)}
      footer={[]}
      className="profile-create"
    >
      <Form
        form={form}
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
