import React from "react";

import Nav from "./components/Nav";
import ChatsPage from "./pages/Chats";

const App: React.FC = () => {
   return (
      <>
         <Nav />
         <ChatsPage />
      </>
   );
};

export default App;
