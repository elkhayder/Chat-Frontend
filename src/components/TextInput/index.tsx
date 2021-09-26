import React from "react";

import styles from "./styles.module.scss";

type TextInputPorps = {};

const TextInput: React.FC<TextInputPorps> = () => {
   return (
      <div className={styles.container}>
         <div className={styles["icon-container"]}>
            <i className="ri-search-line" />
         </div>
         <input
            type="text"
            className={styles.input}
            placeholder="Search messages or users"
         />
      </div>
   );
};

export default TextInput;
