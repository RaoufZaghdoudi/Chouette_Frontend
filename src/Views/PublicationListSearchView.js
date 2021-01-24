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

function PublicationListSearchView(props) {
  const classes = useStyles();
  //const [publications, setPublications] = useState([]);
  const publications = [
    {
        id : 1,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolor sit amet, consecutor adipiscing 1",
        year_of_publication: 2018,
    },
    {
        id : 2,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 2",
        year_of_publication: 2018,
    },
    {
        id : 3,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 3",
        year_of_publication: 2018,
    },
    {
        id : 4,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 4",
        year_of_publication: 2018,
    },
    {
        id : 5,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 5",
        year_of_publication: 2018,
    },
    {
        id : 6,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 6",
        year_of_publication: 2018,
    },
    {
        id : 7,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 7",
        year_of_publication: 2018,
    },
    {
        id : 8,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 8",
        year_of_publication: 2018,
    },
    {
        id : 9,
        autor : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 9",
        year_of_publication: 2018,
    }
  ]
  //useEffect(() => {
  //axios
  //  .get(URL)
  //  .then(result => setData(result.data));
  //}, []);

  return (
    <div>
      <Card>
        <Card.Body>
           <Row style={headerStyle}>
              <div className="col">
                <p style={headlineStyle}>
                  Alle Publikationen
                </p>
              </div>
              <div className="col-2">
                <button type="button" className="btn btn-sm btn-filter" data-toggle="collapse" data-target="#filter" aria-expanded="false" aria-controls="filter">
                  Filtern
                </button>
              </div>
           </Row>
          <PublicationList searchedpublications={publications} />
        </Card.Body>
      </Card>
      
    </div>
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
  marginBottom: '14px',
  height: '50px',
  borderBottom: '2px solid #737373',
}


export default PublicationListSearchView;