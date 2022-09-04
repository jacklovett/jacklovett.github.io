import React from "react";

interface Props {
  icon: string;
  link: string;
}

export const IconLink = (props: Props) => {
  const { icon, link } = props;
  return (
    <a className="icons" href={link} target="_blank" rel="noreferrer">
      <i className={`fa fa-${icon}`}></i>
    </a>
  );
};
