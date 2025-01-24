'use client';
import { useFormState, useFormStatus } from 'react-dom';
import { deleteAuth0User } from '@/app/lib/actions/usersActions';
import Loader from '../Loader';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <>
    {pending ? <Loader /> :
        <button
          disabled={pending}
          type="submit"
          className="bg-[#800E13] shadow py-1 px-10 rounded border-none text-white"
        >
           Delete
        </button>
  }
    </>
  );
}


export default function DeleteUser({user}) {
  const router = useRouter(); 

    const clientToken = user?.APIToken; 
    const initialState = { message: null, errors: false };
    const [deleteUserState, deleteUserAction] = useFormState(deleteAuth0User, initialState)

    useEffect(() => {
        if(deleteUserState.message === 'User deleted successfuly'){
            setTimeout(() => {
               router.push('/api/auth/logout')
            }, 2000);
        }
    }, [deleteUserState.message]);
    return (
      <div className="max-w-screen-xl mx-auto bg-white border border-[#800E13] rounded-md shadow p-7 my-7">
      <section className="users-content bg-white">
        <div className="flex items-center justify-between">
          <div className="">
            <div className="flex items-center gap-2">
              {/* <img src="/manage-users/manage-users.svg" alt="cog icon" /> */}
              <span className="font-bold text-[#800E13]">Danger zone</span>
            </div>
            <span className="text-[14px] font-bold">
            Irreversible and destructive actions
            </span> <br />
            <span className="text-[12px] italic">
            Once you delete your account, there is no going back. Please be certain.
            </span>
          </div>

      
        </div>
        <form action={deleteUserAction} className="my-7">
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
          className="p-3 border border-[#1A051D] rounded"
          defaultValue={user?.sub}
          hidden
        />
        <label className="flex flex-col gap-2">
          <span className="uppercase text-xs font-bold">
            EMAIL ADDRES
          </span>
          <input
            type="email"
            name="email"
            className="p-3  border border-[#1A051D] rounded"
            //   defaultValue={selectedUser?.email}
            placeholder="Type your email to confirm"
            required
          />
        </label>
      </section>

      <div className="flex justify-center gap-4 items-center mt-6  uppercase">
        <SubmitButton />
      </div>
      {deleteUserState.message && (<center className='text-sm fonte-medium mt-4'>{deleteUserState.message}
            {deleteUserState.error && <img src='/cross-icon.svg' alt='success' className='ml-1 w-5 h-5 inline' />}
        </center>)}
    </form>
      </section>
    </div>
    );
}
