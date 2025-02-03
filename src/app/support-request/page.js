import { getSession, withPageAuthRequired } from "@auth0/nextjs-auth0";
//import Footer from "../components/Footer";
import Form from "../../components/support-request/Form";
const SupportRequest = withPageAuthRequired(
  async (req, res) => {
  const {user} = await getSession();


  const clientToken = user?.APIToken
    // const responseFormContent = await fetch(
    //   `${process.env.NEXT_PUBLIC_DEV_BACKEND_API_URL}/surveys/ux/ux-survey-mc`,
    //   {
    //     headers: {
    //       Authorization: `Bearer ${process.env.NEXT_PUBLIC_DEV_BACKEND_API_TOKEN}`,
    //     },
    //   }
    // );
    
    // const formQuestions = await responseFormContent.json();
    // const { data } = formQuestions;
    return (
      <main
        id="content-user-survey"
        className="relative pt-20 pb-7 shadow-inner "
      >
        <section 
        // id="header-user-survey"
         className="max-w-[600px] pb-10 mx-auto border border-[var(--border-container-forms)] bg-white shadow-lg rounded-xl px-12  py-7">
          <div className="  flex items-center  gap-x-2">
          <div className="w-11 h-11 circular-gradient rounded-full flex items-center justify-center">
              <img
                  src="/help-icon.svg"
                alt="Regulation dashboard icon"
                className="w-6"
              />
            </div>
            <h2 className="font-bold mr-10">Support</h2>
           
          </div>
           <Form email={user?.email} userId={user?.userId} clientToken={clientToken}/>

        </section>

        {/* <Footer /> */}
      </main>
    );
  },
  { returnTo: "/user-survey" }
);

export default SupportRequest;
