import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { fetchActiveUsers } from "@/app/lib/usersData";
import Link from "next/link";
import UsersTable from "@/components/users/UsersTable";
// import EditUserDialog from "../../components/EditUserDialog";
import EditUserDialog from "@/components/EditUserDialog";
import DeleteUserDialog from "@/components/DeleteUserDialog";
// import DeleteUserDialog from "@/app/components/DeleteUserDialog";
import NavContent from "@/components/NavContent";
//import Footer from "@/ui/Footer";
import { getSession } from "@auth0/nextjs-auth0";

const Users = withPageAuthRequired(
  async (req, res) => {
    const { user } = await getSession();

    const clientToken = user?.APIToken

    
    const allUsers = await fetchActiveUsers(clientToken);
    const selectedUser = req.searchParams
      ? allUsers.find((user) => user.user_id === req.searchParams.id)
      : null;
    return (
      <main id="users-dashboard" className="bg-primary-gradient relative py-7 pb-20 min-h-screen shadow-inner">
      <EditUserDialog
        title={"Edit user information"}
        selectedUser={selectedUser}
        clientToken={clientToken}
      />
      <DeleteUserDialog title={"Delete user"} selectedUser={selectedUser} clientToken={clientToken}/>
      <NavContent url={'/home'}/>
      <UsersTable allUsers={allUsers} />
      {/* <Footer /> */}

    </main>
    );
  },
  { returnTo: "/users" }
);

export default Users;
