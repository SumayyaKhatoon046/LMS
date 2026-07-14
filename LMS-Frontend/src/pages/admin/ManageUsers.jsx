import { useEffect, useState } from "react";

import {
  getUsers,
  deleteUser,
  updateRole,
} from "../../services/adminService";

const ManageUsers = () => {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data.users);

    } catch (error) {

      console.log(error);

    }

  };

  const handleDelete = async (id) => {

    if (!window.confirm("Delete User?")) return;

    try {

      await deleteUser(id);

      fetchUsers();

    } catch (error) {

      console.log(error);

    }

  };

  const handleRole = async (id, role) => {

    try {

      await updateRole(id, role);

      fetchUsers();

    } catch (error) {

      console.log(error);

    }

  };

  return (

    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Manage Users
      </h1>

      <table className="w-full border border-gray-300">

        <thead>

          <tr className="bg-gray-200">

            <th className="p-3">Name</th>

            <th className="p-3">Email</th>

            <th className="p-3">Role</th>

            <th className="p-3">Action</th>

          </tr>

        </thead>

        <tbody>

          {users.map((user) => (

            <tr
              key={user._id}
              className="text-center border-b"
            >

              <td className="p-3">
                {user.name}
              </td>

              <td className="p-3">
                {user.email}
              </td>

              <td className="p-3">

                <select
                  value={user.role}
                  onChange={(e) =>
                    handleRole(
                      user._id,
                      e.target.value
                    )
                  }
                  className="border rounded px-2 py-1"
                >

                  <option value="student">
                    Student
                  </option>

                  <option value="teacher">
                    Teacher
                  </option>

                  <option value="admin">
                    Admin
                  </option>

                </select>

              </td>

              <td className="p-3">

                <button
                  onClick={() =>
                    handleDelete(user._id)
                  }
                  className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded"
                >
                  Delete
                </button>

              </td>

            </tr>

          ))}

        </tbody>

      </table>

    </div>

  );

};

export default ManageUsers;