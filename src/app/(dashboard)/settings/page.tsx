import InfoBar from "@/components/Infobar";
import BillingSettings from "@/components/settings/billing-settings";
import ChangePassword from "@/components/settings/change-password";
import DarkModetoggle from "@/components/settings/dark-mode";
import React from "react";

type Props = {};

const Page = (props: Props) => {
  return (
    <>
      <InfoBar />
      <div className="overflow-y-auto w-full chat-window flex-1  flex flex-col gap-10 py-10 px-5">
        <BillingSettings />
        {/* <DarkModetoggle /> */}
        <ChangePassword />
      </div>
    </>
  );
};

export default Page;
