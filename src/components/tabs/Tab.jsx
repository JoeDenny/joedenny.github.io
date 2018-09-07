import React from "react";

const Tab = ({name, label, onClick, active}) => {
  
  const activeClassName = active ? 'active' : '';

  return (
    <li className={activeClassName}
        onClick={() => onClick(name)}>
      {label}
    </li>
)};

export default Tab;