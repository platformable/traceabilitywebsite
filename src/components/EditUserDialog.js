"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
//import { updateUser } from "../lib/actions/usersActions";

import { updateUser } from "@/app/lib/actions/usersActions";
import { useFormState, useFormStatus } from "react-dom";

export default function EditUserDialog({ title, selectedUser,clientToken }) {
  const searchParams = useSearchParams();
  const initialState = { message: null, errors: {} };
  const [formState, formAction] = useFormState(updateUser, initialState);
  const { pending } = useFormStatus();
  const router = useRouter();
  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");
  const action = searchParams.get("action");



  useEffect(() => {
    if (showDialog === "yes") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    router.back();
  };
  const updateUserWithClientToken = updateUser.bind(null, clientToken)

  const dialog =
    showDialog === "yes" && action === "edit" ? (
      <dialog
        ref={dialogRef}
        className="fixed inset-y-1/2  z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[400px] max-w-full flex flex-col">
          <div className="flex flex-row justify-end mb-4 pt-2 px-2">
            <button
              onClick={closeDialog}
              className="py-1 px-2 font-bold cursor-pointer rounded border-none w-8 h-8 font-bold bg-[var(--button-background-forms)]"
            >
              x
            </button>
          </div>
          <div className="flex gap-3 items-center px-5 mb-4">
            <img src="/manage-users/edit-user-information-icon.svg"  alt="edit icon" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>

          <form action={updateUserWithClientToken} className="px-5 pb-6">
            <section className="grid gap-y-5">
              {/* Send user_id as hidden */}
              <input
                type="text"
                name="user_id"
                className="p-3 border border-[#1A051D] rounded"
                defaultValue={selectedUser?.user_id}
                hidden
              />
              <label className="flex flex-col gap-2">
                <span className="uppercase text-xs font-bold">FIRST NAME</span>
                <input
                  type="text"
                  name="name"
                  className="p-3  border border-[#1A051D] rounded"
                  defaultValue={selectedUser?.name}
                  required
                />
              </label>
              <label className="flex flex-col gap-2">
                <span className="uppercase text-xs font-bold">LAST NAME</span>
                <input
                  type="text"
                  name="lastname"
                  className="p-3  border border-[#1A051D] rounded"
                  defaultValue={selectedUser?.lastname}
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
                  className="p-3  border border-[#1A051D] rounded"
                  defaultValue={selectedUser?.email}
                  required
                />
              </label>

              <div className="flex flex-col gap-2">
                <span className="uppercase text-xs font-bold">USER ROLE</span>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="user_role"
                    value="User"
                    className="p-4 "
                    defaultChecked={selectedUser?.user_role === "User"}
                  />
                  <span className="py-1 px-2 bg-[#1BF490] bg-opacity-20 rounded">User</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="user_role"
                    value="Supervisor"
                    className="p-4 "
                    defaultChecked={selectedUser?.user_role === "Supervisor"}
                  />
                  <span className="py-1 px-2 bg-[#FFEB00] bg-opacity-20 rounded">
                    Supervisor
                  </span>
                </label>
              </div>

              <div className={`${!selectedUser?.registration_date && 'hidden '} flex flex-col gap-2`}>
                <span className="uppercase text-xs font-bold">
                  IS ACTIVE/NOT ACTIVE
                </span>
                <span className="text-red-600 text-sm mb-2">
                  {!selectedUser?.registration_date && "User not registered yet"}
                </span>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="is_active"
                    className="p-4 "
                    value={true}
                    defaultChecked={selectedUser?.is_active === true}
                  />
                  <span className="py-1 px-2 bg-[#9AF3FA] rounded">Active</span>
                </label>
                <label className="flex items-center gap-3">
                  <input
                    type="radio"
                    name="is_active"
                    className="p-4 "
                    value={false}
                    defaultChecked={selectedUser?.is_active === false}
                  />
                  <span className="py-1 px-2 bg-[#F5CCCC] rounded">
                    Not active
                  </span>
                </label>
              </div>
            </section>

            <div className="flex justify-center gap-4 items-center mt-6  uppercase">
              <button
                disabled={pending}
                type="submit"
                className="bg-[var(--button-background-forms)] shadow py-1 px-10 rounded border-none"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
