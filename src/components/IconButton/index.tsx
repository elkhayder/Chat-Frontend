import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type IconButtonPorps = { icon: string } & React.DetailedHTMLProps<
   React.ButtonHTMLAttributes<HTMLButtonElement>,
   HTMLButtonElement
>;

const IconButton: React.FC<IconButtonPorps> = ({
   icon,
   className,
   ...props
}) => {
   return (
      <button className={classNames(styles.button, className)} {...props}>
         <i className={icon} />
      </button>
   );
};

export default IconButton;
