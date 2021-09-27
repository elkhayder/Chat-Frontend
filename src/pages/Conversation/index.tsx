import classNames from "classnames";
import React from "react";

import PerfectScrollbar from "react-perfect-scrollbar";

import IconButton from "../../components/IconButton";
import ProfilePicture from "../../components/ProfilePicture";
import TextInput from "../../components/TextInput";

import styles from "./styles.module.scss";

type ConversationPagePorps = {};

const ConversationPage: React.FC<ConversationPagePorps> = () => {
   const [scrollContainerElement, setScrollContainerElement] =
      React.useState<HTMLElement | null>(null);

   React.useEffect(() => {
      if (!scrollContainerElement) return;

      scrollContainerElement.scrollTop = scrollContainerElement.scrollHeight;
   }, [scrollContainerElement]);

   return (
      <div className={styles.container}>
         <div className={styles.header}>
            <IconButton
               icon="ri-arrow-left-s-line"
               className={styles["back-button"]}
            />
            <ProfilePicture
               img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
               size={36}
               className={styles["header-profile-image"]}
            />
            <h3>Youness Zerroudi</h3>
            <IconButton icon="ri-search-line" />
            <IconButton icon="ri-more-line" />
         </div>
         <div className={styles["messages-list-container"]}>
            <PerfectScrollbar
               containerRef={(el) => setScrollContainerElement(el)}
            >
               <Message />
               <Message rtl />
               <Message rtl />
               <Message />
            </PerfectScrollbar>
         </div>
         <div className={styles.footer}>
            <IconButton icon="ri-user-smile-line" />
            <IconButton icon="ri-attachment-2" />
            <TextInput
               placeholder="Message..."
               className={styles["message-input"]}
            />
            <IconButton
               icon="ri-send-plane-2-fill"
               className={styles["send-button"]}
            />
         </div>
      </div>
   );
};

type MessagePorps = { rtl?: boolean };

const Message: React.FC<MessagePorps> = ({ rtl }) => {
   return (
      <div
         className={classNames(styles["message-container"], {
            [styles.rtl]: !!rtl,
         })}
      >
         <ProfilePicture
            img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
            size={32}
            className={styles["profile-image"]}
         />
         <div className={styles.info}>
            <div className={styles.content}>
               <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Delectus nihil quam asperiores vel recusandae doloremque
                  eveniet magni assumenda nobis voluptatum rerum quisquam
                  necessitatibus unde, cupiditate porro laborum amet
                  reprehenderit provident.
               </p>
               <div className={styles.time}>
                  <i className="ri-time-line" />
                  04:23pm
               </div>
            </div>
            <h4>Zakaria Elkhayder</h4>
         </div>
      </div>
   );
};

export default ConversationPage;
