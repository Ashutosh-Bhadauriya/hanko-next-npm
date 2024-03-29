"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
//@ts-ignore
import { Hanko } from "@teamhanko/hanko-elements";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL;
// const hankoApi = "https://f4909e45-4802-49ad-8e0b-3d34f2b8ab32.hanko.io";

export function LogoutBtn() {
  const router = useRouter();
  const [hanko, setHanko] = useState<Hanko>();

  useEffect(() => {
    //@ts-ignore
    import("@teamhanko/hanko-elements").then(({ Hanko }) =>
      setHanko(new Hanko(hankoApi ?? ""))
    );
  }, []);

  const logout = async () => {
    try {
      await hanko?.user.logout();
      router.push("/login");
      router.refresh();
      return;
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return <button onClick={logout}>Logout</button>;
}
