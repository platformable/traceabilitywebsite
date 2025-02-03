'use client'
import { handleCheckOutSession, handleCustomerPortal } from "@/app/lib/actions/usersActions";
import { useFormState, useFormStatus } from 'react-dom';

export default function ManageBilling({children, customerId, }) {

    const initialState = { message: null, errors: {} };
    const [formState, formAction] = useFormState(handleCustomerPortal, initialState);
    return (
        <div className="">
            <form method="POST" action={formAction} className="">
            <input hidden name="cus_id" value={customerId} readOnly/>

            <button type="submit" className="w-full">{children}</button>
         </form>
        </div>
    );
}
