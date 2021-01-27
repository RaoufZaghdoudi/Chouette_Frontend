import React from 'react';
import Fab from '@material-ui/core/Fab';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  fab: {
    position: 'fixed',
    bottom: theme.spacing(4),
    right: theme.spacing(10),
  }
}));

const buttonStyle={
  color:'white',
  fontFamily: ' Roboto, sans-serif',
  marginTop: 16
}

const NewPublication=()=>{
  const classes = useStyles();
  return(
      <Fab variant="extended" className={classes.fab} style={{ backgroundColor: '#21bf73'}}>
        <p style={buttonStyle}>+ NEUE PUBLIKATION</p>
      </Fab>
  );
}

export default NewPublication;