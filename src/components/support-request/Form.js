"use client";

import {  useEffect, useRef, useState, useTransition } from "react";
import { sendSupportRequest } from "@/app/lib/nocodb-traceability-table";
import { useFormState } from "react-dom";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/navigation";
export default function Form({userId, email,clientToken}) {
    const formRef = useRef(null)
  const initialState = { message: null, errors: {} };
  const router = useRouter()
  const [state, formAction] = useFormState(sendSupportRequest, initialState);
  const [isLoading, setIsLoading] = useState(false)
  const [isPending, startTransition] = useTransition();

  

  useEffect(() => {
    let timeOutID;
    setIsLoading(true)

    if (!state.success) {
     
        toast.error(state.message);
     } else {
        toast.success(state.message);
        timeOutID = setTimeout(() =>   router.push('/admin-panel'),2000)
      }
  
    setIsLoading(false)

    return () => clearTimeout(timeOutID);
  }, [state]);
  
  /* const updateUserWithClientToken = sendSupportRequest.bind(null, clientToken) */

  console.log("state",state)
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    
      <form
        action={formAction}
        className="grid gap-y-6  mt-10 "
        ref={formRef}
      >
         <input
          type="text"
          defaultValue={userId}
          name="user_id"
          hidden
          readOnly
        />
        <input
          type="text"
          defaultValue={clientToken}
          name="clientToken"
          hidden
          readOnly
        />
        <div>
          <label className="uppercase font-bold text-xs mb-2 block">Email</label>
          <input
            type="email"
            defaultValue={email}
            name="email"
            // disabled
            className="pointer-events-none py-2 px-3 border rounded border-black w-full"
            required
          />
        </div>
        <div>
          <label className="uppercase font-bold text-xs mb-2 block">Subject</label>
          <select name="subject" className=" py-2 px-3 border rounded border-black w-full" required>
            <option value="" className={``}></option>
            <option value="Bug issue/site not working properly" className={``}>
            Bug issue/site not working properly
            </option>
            <option value="Page doesn’t load" className={``}>
            Page doesn’t load
            </option>
            <option value="Can’t download file" className={``}>
            Can’t download file
            </option>
            <option value="Feature request idea" className={``}>
            Feature request idea
            </option>
            <option value="Other" className={``}>
            Other
            </option>
          </select>
        </div>

        <div>
          <label className="uppercase font-bold text-xs mb-2 block">Message</label>

          <textarea
            name="message"
            required
            className="w-full h-48 border border-black rounded px-3 py-2"
          />
        </div>
        {!isPending ? (
        <center>
              <button
           //type="submit"
            onClick={() => startTransition(() => formRef.current.requestSubmit())}
            className="bg-[#A37DEF] font-bold py-2 px-6 rounded shadow "
          >
            SEND
          </button>
        </center>
        ) : (
          <Loader />
        )}
      </form>
    </>
  );
}
