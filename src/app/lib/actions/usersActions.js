"use server";
import { capitalizeFirstLetter, handleDownloadPDF } from "../utils";
import { v4 as uuidv4 } from 'uuid';
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { headers } from "next/headers";



/* export async function getUserToken() {
  const { user } = await getSession();

  return user.APIToken
} */

export async function handleOnboarding(customerId, clientToken) {
  try {
    const res = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/updateOnBoarding/${customerId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${clientToken}`,
      }
  })
    // const data = await res.json()
    
    if (res.status !== 200) {
      throw new Error('Service error try again')
    } 

   } catch(error) {
    console.log(error)
   }

}


export async function userLiveData(userEmail,clientToken) {
   
const dbUrl=`${process.env.DEV_BACKEND_API_URL}/users/findUser/${userEmail}`
//   const date = new Date().toISOString().split("T")[0];
  try {
    const response = await fetch(dbUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${clientToken}`,
      },
      
    }, { cache: 'no-store' });
    const result = await response.json();

    // console.log("user updation", result)
    return result;
  } catch (error) {
    console.log("user live data", error)
    return {
      message: "Database Error: Failed to get user.",
    };
  }
/*    redirect(`/home`); */
}


export async function handleCustomerPortal(prevState, formData) {
  let portal_URL;
  const customerId = formData.get("cus_id").trim()
  try {

    const session = await fetch('https://api.stripe.com/v1/billing_portal/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${process.env.STRIPE_API_KEY_CONVERTED_TO_BASE64}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        customer: customerId,
        // this need to redirect to dashboard to let admin panel layout reload
        return_url: `${process.env.NEXT_PUBLIC_SITE_URL}/dashboard`,
        // "components[pricing_table][enabled]": true
      })
    })
    const data = await session.json()
      // console.log("session info", data)
    portal_URL = data?.url

   } catch(error) {
    return error
   }
   redirect(portal_URL) // Navigate to the new page

}

// Check this in the console
// curl https://api.stripe.com/v1/checkout/sessions   -u "sk_test_IkHMzLtdyBJT41VUt8OrCjrn00xL4jYJXb:"   --data-urlencode
// success_url="https://example.com/success"   -d "line_items[0][price]"=price_1PlZgFGThNJWcMfsMTtAKTv5   -d "line_items[0
// ][quantity]"=1   -d mode=subscription
export async function handleCheckOutSession(prevState, formData) {
  let checkoutSessionURL;
  const customerId = formData.get("cus_id").trim()
  const priceId = formData.get("price_id").trim()


  const heads = headers()

  const pathname = heads.get("x-invoke-path") || "";
  try {

    const session = await fetch('https://api.stripe.com/v1/checkout/sessions', {
      method: 'POST',
      headers: {
        'Authorization': `Basic ${process.env.STRIPE_API_KEY_CONVERTED_TO_BASE64}`,
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      body: new URLSearchParams({
        customer: customerId,
        success_url: `${process.env.NEXT_PUBLIC_SITE_URL}/payment-success`,
        "line_items[0][price]": priceId,
        "line_items[0][quantity]": 1,
        mode: 'subscription',
      })
    })
    const data = await session.json()
    checkoutSessionURL = data?.url

   } catch(error) {
    return error
   }
   revalidatePath("/home",'layout');
   redirect(checkoutSessionURL) // Navigate to the new page
}
export async function createUser(prevState, formData) {

  const data = {
    user_id: uuidv4(),
    name: capitalizeFirstLetter(formData.get("name").trim()),
    lastname: capitalizeFirstLetter(formData.get("lastname").trim()),
    email: formData.get("email"),
    user_role: formData.get("user_role"),
  };

  try {
    const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.DEV_BACKEND_API_TOKEN}`,
      },
      body: JSON.stringify(data),
    });
    const result = await response.json();

    if (response.status === 409) {
        return { message: result.message}
    }

    // console.log("user creation", response)   
    

    // return { message: result.message};
  } catch (error) {
    console.log("user creation error", error)
    return {
      message: "Database Error: Failed to Create User.",
    };
  }
  // Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server. You can do this with the revalidatePath function from Next.js:
    revalidatePath("/home/authorised-users");
    redirect('/home/authorised-users');
}

export async function updateUser(clientToken, formData) {
//  const userToken = await getUserToken()



    const data = {
      user_id: formData.get('user_id'),
      name: capitalizeFirstLetter(formData.get("name").trim()),
      lastname: capitalizeFirstLetter(formData.get("lastname").trim()),
      email: formData.get("email"),
      user_role: formData.get("user_role"),
      is_active: formData.get("is_active")
    };
  
  //   const date = new Date().toISOString().split("T")[0];
    try {
      const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientToken}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      // console.log("user updation", result)
      // return result;
    } catch (error) {
      console.log("user update error", error)
      return {
        message: "Database Error: Failed to edit User.",
      };
    }
      //revalidatePath("/home/authorised-users");
      revalidatePath("/admin-panel/users");

     redirect(`/admin-panel/users`);
  }

  export async function updateUserSettings(initialState, formData) {
        const data = {
          user_id: formData.get('user_id'),
          name: capitalizeFirstLetter(formData.get("name").trim()),
          lastname: capitalizeFirstLetter(formData.get("lastname").trim()),
        };
      
        const clientToken = formData.get("clientToken")

        try {
          const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/updateUserSettings`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${clientToken}`,
            },
            body: JSON.stringify(data),
          });
          const result = await response.json();
      
          if (result.status !== 200) {
            throw new Error('Database Error: Failed to edit User.')
          }

          revalidatePath("/user/settings");
          return {
            message: "User settings updated successfully",
            error: false
          }

        } catch (error) {
          console.log("user update error", error)
          return {
            message: error.message ||"Transaction fails, try again." ,
            error: true
          };
        }
        // revalidatePath("/user/settings");
        // redirect(`/user/settings`);
      }

  export async function deleteUser(clientToken, formData) {
    // console.log("delete user")
    const data = {
      user_id: formData.get('user_id'),
    };
  
  //   const date = new Date().toISOString().split("T")[0];
    try {
      const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/delete/${data.user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientToken}`,
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
  
      // console.log("user delete", result)
      // return result;
    } catch (error) {
      console.log("user delete error", error)
      return {
        message: "Database Error: Failed to Create User.",
      };
    }
    // Since you're updating the data displayed in the invoices route, you want to clear this cache and trigger a new request to the server. You can do this with the revalidatePath function from Next.js:
    revalidatePath("/home/authorised-users");
     redirect(`/home/authorised-users`);
  }
  export async function deleteAuth0User(initialState, formData) {
    const clientToken = formData.get("clientToken")

    const data = {
      user_id: formData.get('user_id'),
    };
  
    try {
      const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/users/deleteAuth0/${data.user_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientToken}`,
        },
        // body: JSON.stringify(data),
      });
      const result = await response.json();
      if(result.statusText === "Ok") {
        return {
          message: "User deleted successfuly",
          error: false
        };
      } else {
        return {
          message: "Database Error: Failed to delete User.",
          error: true
        };
      }
    } catch (error) {
      console.log("user delete error", error)
      return {
        message: "Something went wrong try again",
        error: true
      };
    }
   
  }
  //Survey for ux feedback
  export async function saveSurvey(prevState,formData) {

    const clientToken = formData?.clientToken
    
    try {
      if(Object.values(formData).some(( value, index) =>  value.isRequired && value.answer.length === 0) ) {
        return { message: 'Please make sure to answer all the questions marked as mandatory (*) before submitting the survey'}
      } 

      const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/surveys/ux/ux-survey-mc-post`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${clientToken}`,
        },
        body: JSON.stringify(formData),
      });
      // const result = await response.json();
      // console.log("response", response)
      // if (response.status === 409) {
      // }
  
      if (response.status === 200) {
        return { message: "Thank you for completing the survey!", isSucceded: true};
      }
      return { message: 'Something went wrong, try again'}
      return null
  
    } catch (error) {
      console.log("user creation error", error)
      return {
        message: "Something went wrong, try again",
        error: true
      };
    }
  }

  export async function sendSupportRequest(clientToken,formData) {
    const data = {
      Application: 'oh-dashboard',
      UserId: formData.get('user_id'),
      Email: formData.get("email").trim(),
      Subject: formData.get("subject").trim(),
      Description: formData.get("message").trim(),
      clientToken:formData.get("clientToken").trim()
    };

    try {


      const response = await fetch(`${process.env.DEV_BACKEND_API_URL}/surveys/support/support-mc-create`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${data.clientToken}`,
        },
        body: JSON.stringify(data),
      });
      // const result = await response.json();
      // console.log("response", response)
      // if (response.status === 409) {
      // }
  
      if (response.status === 200) {
        return { message: "Thank you for completing the survey!", isSucceded: true};
      }
      return { message: 'Something went wrong, try again'}
  
    } catch (error) {
      console.log("support request error", error)
      return {
        message: "Something went wrong, try again",
        error: true
      };
    }
  }
   // Validate form using Zod
    // const validatedFields = CreateInvoice.safeParse({
    //   customerId: formData.get("customerId"),
    //   amount: formData.get("amount"),
    //   status: formData.get("status"),
    // });
  
    // If form validation fails, return errors early. Otherwise, continue.
    // if (!validatedFields.success) {
    //   return {
    //     errors: validatedFields.error.flatten().fieldErrors,
    //     message: "Missing Fields. Failed to Create Invoice.",
    //   };
    // }
    // const { customerId, amount, status } = validatedFields.data;
    // console.log("validated fields data",validatedFields.data)
    // Test it out:

