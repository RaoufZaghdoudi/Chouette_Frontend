import React, { useEffect, useState } from "react";
import Divider from '@material-ui/core/Divider';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import PublicationList from '../Components/PublicationList';
import Typography from '@material-ui/core/Typography';
import {Image, Row, Card, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../cssStylesheets/btn.css'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
  inline: {
    display: 'inline',
  }
  
}));

function PublicationListView() {
  const classes = useStyles();
  //const [data, setData] = useState([]);
  const publications = [
    {
        id : 1,
        author : "Max Mustermann",
        title : "Lorem ipsum dolor sit amet, consecutor adipiscing 1",
        month:2,
        type: "Book",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["ddd"]
    },
    {
        id : 2,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 2",
        month:2,
        type: "Book",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 3,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 3",
        month:10,
        type: "Book",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 4,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 4",
        month:4,
        type: "Proceeding",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 5,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 5",
        month:11,
        type: "Proceeding",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]

    },
    {
        id : 6,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 6",
        month:2,
        type: "Proceeding",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 7,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 7",
        month:4,
        type: "Proceeding",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 8,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 8",
        month:2,
        type: "Proceeding",
        year: 2018,
        school: "Musteruniversität",
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 9,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 9",
        month:2,
        type: "Proceeding",
        year: 2018,
        school: undefined,
        keywords: ["aaa","bbb","dssdf"]
    }
  ]

  //useEffect(() => {
  //axios
  //  .get(URL)
  //  .then(result => setData(result.data));
  //}, []);

  return (
    <React.Fragment>
      <PublicationList searched="all" publications={publications} /> 
    </React.Fragment>
  );
}

const dropdownStyle={
  height:'auto',
  maxHeight:'200px',
  overflowX:'hidden',
}
const filterStyle={
  backgroundColor: '#F0F0F0',
  paddingTop: '10px',
  paddingBottom: '10px',
  marginBottom: '10px',
}
const headlineStyle={
  lineHeight:'50px',
  textAlign: 'left',
  font: 'normal normal 300 34px/50px Roboto',
  letterSpacing: '3.03px',
  color: '#333333',
  opacity: '1',
  textDecoration: 'none',
}
const headerStyle={
  height: '50px',
  borderBottom: '2px solid #737373',
}

export default PublicationListView;