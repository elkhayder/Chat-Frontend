import React from "react";

import Nav from "./components/Nav";
import ChatsPage from "./pages/Chats";
// import ConversationPage from "./pages/Conversation";

const App: React.FC = () => {
   React.useEffect(() => {
      const appHeight = () =>
         document.documentElement.style.setProperty(
            "--view-height",
            `${window.innerHeight}px`
         );

      window.addEventListener("resize", appHeight);
      appHeight();
   }, []);

   return (
      <>
         <ChatsPage />
         <Nav />
         {/* <ConversationPage /> */}
      </>
   );
};

export default App;
