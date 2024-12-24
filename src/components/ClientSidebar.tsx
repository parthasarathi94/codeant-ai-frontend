"use client";

import { usePathname } from "next/navigation";
import { Sidebar } from "./sidebar";

export const ClientSidebar = () => {
  const pathname = usePathname();

  const isLoginPage = pathname === "/login";

  return (
    <>
      {!isLoginPage && <Sidebar />}
    </>
  );
};
