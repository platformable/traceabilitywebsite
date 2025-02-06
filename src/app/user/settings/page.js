import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import NavContent from "@/components/NavContent";
import { getSession } from "@auth0/nextjs-auth0";
import { userLiveData } from "@/app/lib/actions/usersActions";
import UpdateUser from "@/components/users/UpdateUser";
import DeleteUser from "@/components/users/DeleteUser";

const UserSettings = withPageAuthRequired(
  async (req, res) => {
    const { user } = await getSession();
    const clientToken = user?.APIToken;

    const myUser = await userLiveData(user?.email, clientToken);
    
    return (
      <div
        id="user-profile"
        className="relative py-7 shadow-inner "
      >
      
        <NavContent url={"/admin-panel"} />
        <section className="">
          <div className="max-w-screen-xl mx-auto bg-white rounded-md shadow p-7 ">
            <section className="users-content bg-white">
              <div className="flex items-center justify-between">
                <div className="">
                  <div className="flex items-center gap-2">
                    <img src="/manage-users/manage-users.svg" alt="cog icon" />
                    <span className="font-bold">User settings</span>
                  </div>
                  <span className="text-[12px] italic">
                    Enabling seamless management of permissions, roles, and
                    profiles
                  </span>
                </div>

{/*                 <ManageBilling customerId={user?.userStripeId} >
              <p className="block w-full px-4 py-2 text-left text-sm bg-[var(--button-background-forms)] rounded-md font-bold">
                
                Manage Billing 
              </p>

            </ManageBilling> */}
              </div>
            </section>
          </div>

         <UpdateUser myUser={myUser} user={user}/>
         <DeleteUser myUser={myUser} user={user}/>
        
        </section>
        {/* <Footer /> */}
      </div>
    );
  },
  { returnTo: "/admin-panel" }
);

export default UserSettings;
