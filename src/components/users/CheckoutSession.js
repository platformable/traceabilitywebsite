'use client'
import { handleCheckOutSession } from "@/app/lib/actions/usersActions";
import { useFormState, useFormStatus } from 'react-dom';

export default function CheckOutSession({children, customerId, priceId}) {

    const initialState = { message: null, errors: {} };
    const [formState, formAction] = useFormState(handleCheckOutSession, initialState);
    return (
        <div className="w-full">
            <form method="POST" action={formAction} className="w-full">
            <input hidden name="cus_id" value={customerId} readOnly/>
            <input hidden name="price_id" value={priceId} readOnly/>

            <button type="submit" className="w-full">{children}</button>
         </form>
        </div>
    );
}
