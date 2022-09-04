import React from "react";
import { NavLink } from "react-router-dom";

interface Props {
  path: string;
  name: string;
}

export const NavigationItem = (props: Props) => {
  const { path, name } = props;

  return (
    <NavLink
      to={path}
      className={({ isActive }: { isActive: boolean }) =>
        "nav-link" + (isActive ? " active" : "")
      }
    >
      {name}
    </NavLink>
  );
};
