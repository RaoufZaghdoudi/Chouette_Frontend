import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import '../cssStylesheets/sharePublication.css';
import SharePublication from './SharePublication'



const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'black',
    padding: 20
  },
  avatar_group: {
    float: 'right',
    marginRight:150,
    marginTop:20
  },
  sharepubpopover:{
    width: 550,
    height: 460
  }
  
}));


export default function SharePublicationPopover() {

    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
    setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;
  
    return (
    <React.Fragment>
        <IconButton aria-describedby={id} edge="end" aria-label="delete" className={classes.icon} onClick={handleClick}>
            <ShareIcon />
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.sharepubpopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        >
        
            <React.Fragment>
                <SharePublication />
            </React.Fragment>
        
        </Popover> 
    </React.Fragment>
             
    );
}