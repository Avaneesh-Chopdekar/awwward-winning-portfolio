"use client";

import { BiPlus, BiUpArrowAlt } from "react-icons/bi";
import { useChat } from "ai/react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

const transitionDebug = {
  type: "easeOut",
  duration: 0.2,
};

export default function ChatPage() {
  // const myHandleSubmit = (e: { preventDefault: () => void }) => {
  //   e.preventDefault();

  //   if (newMessage.trim()) {
  //     const timestamp = new Date().getTime();
  //     setMessages([...messages, { id: timestamp, text: newMessage }]);
  //     setNewMessage("");
  //   }
  // };

  const { messages, handleInputChange, handleSubmit, isLoading, input } =
    useChat();

  const noMessages = !messages || messages.length === 0;

  return (
    <div className="relative mx-auto flex min-h-screen w-full max-w-3xl flex-col items-end justify-end pb-4">
      {noMessages ? (
        <p className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-lg text-black dark:text-white md:text-2xl xl:text-3xl">
          Ask me anything
        </p>
      ) : (
        <AnimatePresence mode="wait">
          {messages.map((message, index) => {
            if (message.role === "user") {
              return (
                <motion.div
                  key={`${message.id}-${index}`}
                  layout="position"
                  className="z-10 mt-2 max-w-[250px] break-words rounded-2xl bg-gray-200 dark:bg-gray-800"
                  layoutId={`container-[${messages.length - 1}]`}
                  transition={transitionDebug}
                >
                  <div className="px-3 py-2 text-[15px] leading-[15px] text-gray-900 dark:text-gray-100">
                    {message.content}
                  </div>
                </motion.div>
              );
            } else {
              return (
                <div className="mr-auto" key={`${message.id}-${index}`}>
                  AI: {message.content}
                </div>
              );
            }
          })}
        </AnimatePresence>
      )}
      <div className="mt-4 flex w-full">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit(e);
          }}
          className="flex w-full"
        >
          <input
            type="text"
            onChange={handleInputChange}
            value={input}
            className="py- relative h-9 w-[250px] flex-grow rounded-full border border-gray-200 bg-white px-3 text-[15px] outline-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-blue-500/20 focus-visible:ring-offset-1 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400 dark:focus-visible:ring-blue-500/20 dark:focus-visible:ring-offset-1 dark:focus-visible:ring-offset-gray-700"
            placeholder="Type your message"
          />
          <motion.div
            key={messages.length}
            layout="position"
            className="pointer-events-none absolute z-10 flex h-9 w-[250px] items-center overflow-hidden break-words rounded-full bg-gray-200 [word-break:break-word] dark:bg-gray-800"
            layoutId={`container-[${messages.length}]`}
            transition={transitionDebug}
            initial={{ opacity: 0.6, zIndex: -1 }}
            animate={{ opacity: 0.6, zIndex: -1 }}
            exit={{ opacity: 1, zIndex: 1 }}
          >
            <div className="px-3 py-2 text-[15px] leading-[15px] text-gray-900 dark:text-gray-100">
              {input}
            </div>
          </motion.div>
          <button
            type="submit"
            disabled={isLoading}
            className="group ml-2 flex h-9 w-9 items-center justify-center rounded-full bg-gray-200 disabled:bg-gray-400 dark:bg-gray-800 dark:disabled:bg-gray-600"
          >
            <BiPlus className="h-5 w-5 text-gray-600 group-disabled:opacity-50 dark:text-gray-400" />
          </button>
        </form>
      </div>
    </div>
  );
}

/* return (
    <div className="stretch mx-auto flex min-h-svh w-full max-w-md flex-col py-24">
      <ul className="flex flex-col gap-2 overflow-y-auto">
        {messages.map((m) => {
          const isUser = m.role === "user";
          return (
            <li
              key={m.id}
              className={cn(
                "whitespace-pre-wrap",
                isUser ? "self-end" : "self-start",
              )}
            >
              {m.role === "user" ? "User: " : "Avaneesh: "}
              <br />
              {m.content}
            </li>
          );
        })}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          className="fixed bottom-0 mb-8 w-full max-w-md rounded border border-gray-300 p-2 shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={handleInputChange}
        />
      </form>
    </div>
  );
}*/
