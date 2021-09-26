import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type NavPorps = {};

const Nav: React.FC<NavPorps> = () => {
   return (
      <div className={styles.container}>
         <ul className={styles["items-list"]}>
            <NavItem icon="ri-user-line" />
            <NavItem icon="ri-message-3-line" selected />
            <NavItem icon="ri-group-line" />
            <NavItem icon="ri-contacts-line" />
            <NavItem icon="ri-settings-2-line" />
            <NavItem>
               <img
                  src="https://images.unsplash.com/photo-1617140610409-753b80274362?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=64&q=80"
                  alt="Profile"
                  className={styles["profile-picture"]}
               />
            </NavItem>
         </ul>
      </div>
   );
};

type NavItemPorps = {
   icon?: string;
   selected?: boolean;
};

const NavItem: React.FC<NavItemPorps> = ({ icon, selected, children }) => {
   return (
      <li
         className={classNames(styles["item-container"], {
            [styles.active]: !!selected,
         })}
      >
         {children ? children : <i className={icon} />}
      </li>
   );
};

export default Nav;
