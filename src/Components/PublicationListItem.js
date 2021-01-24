import React from 'react';
import PropTypes from "prop-types";
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import styled from "styled-components";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import CommentIcon from "@material-ui/icons/Comment";
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import ShareIcon from '@material-ui/icons/Share';
import SharePublicationPopover from './SharePublicationPopover';
import AddToFavouriteListPopover from './AddToFavouriteListPopover'
import Popover from '@material-ui/core/Popover';
import BibTeX from '../assets/BibTex.png';
import '../cssStylesheets/bibtexbtn.css'
import { Chip } from '@material-ui/core';


const StyledBreadcrumb = withStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.grey[100],
    height: theme.spacing(3),
    color: theme.palette.grey[800],
    fontWeight: theme.typography.fontWeightRegular,
    '&:hover, &:focus': {
      backgroundColor: theme.palette.grey[300],
    },
    '&:active': {
      boxShadow: theme.shadows[1],
      backgroundColor: emphasize(theme.palette.grey[300], 0.12),
    },
  },
}))(Chip);


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
    marginRight:220,
    marginTop:16
  },
  bibTexbtn: {
    width: 50,
    height: 16
  },
  keywordsbreadcrumbs:{
    marginRight:400,
    marginTop:16
  }
  
}));

const ListItemWithWiderSecondaryAction = withStyles({
  secondaryAction: {
    paddingRight: 96
  }
})(ListItem);

function PublicationListItem(props) {
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
    
    <ListItem alignItems="flex-start" >
      <ListItemText
        disableTypography
        primary={
          <React.Fragment ><Typography type="subtitle2" style={{ color: '#707070' , fontSize: 12}}>{props.publication.author}</Typography>
          <Typography type="subtitle2" style={{ color: 'black' , fontSize: 16}}>{props.publication.title}</Typography>
          <Typography type="subtitle2" style={{ color: '#707070' , fontSize: 12}}>{props.publication.year+" "+props.publication.school}</Typography>
        </React.Fragment>}
      />

      <Breadcrumbs className={classes.keywordsbreadcrumbs} aria-label="breadcrumb">
        {
          props.publication.keywords.forEach(keyword => {
            <StyledBreadcrumb Component="a" label={keyword} />
            }  
          )
        }     
      </Breadcrumbs>

    
      <AvatarGroup max={3} className={classes.avatar_group}>
          <Avatar alt="Remy Sharp" src="uni.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </AvatarGroup> 

      <ListItemSecondaryAction alignItems="center" >      
        <div>
        <button type="button" class="btn btn-xs btn-bibtex">
	         <img className={classes.bibTexbtn} src={BibTeX} />
        </button>
        <SharePublicationPopover />
        <IconButton edge="end" aria-label="Publikation exportieren" className={classes.icon}>
            <GetAppIcon />
        </IconButton>
        <AddToFavouriteListPopover />
        </div>        
      </ListItemSecondaryAction> 
    </ListItem>
    
  );
}





export default PublicationListItem;