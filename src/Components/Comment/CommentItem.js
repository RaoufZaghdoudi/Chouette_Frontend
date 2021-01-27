import React from "react";
import styled from "styled-components";
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CampusImg from "./../../assets/CampusImg.PNG";



const dateStyle = {
  fontFamily: ' Roboto, sans-serif',
  color: 'grey',
  fontSize: '10px',
  padding: '0'
}

const nameStyle = {
  fontSize: '15px',
  fontFamily: ' Roboto, sans-serif'
}

const CommentItem = (props) => {
  return (<CommentWrapper>
    <Avatar className="avatar" alt={props.alt} src={CampusImg} />
    <div className="text-comm">
      <div className="head">
        <span style={nameStyle}>{props.name}</span>
        <span style={dateStyle}>{props.date}</span>
      </div>
      <div className="body">{props.body}</div>
      <div className="footer">
        <Button size="small">
          <span className="btn">bearbeiten</span>
        </Button>
        <Button size="small">
          <span className="btn">löschen</span>
        </Button>
      </div>
    </div>
  </CommentWrapper>);
}

export default CommentItem;


const CommentWrapper = styled.div`
  width: 30%;
  display:grid;
  grid-template-columns: 15% 85%;
  grid-template-rows: 100%;

  .avatar{
    margin: 10% auto 0 auto;
  }

  .text-comm{
    margin-left: 3%;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 30% 40% 30%;
  }

  .head{
    padding: 2% 0 0 0;
    display:flex;
    flex-direction: row;
    justify-content:space-between;
  }

  .body{
    fontFamily:Roboto, sans-serif;
    color:grey;
  }

  .footer{
    margin-top: 3%;
  }

  .footer .btn{
    font-size: 70%;
    color:grey;
  }

`
