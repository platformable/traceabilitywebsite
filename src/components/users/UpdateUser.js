'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { updateUserSettings } from '@/app/lib/actions/usersActions';
import Loader from '../Loader';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
function SubmitButton() {
    const { pending } = useFormStatus();
  
    return (
      <>
        { pending ? <Loader />:
            <button
              disabled={pending} 
              type="submit"
              className="bg-[var(--button-background-forms)] shadow py-1 px-10 rounded border-none"
            >
               Save
            </button>
        }
      </>
    );
  }


export default function UpdateUser({myUser, user}) {
    const clientToken = user?.APIToken;
    const initialState = { message: null, errors: false };   
    const [updateUserState, updateUserAction] = useFormState(updateUserSettings, initialState)
    const router = useRouter();
    useEffect(() => {
        if(updateUserState.message === 'User settings updated successfully' && updateUserState.error === false) {
            // setTimeout(() => {
               router.replace('/api/auth/silent-login')
            // }, 500)
        }
    }, [updateUserState.message])
    return (
        <div className="max-w-screen-xl mx-auto bg-white rounded-md shadow p-7 my-7">
        <section className="users-content bg-white">
          <div className="flex items-center justify-between">
            <div className="">
              <div className="flex items-center gap-2">
                {/* <img src="/manage-users/manage-users.svg" alt="cog icon" /> */}
                <span className="font-bold">User profile</span>
              </div>
              <span className="text-[12px] italic">
                Your personal information
              </span>
            </div>

        
          </div>
          <form action={updateUserAction} className="my-7">
        <section className="grid gap-y-5">
          {/* Send user_id as hidden */}
          <input
            type="text"
            name="clientToken"
            value={clientToken}
            hidden
            readOnly
            />
          <input
            type="text"
            name="user_id"
            value={myUser?.user?.userid}
            hidden
            readOnly
          />
          <label className="flex flex-col gap-2">
            <span className="uppercase text-xs font-bold">FIRST NAME</span>
            <input
              type="text"
              name="name"
              className="p-3  border border-[#1A051D] rounded"
              defaultValue={myUser?.user?.name}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="uppercase text-xs font-bold">LAST NAME</span>
            <input
              type="text"
              name="lastname"
              className="p-3  border border-[#1A051D] rounded"
              defaultValue={myUser?.user?.lastname}
              required
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="uppercase text-xs font-bold">
              EMAIL ADDRES
            </span>
            <input
              type="email"
              name="email"
              className="p-3  border border-[#1A051D] rounded bg-blue-300/30"
              value={user?.email}
              disabled
              required
            />
          </label>

        

       
        </section>

        <div className="flex justify-center gap-4 items-center mt-6  uppercase">
          
        <SubmitButton />
        </div>
        {updateUserState.message && (<center className='text-sm fonte-medium mt-4'>{updateUserState.message}
        {updateUserState.error && updateUserState.message ? <img src='/cross-icon.svg' alt='success' className='ml-1 w-5 h-5 inline' /> : 
        <img src='/green-tick.svg' alt='success' className='ml-1 w-5 h-5 inline' />}   
        </center>)}
      </form>
        </section>
      </div>
    );
}
