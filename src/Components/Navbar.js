import React ,{ useState ,useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  loginbutton:{
    marginBottom:3,
    marginLeft:1
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function SearchAppBar() {
  const classes = useStyles();
  const history = useHistory();
  const [loggedin, setLoggedin] = useState(false);

  const handleLoginButton = () => {
      history.push("/login");
  }

  const handleLogoutButton = () => {
      localStorage.clear();
      setLoggedin(false);
  }

  useEffect(() => {
    if(localStorage.getItem('access_token')!=null){
        setLoggedin(true);
    }
  })

  return (
    <div className={classes.root}>
      <AppBar position="static" >
        <Toolbar style={{backgroundColor:'#333333',height:80}}>
          <Typography className={classes.title} variant="h3" noWrap>
            Chouette.
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          <div style={{marginLeft:30}}>
           <Typography className={classes.title} variant="body2" noWrap>
           IMPRESSUM
           </Typography>
          </div>
          <div style={{marginLeft:30}}>
           <Typography className={classes.title} variant="body2" noWrap>
            DATENSCHUTZ
           </Typography>
          </div>
          {loggedin && 
          <React.Fragment><div style={{marginLeft:30}}>
          <Typography className={classes.title} variant="body2" noWrap>
           LOG OUT
          </Typography>
         </div>
         <div>
          <IconButton
           edge="start"
           className={classes.loginbutton}
           color="inherit"
           aria-label="open drawer"
           onClick={handleLogoutButton}
         >
           <ExitToAppIcon />
         </IconButton>
         </div></React.Fragment>
          }
          {loggedin === false && 
          <React.Fragment>{console.log({loggedin})}<div style={{marginLeft:30}}>
          <Typography className={classes.title} variant="body2" noWrap>
           LOG IN
          </Typography>
         </div>
         <div>
          <IconButton
           edge="start"
           className={classes.loginbutton}
           color="inherit"
           aria-label="open drawer"
           onClick={handleLoginButton}
         >
           <ExitToAppIcon />
         </IconButton>
         </div></React.Fragment> 
           
          }
          
        </Toolbar>
      </AppBar>
    </div>
  );
}