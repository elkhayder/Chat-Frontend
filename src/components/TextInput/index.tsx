import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type TextInputPorps = { icon?: string } & React.DetailedHTMLProps<
   React.InputHTMLAttributes<HTMLInputElement>,
   HTMLInputElement
>;

const TextInput: React.FC<TextInputPorps> = ({
   icon,
   className,
   style,
   ...props
}) => {
   return (
      <div className={classNames(styles.container, className)} {...{ style }}>
         {icon && (
            <div className={styles["icon-container"]}>
               <i className={icon} />
            </div>
         )}
         <input type="text" className={styles.input} {...props} />
      </div>
   );
};

export default TextInput;
