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
         </ul>
      </div>
   );
};

type NavItemPorps = {
   icon: string;
   selected?: boolean;
};

const NavItem: React.FC<NavItemPorps> = ({ icon, selected }) => {
   return (
      <li
         className={classNames(styles["item-container"], {
            [styles.active]: !!selected,
         })}
      >
         <i className={icon} />
      </li>
   );
};

export default Nav;
