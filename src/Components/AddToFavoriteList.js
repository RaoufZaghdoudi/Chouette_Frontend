import React , { useState, useEffect }from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import '../cssStylesheets/btn.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, ListSubheader } from '@material-ui/core';
import '../cssStylesheets/btn.css'


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  icon: {
    color: 'black',
    padding: 20
  },
  addtolistpopover:{
    width: 550,
    height: 300,
    maxHeight: 300,
    borderRadius: 40
  },
  listSubheader:{
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black'
  },
  my_lists_List:{
      padding : 20
  } 
}));

const my_lists= [
   {
    id : 1,
    name : 'My List 1'
}, {
    id : 2,
    name : 'My List 2'
}, {
    id : 3,
    name : 'My List 3'
}, {
  id : 4,
  name : 'My List 4'
}, {
  id : 5,
  name : 'My List 5'
}, {
  id : 6,
  name : 'My List 6'
}
]

const GreenCheckbox = withStyles({
  root: {
    color: '#009D6D',
    '&$checked': {
      color: 'green[600]',
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);



export default function AddToFavouriteList() {

    
    const classes = useStyles();

    const my_lists_ids = [] 

    useEffect(() => {
        my_lists.map((my_list) => {
            my_lists_ids.push(my_list.id)
        })
    }, [])

    
    const [checked, setChecked] = React.useState([]);

    const handleToggle = (value) => () => {
      const currentIndex = checked.indexOf(value);
      const newChecked = [...checked];

      if (currentIndex === -1) {
        newChecked.push(value);
      } else {
        newChecked.splice(currentIndex, 1);
      }

      setChecked(newChecked);
    };

    const handleClick = (event) =>  {

    };

  return (
    <div className={classes.addtolistpopover} >
      <List className={classes.my_lists_List} subheader={<ListSubheader disableSticky='true' className={classes.listSubheader}>Liste zum Speichern auswählen</ListSubheader>}> 
      {my_lists.map((list) => {
        const labelId = `checkbox-list-secondary-label-${list.id}`;
        return (
          <React.Fragment>
            <ListItem key={list.id} button>
            <ListItemText id={labelId} primary={list.name} />
            <ListItemSecondaryAction>
              <GreenCheckbox
                edge="end"
                onChange={handleToggle(list.id)}
                checked={checked.indexOf(list.id) !== -1}
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
          <Divider component="li" />
          </React.Fragment>         
        );
      })}
      <button type="button" className="btn btn-sm btn-filter" aria-expanded="false" onClick={handleClick}>
          SPEICHERN
      </button>
    </List>
    </div>   
  );            
}