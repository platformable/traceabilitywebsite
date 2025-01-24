'use client'
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function NavContent({url}) {
  const router = useRouter()
    return (
        <div className="max-w-screen-xl mx-auto flex items-center gap-4 mb-5">
            <button onClick={() => router.push(url)} className="flex justify-start w-[250px] text-lg items-center py-2 rounded-md shadow-md gap-2 font-medium px-5 bg-[--button-background-forms]">
              <img
                    src="/back-icon.svg"
                    alt=""
                    width={8}
                  />
              <span className="text-sm  xl:ml-16 font-bold opacity-90">back</span>
            </button>
         
        </div>
    );
}
