import React from "react";

import Nav from "./components/Nav";
import ChatsPage from "./pages/Chats";
import ConversationPage from "./pages/Conversation";

const App: React.FC = () => {
   return (
      <>
         <Nav />
         <ChatsPage />
         <ConversationPage />
      </>
   );
};

export default App;
