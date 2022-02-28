/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

import Sidebar from "../../components/Sidebar";
import TextInput from "../../components/TextInput";
import ProfilePicture from "../../components/ProfilePicture";

import styles from "./styles.module.scss";
import classNames from "classnames";

type ChatsPageProps = {};

const ChatsPage: React.FC<ChatsPageProps> = () => {
   return (
      <Sidebar title="Chats">
         <div className={styles["container"]}>
            <div className="px">
               <TextInput
                  icon="ri-search-line"
                  placeholder="Search messages or users"
               />
               <h3 className={styles.title}>Recent</h3>
            </div>
            <div className={styles["conversations-list"]}>
               <PerfectScrollbar>
                  <Conversation
                     img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="Ww"
                     name="Walid Idlhaj"
                     time="5min"
                     notificationsCount={3}
                     active
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="Yeah, sure!"
                     name="Selma tchalall"
                     time="1h"
                     notificationsCount={1}
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="La, lbare7 knt bagha ngulha ik a sat!"
                     name="Roaya khoufar"
                     time="04:33pm"
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1485206283729-2ca7d035185e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="..."
                     name="Youness zerroudi"
                     time="Yesterday"
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="Ww"
                     name="Walid Idlhaj"
                     time="5min"
                     notificationsCount={3}
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1479936343636-73cdc5aae0c3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="Yeah, sure!"
                     name="Selma tchalall"
                     time="1h"
                     notificationsCount={1}
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1484186694682-a940e4b1a9f7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="La, lbare7 knt bagha ngulha ik a sat!"
                     name="Roaya khoufar"
                     time="04:33pm"
                  />
                  <Conversation
                     img="https://images.unsplash.com/photo-1485206283729-2ca7d035185e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=100"
                     message="..."
                     name="Youness zerroudi"
                     time="Yesterday"
                  />
               </PerfectScrollbar>
            </div>
         </div>
      </Sidebar>
   );
};

type ConversationPorps = {
   img: string;
   name: string;
   message: string;
   time: string;
   notificationsCount?: number;
   active?: boolean;
};

const Conversation: React.FC<ConversationPorps> = ({
   img,
   message,
   name,
   time,
   notificationsCount,
   active,
}) => {
   return (
      <a href="#" onClick={(e) => e.preventDefault()}>
         <div
            className={classNames(styles.conversation, {
               [styles.active]: !!active,
            })}
         >
            <div style={{ marginRight: 16 }}>
               <ProfilePicture {...{ img }} />
            </div>
            <div className={styles.data}>
               <h5>{name}</h5>
               <p>{message}</p>
            </div>
            <div className={styles.info}>
               <h5>{time}</h5>
               {notificationsCount && <span>{notificationsCount}</span>}
            </div>
         </div>
      </a>
   );
};

export default ChatsPage;
