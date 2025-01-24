"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function UserListRow({ user, index }) {
  const pathname = usePathname();

  const {
    name,
    lastname,
    user_role,
    email,
    last_login,
    user_id,
    registration_date,
    is_active,
  } = user;

  return (
    <div key={index}>
      <div
        className={`grid grid-cols-[1fr_1fr_1fr_2.5fr_1fr_1fr_1fr_1fr] ${
          index % 2 === 0 ? "bg-white" : "bg-[var(--primary-color-light)]"
        } text-sm bg-white divide-[var(--border-table-users)] divide-x divide-solid`}
      >
        <div className="head-row py-3 flex px-2 justify-start items-center ">
          <span className="text-sm">{name}</span>
        </div>
        <div className="head-row py-3 flex px-2 justify-start items-center ">
          <span className="text-sm">{lastname}</span>
        </div>
        <div className="head-row py-3 flex px-2 justify-start items-center">
          <span
            className={`${
              user_role === "User" ? "bg-[var(--user-rol-user)] " : "bg-[var(--user-rol-supervisor)]"
            } bg-opacity-20 rounded py-1 px-2 text-sm`}
          >
            {user_role}
          </span>
        </div>
        <div className="head-row py-3 flex px-2 justify-start items-center ">
          <span className="">{email ? email : "-"}</span>
        </div>
        <div className="head-row py-3 flex px-2 justify-start items-center">
          <span className="text-sm">
            {registration_date
              ? new Date(registration_date).toLocaleDateString()
              : "-"}
          </span>
        </div>
        <div className="head-row py-3 flex px-2 justify-start items-center text-sm">
          {pathname === "/admin-panel/users"
            ? new Date(last_login).toLocaleDateString("en-US")
            : ""}

          {pathname != "/admin-panel/users" && (
            <span className="">
              {is_active ? (
                <span className="py-1 px-2 bg-[#9AF3FA] rounded text-sm">Active</span>
              ) : (
                <span className="py-1 px-2 bg-[#F5CCCC] rounded text-sm">
                  Not active
                </span>
              )}
            </span>
          )}
        </div>

        <div className="head-row py-3 flex px-2 justify-center items-center">
          <span className="flex cursor-pointer">
            <Link
              replace={false}
              href={`${pathname}?showDialog=yes&action=edit&id=${user_id}`}
            >
              <img src="/manage-users/edit-user-information-icon.svg" alt="edit icon" />
            </Link>
          </span>
        </div>
        <div className="head-row py-3 flex px-2 justify-center items-center">
          <span className="flex cursor-pointer">
            <Link
              href={`${pathname}?showDialog=yes&action=delete&id=${user_id}`}
            >
              <img src="/manage-users/delete-user-icon.svg" alt="edit icon" />
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
