import React from "react";
import styled from 'styled-components';
import HighlightIcon from "@material-ui/icons/Highlight";




const Header=()=>{
  return <HeaderCom>
          <h1><HighlightIcon/> To Do App</h1>
  </HeaderCom>
}

export default Header;

const HeaderCom=styled.header`
height:100px;
width:100%;
background-color:#ffd66b;



h1{
  font-family: "McLaren", cursive;
  float: left;
  color:#fff;
  margin-left:50px;
}

`