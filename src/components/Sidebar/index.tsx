import React from "react";

import styles from "./styles.module.scss";

type SidebarPorps = {
   title: string;
};

const Sidebar: React.FC<SidebarPorps> = ({ title, children }) => {
   return (
      <div className={styles.container}>
         <div className={styles["title-container"]}>
            <h2 className={styles.title}>{title}</h2>
         </div>
         {children}
      </div>
   );
};

export default Sidebar;
