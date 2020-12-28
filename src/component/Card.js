import React, { useState } from "react";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import styled from 'styled-components';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import TextField from '@material-ui/core/TextField';
import DialogTitle from '@material-ui/core/DialogTitle';

import '../styles/CardStyle.css';


const Card = (props) => {

  const [open, setOpen] = useState(false);
  const [updatedItem, setUpdatedItem] = useState({ title: props.title, content: props.content })

  const setUpdated = (e) => {
    const target = e.target;
    setUpdatedItem(prev => {
      return {
        ...prev,
        [target.placeholder]: target.value
      }
    })

  }

  const doClose = () => {
    setOpen(false);
  }

  const doOpen = () => {
    setOpen(true);
  }

  const handleDelete = () => {
    props.delete(props.idItem);
    doClose();
  }

  const handleUpdate = () => {
    props.updateFun(updatedItem, props.idItem);
    doClose();
  }

  return (<Wrapper className="wrapper">
    <Fab className="button-pos" style={{ backgroundColor: '#ffd66b' }} aria-label="add" size="medium"
      onClick={doOpen}>
      <EditIcon />
    </Fab >
    <Dialog open={open} onClose={doClose} aria-labelledby="form-dialog-title">
      <DialogTitle id="form-dialog-title">
        Edit Item
      </DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          label="Title"
          it="title"
          placeholder="title"
          type="Edit"
          defaultValue={updatedItem.title}
          onChange={setUpdated}
          fullWidth
        />
        <TextField
          autoFocus
          margin="dense"
          id="content"
          label="Content"
          placeholder="content"
          type="Edit"
          defaultValue={updatedItem.content}
          onChange={setUpdated}
          fullWidth
        />
      </DialogContent>
      <DialogActions>
        <Fab className="button-pos-dialog" style={{ backgroundColor: '#ffd66b' }} aria-label="add" size="medium"
          onClick={handleUpdate}
        >
          <AddIcon />
        </Fab >
        <Fab className="button-pos-dialog" style={{ backgroundColor: '#ffd66b' }} aria-label="add" size="medium"
          onClick={handleDelete}
        >

          <DeleteIcon />
        </Fab >
      </DialogActions>
    </Dialog>
    <Content>
      <Title>{props.title}</Title>
      <P>{props.content}</P>
    </Content>
  </Wrapper>)
}

export default Card;

const Wrapper = styled.div`

    width:250px;
    height: 200px;
    background-color:#fff;
    border-radius:10%;
    box-shadow: 0 0 10px black;
    float: left;
    margin 80px 16px;
`

const Content = styled.div`

  padding: 20px 20px 0 20px;
  font-family: "McLaren", cursive;
`

const Title = styled.h2`
  
  color: #364f6b;
`

const P = styled.p`
  
`


