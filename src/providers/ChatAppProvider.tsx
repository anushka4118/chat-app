import React, { ReactElement, useEffect, useState } from "react";
import { ChatKitty, CurrentUser } from "@chatkitty/core";

const chatkitty = ChatKitty.getInstance("55871d5a-6c11-4324-94ef-8bbc60f1a748");

interface ChatAppContext {
  login: (username: string) => void;
  currentUser: CurrentUser | null;
  loading: boolean;
}

const initialValues: ChatAppContext = {
  login: () => undefined,
  currentUser: null,
  loading: false,
};

export const ChatAppContext = React.createContext(initialValues);

interface ChatAppContextProviderProps {
  children: ReactElement | JSX.Element[] | null;
}

const ChatAppContextProvider: React.FC<ChatAppContextProviderProps> = ({
  children,
}: ChatAppContextProviderProps) => {
  const [currentUser, setCurrentUser] = useState(initialValues.currentUser);
  const [loading, setLoading] = useState(initialValues.loading);

  const login = async (username: string) => {
    setLoading(true);

    await chatkitty.startSession({
      username: username,
    });

    setLoading(false);
  };

  useEffect(() => {
    chatkitty.onCurrentUserChanged((user) => {
      setCurrentUser(user);
    });
  }, [currentUser]);

  return (
    <ChatAppContext.Provider
      value={{
        login,
        currentUser,
        loading,
      }}
    >
      {children}
    </ChatAppContext.Provider>
  );
};

export default ChatAppContextProvider;
