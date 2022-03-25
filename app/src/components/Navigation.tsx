import React from "react";

import { NavigationItem } from "./NavigationItem";

const navigationGroup = [
  {
    path: "/",
    name: "About"
  },
  {
    path: "/projects",
    name: "Projects"
  },
  {
    path: "/contact",
    name: "Contact"
  }
];

export const Navigation = () => (
    <nav>
      {navigationGroup.map(navItem => (
        <NavigationItem path={navItem.path} name={navItem.name}/>
      ))}
    </nav>
  );
