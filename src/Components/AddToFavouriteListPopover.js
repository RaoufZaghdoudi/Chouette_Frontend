import React from 'react';
import PropTypes from "prop-types";
import { makeStyles, withStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import Popover from '@material-ui/core/Popover';
import Typography from '@material-ui/core/Typography';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import AddToFavouriteList from './AddToFavoriteList';




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
  addtolistpopover:{
    width: 590,
    height: 361, 
    borderRadius: 40
  }
  
}));

export default function AddToFavouriteListPopover() {

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
        <IconButton edge="end" aria-label="zu einer Liste hinzufügen" className={classes.icon} onClick={handleClick}>
            <BookmarkBorderIcon />
        </IconButton>
        <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        className={classes.addtolistpopover}
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
              <AddToFavouriteList /> 
            </React.Fragment>
        
        </Popover> 
    </React.Fragment>
             
    );
}