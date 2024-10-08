"use client";
import { useChatBot } from "@/hooks/chatbot/use-chatbot";
import { cn } from "@/lib/utils";
import React from "react";
import Image from "next/image";
import {X } from "lucide-react";
import { BotWindow } from "./window";
import { BotIcon } from "@/icons/bot-icon";

type Props = {};

const AiChatbot = (props: Props) => {
  const {
    onOpenChatBot,
    botOpened,
    onChats,
    register,
    onStartChatting,
    onAiTyping,
    messageWindowRef,
    currentBot,
    loading,
    onRealTime,
    setOnChats,
    errors,
  } = useChatBot();
  return (
    <div className="h-screen flex flex-col justify-end items-end">
      {botOpened && (
        <BotWindow
          errors={errors}
          setChat={setOnChats}
          realtimeMode={onRealTime}
          helpdesk={currentBot?.helpdesk!}
          domainName={currentBot?.name!}
          ref={messageWindowRef}
          help={currentBot?.chatBot?.helpdesk}
          theme={currentBot?.chatBot?.background}
          textColor={currentBot?.chatBot?.textColor}
          chats={onChats} 
          register={register}
          onChat={onStartChatting}
          onResponding={onAiTyping}
        />
      )}
      <div
        className={cn(
          "rounded-full relative cursor-pointer shadow-md w-15 h-15 p-3 flex items-center justify-center bg-grandis",
          loading ? "invisible" : "visible"
        )}
        onClick={onOpenChatBot}
      >
        {!botOpened ? (
          currentBot?.chatBot?.icon ? (
            <Image
              src={`https://ucarecdn.com/${currentBot.chatBot.icon}/`}
              alt="bot"
              fill
            />
          ) : (
            <BotIcon />
          )
        ) : (
          <X height={47} width={47} className={"animate-spin-2 text-white"}/>
        )}
      </div>
    </div>
  );
};

export default AiChatbot;
