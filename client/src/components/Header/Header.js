import React from "react";
import "../../css/Header/Header.css";
import { staticContent } from "../../static_content";

function Header() {
  return <header>{staticContent.headerTitle}</header>;
}

export default Header;
