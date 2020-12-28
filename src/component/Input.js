import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import styled from 'styled-components';
import '../styles/InputStyle.css'
import { Zoom } from "@material-ui/core";


const Input = (props) => {
  const [clicked, setClicked] = useState(false);
  const [item,setItem]=useState({title:'',content:''});

  const checkClick = () => {
    setClicked(!clicked);
    return clicked;
  }

  const updateItem=(e)=>{
    const val=e.target.value;
    const type=e.target.name;
    setItem((prev)=>{
      return{
        ...prev,
        [type]:val
      }
    })
  }
  return (<WrapperInput>
    <InputToDo placeholder={clicked?"Add to do title":"Add to do"} name="title" onClick={checkClick} value={item.title} onChange={updateItem} />
    {clicked &&
      <div>
        <InputToDo placeholder="Add to do content" name="content" value={item.content} onChange={updateItem}  />
        <Zoom in={clicked}>
          <Fab className="button-second-pos " id="ti" size="small"  style={{ backgroundColor:'#ffd66b'}} onClick={()=>{
            props.addFun(item);
            setClicked(!clicked);
            setItem({title:'',content:''});
          }} >
            <AddIcon />
          </Fab>
        </Zoom>
      </div>
    }
  </WrapperInput>
  )
}


export default Input;


const WrapperInput = styled.div`
    margin: 40px auto 0 auto;
    width:50%;
    padding-bottom: 20px ;
    background-color:#fff;
    border-radius: 7px;
    box-shadow: 0 0 10px black;
    font-family: "McLaren", cursive;
`

const InputToDo = styled.input`
  background-color:#fff;
  margin-top:5px;
  text-align:center;
  border: none;
  outline:none;
  padding: 4px;
  font-size: 1.2em;
  font-family: inherit;
`



