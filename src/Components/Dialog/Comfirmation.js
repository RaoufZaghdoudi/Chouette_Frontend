import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';

const ComfirmationDialog = (props) => {


  const [doOpen, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(!doOpen);
  }

  return (

    <Dialog open={doOpen} onClose={handleClose} aria-describedby="alert-dialog-description">
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {props.content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} >
          <span style={{ color: 'red' }}>{props.leftButtom}</span>
        </Button>
        <Button onClick={handleClose}  >
          <span style={{ color: 'red' }}>{props.rightButton}</span>
        </Button>
      </DialogActions>
    </Dialog>

  );
}


export default ComfirmationDialog;