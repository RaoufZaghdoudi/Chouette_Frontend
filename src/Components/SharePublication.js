import React , { useState, useEffect }from 'react';
import { makeStyles} from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import '../cssStylesheets/btn.css'
import {IconButton} from '@material-ui/core';
import TextField from '@material-ui/core/TextField';
import '../cssStylesheets/btn.css'
import AddIcon from '@material-ui/icons/Add';
import SendIcon from '@material-ui/icons/Send';



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'black',
    padding: 20
  },
  sharepubpopover:{
    width: 530,
    height: 390,
    maxHeight: 440,
    padding: 20
  },
  listSubheader:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
  },
  my_lists_List:{
      padding : 20
  },
  sharepubform:{},
  nachrichtTextField:{
      marginTop : 10,
      width: 470
  }
  ,
  empfaengerTextField:{
      marginTop : 10,
      width: 300
  },
  linkTextField:{
      width: 470
  }
}));


export default function SharePublication() {
    
    const classes = useStyles();

    
    const [empfaenger, setEmpfaenger] = useState([]);

    
    return (
      <div className={classes.sharepubpopover} > 
            <Typography type="subtitle2" style={{ color: 'black' , fontSize: 14}}>Empfänger 1, Empfänger 2 ...</Typography>
        
            <form className={classes.sharepubform}>
                <TextField
                   className={classes.empfaengerTextField}
                   id="empfaenger"
                   label="Empfänger"
                   helperText="Empfänger hinzufügen"
                   variant="outlined"
                   InputProps={{endAdornment: <IconButton>
                      <AddIcon/>
                     </IconButton>}}
                />
                <TextField
                   className={classes.nachrichtTextField}
                   id="nachricht"
                   label="Nachricht"
                   multiline
                   rows={4}
                   variant="outlined"
                   InputProps={{endAdornment: <IconButton style={{marginBottom: 5 }}><SendIcon/></IconButton>}}
                />
                <Typography type="subtitle2" style={{ marginBottom: 12, marginTop: 5, color: '#707070' , fontSize: 14}}>_____________________________________oder____________________________________</Typography>   
                <TextField
                   className={classes.linkTextField}
                   id="link"
                   defaultValue="https://livewasys.de/pub?id=123456"
                   helperText="Als Link teilen"
                   variant="outlined"
                   inputProps={
                    { readOnly: true }
                  }
                />       
            </form>
      </div>   
    );            
}