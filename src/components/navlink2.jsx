import React from "react"

const NavLink2 = props => (
  /*eslint-disable*/
  <li className={"Sidebar-Li2" + " " + props.state}>
    <a href={props.link} className={"Sidebar-Link2" + " " + props.linkstate}>
      <span
        className={
          "sk-jumpbar-item-icon sk-icon sk-icon-" +
          props.icon +
          " " +
          "Sidebar-Icon2"
        }
      />
      <span className="Sidebar-Text2">{props.linkname}</span>
    </a>
  </li>
)

export default NavLink2