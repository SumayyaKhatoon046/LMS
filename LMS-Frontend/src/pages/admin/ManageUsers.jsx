import { useEffect, useMemo, useState } from "react";

import {
  getUsers,
  deleteUser,
  updateRole,
} from "../../services/adminService";

const ManageUsers = () => {

  const [users, setUsers] = useState([]);

  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  useEffect(() => {

    fetchUsers();

  }, []);

  const fetchUsers = async () => {

    try {

      const data = await getUsers();

      setUsers(data.users || []);

    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

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

  const filteredUsers = useMemo(() => {

    return users.filter((user) =>
      user.name?.toLowerCase().includes(search.toLowerCase()) ||
      user.email?.toLowerCase().includes(search.toLowerCase())
    );

  }, [users, search]);

   return (

    <div className="min-h-screen bg-slate-950 text-white p-8">

      <h1 className="text-4xl font-bold mb-8">
        Manage Users
      </h1>

      <input
        type="text"
        placeholder="Search User..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-8 p-3 rounded-xl bg-slate-900 border border-slate-700 outline-none"
      />

      {loading ? (

        <h2 className="text-center text-2xl">
          Loading Users...
        </h2>

      ) : filteredUsers.length === 0 ? (

        <h2 className="text-center text-2xl">
          No Users Found
        </h2>

      ) : (

        <div className="overflow-x-auto rounded-2xl">

          <table className="w-full">

            <thead className="bg-slate-900">

              <tr>

                <th className="p-4 text-left">
                  Name
                </th>

                <th className="p-4 text-left">
                  Email
                </th>

                <th className="p-4 text-center">
                  Role
                </th>

                <th className="p-4 text-center">
                  Action
                </th>

              </tr>

            </thead>

            <tbody>

              {filteredUsers.map((user) => (

                <tr
                  key={user._id}
                  className="border-b border-slate-800"
                >

                  <td className="p-4">
                    {user.name}
                  </td>

                  <td className="p-4">
                    {user.email}
                  </td>

                  <td className="p-4 text-center">

                    <select
                      value={user.role}
                      onChange={(e) =>
                        handleRole(
                          user._id,
                          e.target.value
                        )
                      }
                      className="bg-slate-800 border border-slate-700 rounded-lg px-3 py-2"
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

                  <td className="p-4 text-center">

                    <button
                      onClick={() =>
                        handleDelete(user._id)
                      }
                      className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg"
                    >
                      Delete
                    </button>

                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      )}

    </div>

  );

};

export default ManageUsers; 