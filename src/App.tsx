import { useEffect, useState } from "react";
import UserCard from "./components/UserCard";
import { ConfigProvider } from "antd";
import { User } from "./types";

function App() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchUsers = async () => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        const usersWithLiked = data.map((user: User) => ({
          ...user,
          isLiked: false,
        }));
        setUsers(usersWithLiked);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleDelete = (userId: number) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  const handleLike = (userId: number) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, isLiked: !user.isLiked } : user
      )
    );
  };

  const handleEdit = (userId: number, updatedUser: Partial<User>) => {
    setUsers(
      users.map((user) =>
        user.id === userId ? { ...user, ...updatedUser } : user
      )
    );
  };

  if (loading) {
    return (
      <div className="spinner">
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }

  return (
    <ConfigProvider
      theme={{
        components: {
          Card: {
            actionsBg: "#fafafa",
          },
        },
      }}
    >
      <div className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {users.map((user) => (
          <UserCard
            key={user.id}
            user={user}
            onDelete={handleDelete}
            onLike={handleLike}
            onEdit={handleEdit}
            isLiked={user.isLiked || false}
          />
        ))}
      </div>
    </ConfigProvider>
  );
}

export default App;
