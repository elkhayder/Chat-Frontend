import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type ProfilePicturePorps = {
   img: string;
   size?: number;
} & React.DetailedHTMLProps<
   React.HTMLAttributes<HTMLDivElement>,
   HTMLDivElement
>;

const ProfilePicture: React.FC<ProfilePicturePorps> = ({
   img,
   size,
   className,
   style,
   ...props
}) => {
   return (
      <div
         className={classNames(styles["container"], className)}
         style={{
            ...({ "--size": size + "px" } as React.CSSProperties),
            ...style,
         }}
         {...props}
      >
         <img src={img} alt="Profile" />
         <span />
      </div>
   );
};

ProfilePicture.defaultProps = { size: 35 };

export default ProfilePicture;
