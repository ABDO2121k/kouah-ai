import { onGetAllAccountDomains } from "@/actions/settings";
import ConversationMenu from "@/components/conversations";
import Mesenger from "@/components/conversations/mesenger";
import InfoBar from "@/components/Infobar";
import { Separator } from "@/components/ui/separator";
import React from "react";

const page = async () => {
  const domains = await onGetAllAccountDomains();
  return (
    <div className="w-full h-full flex">
      <ConversationMenu domains={domains?.domains} />
      <Separator orientation="vertical" />
      <div className="w-full h-full flex flex-col">
        <div className="px-5">
          <InfoBar />
        </div>
        <Mesenger/>
      </div>
    </div>
  );
};

export default page;
