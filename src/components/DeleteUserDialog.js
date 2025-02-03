"use client";
import { useRouter, useSearchParams } from "next/navigation";
import { useRef, useEffect } from "react";
import { useFormState, useFormStatus } from "react-dom";
//import { deleteUser } from "../lib/actions/usersActions";
import { deleteUser } from "@/app/lib/actions/usersActions";

export default function DeleteUserDialog({ title, selectedUser,clientToken }) {
  const router = useRouter();

  const searchParams = useSearchParams();

  const initialState = { message: null, errors: {} };
  const [formState, formAction] = useFormState(deleteUser, initialState);
  const { pending } = useFormStatus();

  const dialogRef = useRef(null);
  const showDialog = searchParams.get("showDialog");
  const action = searchParams.get("action");
  const user_id = searchParams.get("id");

// console.log(selectedUser)

  useEffect(() => {
    if (showDialog === "yes") {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = (e) => {
    e.preventDefault()
    dialogRef.current?.close();
    router.back();
  };

  const updateUserWithClientToken = deleteUser.bind(null, clientToken)
  const dialog =
    showDialog === "yes" && action === "delete" ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[500px] max-w-full bg-white flex flex-col">
          <div className="flex flex-row justify-end mb-4 pt-2 px-2">
            <button
              onClick={closeDialog}
              className="py-1 px-2 font-bold cursor-pointer rounded border-none w-8 h-8 font-bold bg-[var(--button-background-forms)]"
            >
              x
            </button>
          </div>
          <div className="flex gap-3 items-center px-5 mb-4">
            <img src="/manage-users/edit-user-information-icon.svg" alt="delete icon" />
            <h1 className="text-xl font-bold">{title}</h1>
          </div>
          <form action={updateUserWithClientToken}>
            <div className="px-5 pb-6">
              <label className="uppercase text-sm font-bold text-gray-800">NAME</label>
              <div className="bg-[var(--table-primary-color)] p-4  mb-5 mt-3">
                {selectedUser?.name + " " + selectedUser?.lastname}
              </div>
              <span className="font-medium ">
                Are you sure you want to delete this client?
              </span>
              <input type="text" className="hidden" value={user_id} name="user_id" />
              <div className="grid grid-cols-2 gap-4 items-center mt-6  uppercase">
                <button
                  type="submit"            
                  className="bg-[var(--button-background-forms)] py-1 px-2 rounded border-none font-bold"
                >
                  Yes
                </button>
                <button
                  disabled={pending}
                  onClick={closeDialog}
                  className="bg-black text-white py-1 px-2 rounded border-none"
                >
                  No
                </button>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    ) : null;

  return dialog;
}
