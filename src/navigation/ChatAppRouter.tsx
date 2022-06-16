import React, { useContext } from "react";

import { ChatAppContext } from "../providers/ChatAppProvider";
import { Wrapper } from "../styles";

const ChatAppRouter: React.FC = () => {
  const {} = useContext(ChatAppContext);

  return <Wrapper>Chat App</Wrapper>;
};

export default ChatAppRouter;
