"use client";

import { useEffect } from "react";
import { register } from "@teamhanko/hanko-elements";
import { LogoutBtn } from "@/components/LogoutButton";

const hankoApi = process.env.NEXT_PUBLIC_HANKO_API_URL as string;
// const hankoApi = "https://f4909e45-4802-49ad-8e0b-3d34f2b8ab32.hanko.io";

export default function HankoProfile() {
  useEffect(() => {
    register(hankoApi).catch((error) => {
      console.log(error);
    });
  }, []);

  return (
    <>
      <hanko-profile />
      <LogoutBtn />
    </>
  );
}
