import React from 'react';
import { emphasize, makeStyles, withStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import AvatarGroup from '@material-ui/lab/AvatarGroup';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from "@material-ui/core/IconButton";
import GetAppIcon from '@material-ui/icons/GetApp';
import Typography from '@material-ui/core/Typography';
import SharePublicationPopover from './SharePublicationPopover';
import AddToFavouriteListPopover from './AddToFavouriteListPopover'
import BibTeX from '../assets/BibTex.png';
import '../cssStylesheets/bibtexbtn.css'
import { Chip } from '@material-ui/core';



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
    marginTop:8
  },
  bibTexbtn: {
    width: 50,
    height: 16
  },
  keywordsText: {
    marginRight:8,
    display:'inline-block',
    borderRadius: 25,
    backgroundColor: '#00000029',
    paddingRight:10,
    paddingLeft:10,
    paddingBottom:2
  },
  
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
      

      <ListItemSecondaryAction style={{marginRight:'23%'}} alignItems="center" > 
      {props.publication.keywords.map((keyword) => 
           
      <div className={classes.keywordsText}>
           {keyword.keyword+"      "}
      </div>
      
            )}
            </ListItemSecondaryAction> 
      
      
      <ListItemSecondaryAction style={{marginRight:'15%'}}alignItems="center" >  
      <AvatarGroup max={3} className={classes.avatar_group}>
          <Avatar alt="Remy Sharp" src="uni.jpg" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
      </AvatarGroup> 
      </ListItemSecondaryAction> 

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