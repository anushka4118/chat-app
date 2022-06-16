import React, { ReactElement } from "react";

interface ChatAppContext {}

const initialValues: ChatAppContext = {};

export const ChatAppContext = React.createContext(initialValues);

interface ChatAppContextProviderProps {
  children: ReactElement | JSX.Element[] | null;
}

const ChatAppContextProvider: React.FC<ChatAppContextProviderProps> = ({
  children,
}: ChatAppContextProviderProps) => {
  return (
    <ChatAppContext.Provider value={{}}>{children}</ChatAppContext.Provider>
  );
};

export default ChatAppContextProvider;
