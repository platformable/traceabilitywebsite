import Link from "next/link";
import UserListRow from "./UserListRow";

export default function UsersTable({allUsers}) {
    return (
        <>
        <div className="max-w-screen-xl mx-auto bg-white rounded-md shadow p-7">
          <section className="users-content bg-white">
            <div className="flex items-center justify-between">
              <div className="">
                <div className="flex items-center gap-2">
                  <img src="/manage-users/manage-users.svg" alt="cog icon" />
                  <span className="font-bold">Manage Users</span>
                </div>
                <span className="text-[12px] italic">
                  Enabling seamless management of permissions, roles, and
                  profiles
                </span>
              </div>

             {/*  <Link href="authorised-users">
                <button className="bg-[var(--table-primary-color)] flex justify-between text-lg items-center py-2 rounded-md shadow-md gap-3 font-medium px-5">
                  <img src="/manage-users/view-authorised-users-icon.svg" alt="" width={18} />
                  <span className="text-sm font-bold">View authorized users</span>
                </button>
              </Link> */}
            </div>

            <div className="table-container border border-[var(--border-table-users)] mt-5">
              <div className="grid grid-cols-[1fr_1fr_1fr_2.5fr_1fr_1fr_1fr_1fr]  uppercase  divide-[var(--border-table-users)] divide-x divide-solid">
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left">Name</span>
                </div>
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left">Lastname</span>
                </div>
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left"> User Role</span>
                </div>
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left">Email</span>
                </div>
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left">Activated in</span>
                </div>
                <div className="head-row font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs text-left">Last login</span>
                </div>
                <div className="head-row text-center font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs">Edit</span>
                </div>
                <div className="head-row text-center font-bold bg-[var(--table-primary-color)] p-2">
                  <span className="text-xs">Delete</span>
                </div>
              </div>

              <div className="divide-[var(--border-table-users)] divide-y divide-solid">
                {allUsers
                  ? allUsers.map((user, index) => {
                      return (
                        <UserListRow
                          user={user}
                          index={index}
                          key={index}
                        //   setShowEditUserModal={setShowEditUserModal}
                        //   showEditUserModal={showEditUserModal}
                        //   showDeleteUserModal={showDeleteUserModal}
                        //   setShowDeleteUserModal={setShowDeleteUserModal}
                        //   setSelectedUser={setSelectedUser}
                        //   setSelectedEntity={setSelectedEntity}
                        />
                      );
                    })
                  : "No Data"}
              </div>
            </div>
          </section>
        </div>
      </>
    );
}
