import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  GlobalOutlined,
  HeartOutlined,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Card, Modal, Form, Input } from "antd";
import { User } from "../types";
import { useState } from "react";

interface UserCardProps {
  user: User;
  onDelete: (userId: number) => void;
  onLike: (userId: number) => void;
  onEdit: (userId: number, updatedUser: Partial<User>) => void;
  isLiked: boolean;
}

function UserCard({ user, onDelete, onLike, onEdit, isLiked }: UserCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [form] = Form.useForm();

  const handleOpenModal = () => {
    form.setFieldsValue({
      name: user.name,
      email: user.email,
      phone: user.phone,
      website: user.website,
    });
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    form.resetFields();
  };

  const handleOk = async () => {
    try {
      const values = await form.validateFields();
      onEdit(user.id, values);
      setIsModalOpen(false);
      form.resetFields();
    } catch (error) {
      console.error("Validation failed:", error);
    }
  };

  return (
    <>
      <Card
        className="h-[409px] w-full overflow-hidden !rounded-xs"
        cover={
          <img
            alt="example"
            className="h-[200px] object-contain bg-[#f5f5f5] !rounded-t-xs w-full"
            src={`https://api.dicebear.com/9.x/avataaars/svg/seed=${user.username}`}
          />
        }
        actions={[
          <>
            {isLiked ? (
              <HeartFilled
                className="!text-xl !text-red-500"
                key="heart"
                onClick={() => onLike(user.id)}
              />
            ) : (
              <HeartOutlined
                className="!text-xl !text-red-500"
                key="heart"
                onClick={() => onLike(user.id)}
              />
            )}
          </>,
          <EditOutlined
            className="!text-lg"
            key="edit"
            onClick={handleOpenModal}
          />,
          <DeleteFilled
            className="!text-lg"
            key="trash"
            onClick={() => onDelete(user.id)}
          />,
        ]}
      >
        <h3 className="font-medium text-base">{user.name}</h3>
        <div className="text-[#000000a6] space-y-1.5 text-sm mt-2 mb-1.5">
          <div className="flex flex-row">
            <MailOutlined className="text-lg" />
            <p className="ml-[10px]">{user.email}</p>
          </div>
          <div className="flex flex-row">
            <PhoneOutlined className="text-lg" />
            <p className="ml-[10px]">{user.phone}</p>
          </div>
          <div className="flex flex-row">
            <GlobalOutlined className="text-lg" />
            <p className="ml-[10px]">http://{user.website}</p>
          </div>
        </div>
      </Card>

      <Modal
        title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        okText="OK"
        cancelText="Cancel"
        width={520}
        style={{ top: 100 }}
      >
        <Form
          form={form}
          layout="horizontal"
          initialValues={{
            name: user.name,
            email: user.email,
            phone: user.phone,
            website: user.website,
          }}
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          className=" !space-y-8"
        >
          <Form.Item
            name="name"
            label={<>Name:</>}
            colon={false}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="email"
            label={<>Email:</>}
            colon={false}
            rules={[
              { required: true, message: "This field is required" },
              { type: "email", message: "Please enter a valid email!" },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="phone"
            label={<>Phone:</>}
            colon={false}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="website"
            label={<>Website:</>}
            colon={false}
            rules={[{ required: true, message: "This field is required" }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UserCard;
