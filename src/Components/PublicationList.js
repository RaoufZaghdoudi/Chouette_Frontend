import React , {Component} from 'react';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PublicationListItem from './PublicationListItem';
import DeleteIcon from "@material-ui/icons/Delete";
import X_Icon from '../assets/x-icon.png';
import {Image, Row, Card, Container} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../cssStylesheets/btn.css'


class PublicationList extends Component {
  state={
      publications: this.props.publications,
      monthFilter:null,
      publicationTypeFilter:null,
      yearFilter:null,
      keywordFilters:[],
  }
  render(){    
      const today=new Date();
      const currentYear=today.getFullYear();
      const years=[];
      var i;
      for(let year=currentYear;year>=1987;year--){
          years.push(year);
      }
      const months=['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'];
      const publicationTypes=['Article', 'Book', 'Phd Thesis', 'Proceeding', 'In Proceeding', 'In Collection'];
      const keywords=[];
      this.props.publications.forEach((publication) =>{
          if(typeof publication.keywords !== 'undefined'){
            for (i in publication.keywords) {  
              if(!keywords.includes(publication.keywords[i])){
                return keywords.push(publication.keywords[i]);
              }
            }  
          }
      });
      return (
          <div >
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
                      <div className="collapse" id="filter">
                          <Row style={filterStyle}>
                              <div className="col">
                                  <div className="btn-group" role="group">
                                      <button id="yearButton" type="button" className="btn btn-md btn-filterAttribute dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Jahr
                                      </button>
                                      <div className="dropdown-menu" aria-labelledby="yearButton" style={dropdownStyle}>
                                          {years.map((year) =>
                                              <button className="dropdown-item" key={year} onClick={() =>{
                                                  const newState=Object.assign(this.state);
                                                  newState.yearFilter=year;
                                                  newState.publications=this.props.publications;
                                                  filterPublications(newState);
                                                  this.setState(newState);
                                              }}>{year}</button>
                                          )}
                                      </div>
                                  </div>
                                  <div className="btn-group" role="group">
                                      <button id="monthButton" type="button" className="btn btn-md btn-filterAttribute dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Monat
                                      </button>
                                      <div className="dropdown-menu" aria-labelledby="monthButton" style={dropdownStyle}>
                                          {months.map((month) =>
                                              <button className="dropdown-item" key={month} onClick={() =>{
                                                  const newState=Object.assign(this.state);
                                                  newState.monthFilter=monthNameToNumber(month);
                                                  newState.publications=this.props.publications;
                                                  filterPublications(newState);
                                                  this.setState(newState);
                                              }}>{month}</button>
                                          )}
                                      </div>
                                  </div>
                                  <div className="btn-group" role="group">
                                      <button id="publicationTypeButton" type="button" className="btn btn-md btn-filterAttribute dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Publikationstyp
                                      </button>
                                      <div className="dropdown-menu" aria-labelledby="publicationTypeButton" style={dropdownStyle}>
                                          {publicationTypes.map((publicationType) =>
                                              <button className="dropdown-item" key={publicationType} onClick={() =>{
                                                  const newState=Object.assign(this.state);
                                                  newState.publicationTypeFilter=publicationType;
                                                  newState.publications=this.props.publications;
                                                  filterPublications(newState);
                                                  this.setState(newState);
                                              }}>{publicationType}</button>
                                          )}
                                      </div>
                                  </div>
                                  <div className="btn-group" role="group">
                                      <button id="keywordsButton" type="button" className="btn btn-md btn-filterAttribute dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                          Stichwörter
                                      </button>
                                      <div className="dropdown-menu" aria-labelledby="keywordsButton" style={dropdownStyle}>
                                          {keywords.map((keyword) =>
                                              <button className="dropdown-item" key={keyword} onClick={() =>{
                                                  const newState=Object.assign(this.state);
                                                  if(!newState.keywordFilters.includes(keyword)){
                                                      newState.keywordFilters.push(keyword);
                                                      newState.publications=this.props.publications;
                                                      filterPublications(newState)
                                                      this.setState(newState);
                                                  }
                                              }}>{keyword}</button>
                                          )}
                                      </div>
                                  </div>
                              </div>
                              <div className="col-sm-2" align="right">
                                  <button type="button" className="btn btn-sm btn-delete-filter" onClick={() =>{
                                      const newState={
                                          publications: this.props.publications,
                                          monthFilter:null,
                                          publicationTypeFilter:null,
                                          yearFilter:null,
                                          keywordFilters:[],
                                      }
                                      this.setState(newState);
                                  }}>
                                      <DeleteIcon/> 
                                      Filter löschen
                                  </button>
                              </div>
                          </Row>
                          <Row>
                              {this.state.yearFilter!=null &&
                                  <ol className="breadcrumb filter-breadcrumb">
                                      <li className="breadcrumb-item"><p>Jahr: {this.state.yearFilter}</p></li>
                                      <li className="breadcrumb-item">
                                      <button type="button" className="btn btn-xs btn-delete-one-filter" onClick={() =>{
                                          const newState=Object.assign(this.state);
                                          newState.yearFilter=null;
                                          newState.publications=this.props.publications;
                                          filterPublications(newState);
                                          this.setState(newState);
                                      }}>
                                          <img src={X_Icon} alt="" className="delete-icon"/>
                                      </button>
                                      </li>
                                  </ol>
                              }
                              {this.state.monthFilter!=null &&
                                  <ol className="breadcrumb filter-breadcrumb">
                                      <li className="breadcrumb-item"><p>Monat: {monthNumberToName(this.state.monthFilter)}</p></li>
                                      <li className="breadcrumb-item">
                                      <button type="button" className="btn btn-xs btn-delete-one-filter" onClick={()=>{
                                          const newState=Object.assign(this.state);
                                          newState.monthFilter=null;
                                          newState.publications=this.props.publications;
                                          filterPublications(newState);
                                          this.setState(newState);
                                      }}>
                                          <img src={X_Icon} alt="" className="delete-icon"/>
                                      </button>
                                      </li>
                                  </ol>
                              }
                              {this.state.publicationTypeFilter!=null &&
                                  <ol className="breadcrumb filter-breadcrumb">
                                      <li className="breadcrumb-item"><p>Publikationstyp: {this.state.publicationTypeFilter}</p></li>
                                      <li className="breadcrumb-item">
                                      <button type="button" className="btn btn-xs btn-delete-one-filter" onClick={()=>{
                                          const newState=Object.assign(this.state);
                                          newState.publicationTypeFilter=null;
                                          newState.publications=this.props.publications;
                                          filterPublications(newState);
                                          this.setState(newState);
                                      }}>
                                          <img src={X_Icon} alt="" className="delete-icon"/>
                                      </button>
                                      </li>
                                  </ol>
                              }
                              {this.state.keywordFilters.map((keywordFilter)=>
                                  <ol className="breadcrumb filter-breadcrumb" key={keywordFilter}>
                                      <li className="breadcrumb-item"><p>Stichwort: {keywordFilter}</p></li>
                                      <li className="breadcrumb-item">
                                      <button type="button" className="btn btn-xs btn-delete-one-filter" onClick={()=>{
                                          const newState=Object.assign(this.state);
                                          newState.keywordFilters.splice(newState.keywordFilters.indexOf(keywordFilter),1);
                                          newState.publications=this.props.publications;
                                          filterPublications(newState);
                                          this.setState(newState);
                                      }}>
                                          <img src={X_Icon} alt="" className="delete-icon"/>
                                      </button>
                                      </li>
                                  </ol>
                              )}
                          </Row>
                      </div>
                      <List >
                        {this.state.publications.map(publication => 
                        <React.Fragment>
                           <PublicationListItem key={publication.id} publication={publication}/>
                           <Divider component="li" />
                        </React.Fragment>
                        )  
                        } 
                     </List>
                      
                  </Card.Body>
              </Card>
          </div>
      );
  }
}

function filterPublications(state){
  const filteredPublications=[];
  let publicationsFiltered=false;
  if(!(state.monthFilter===null && state.yearFilter===null && state.publicationTypeFilter===null && state.keywordFilters.length===0)){
      if(state.monthFilter!=null){ //Filtern nach month
          if(publicationsFiltered){ //subtraktiv
              const publicationsToBeDeleted=[];
              filteredPublications.forEach(publication =>{
                  if(publication.month!==state.monthFilter){
                      publicationsToBeDeleted.push(publication);
                  }
              });
              publicationsToBeDeleted.forEach(publication=>{
                  filteredPublications.splice(filteredPublications.indexOf(publication),1);
              })
          }
          else{ //additiv
              publicationsFiltered=true;
              state.publications.forEach(publication =>{
                  if(publication.month===state.monthFilter){
                      filteredPublications.push(publication);
                  }
              })
          }
      }
      if(state.yearFilter!=null){ //Filtern nach year
          if(publicationsFiltered){ //subtraktiv
              const publicationsToBeDeleted=[];
              filteredPublications.forEach(publication =>{
                  if(publication.year!==state.yearFilter){
                      publicationsToBeDeleted.push(publication);
                  }
              });
              publicationsToBeDeleted.forEach(publication=>{
                  filteredPublications.splice(filteredPublications.indexOf(publication),1);
              })
          }
          else{ //additiv
              publicationsFiltered=true;
              state.publications.forEach(publication =>{
                  if(publication.year===state.yearFilter){
                      filteredPublications.push(publication);
                  }
              })
          }
      }
      if(state.publicationTypeFilter!=null){ //Filtern nach publicationType
          if(publicationsFiltered){ //subtraktiv
              const publicationsToBeDeleted=[];
              filteredPublications.forEach(publication =>{
                  if(publication.type!==state.publicationTypeFilter){
                      publicationsToBeDeleted.push(publication);
                  }
              });
              publicationsToBeDeleted.forEach(publication=>{
                  filteredPublications.splice(filteredPublications.indexOf(publication),1);
              })
          }
          else{ //additiv
              publicationsFiltered=true;
              state.publications.forEach(publication =>{
                  if(publication.type===state.publicationTypeFilter){
                      filteredPublications.push(publication);
                  }
              })
          }
      }
      if(state.keywordFilters.length>0){ //Filtern nach keywords
        if(publicationsFiltered){ //subtraktiv
            const publicationsToBeDeleted=[];
            filteredPublications.forEach(publication =>{
                state.keywordFilters.forEach(keywordFilter=>{
                    if(typeof publication.keywords==='undefined' || !publication.keywords.includes(keywordFilter)){
                        if(!publicationsToBeDeleted.includes(publication))
                            publicationsToBeDeleted.push(publication);
                    }
                })
            });
            publicationsToBeDeleted.forEach(publication=>{
                filteredPublications.splice(filteredPublications.indexOf(publication),1);
            })
        }
        else{ //additiv
            publicationsFiltered=true;
            state.publications.forEach(publication=>{
                let addPublication=true;
                state.keywordFilters.forEach(keywordFilter=>{
                    if(typeof publication.keywords==='undefined' || !publication.keywords.includes(keywordFilter)){
                        addPublication=false;
                    }
                })
                if(addPublication){
                    filteredPublications.push(publication);
                }
            })
        }
      }
      state.publications=filteredPublications;
  }
}

function monthNameToNumber(monthName){
  switch(monthName){
      case 'Januar': return 1;
      case 'Februar': return 2;
      case 'März': return 3;
      case 'April': return 4;
      case 'Mai': return 5;
      case 'Juni': return 6;
      case 'Juli': return 7;
      case 'August': return 8;
      case 'September': return 9;
      case 'Oktober': return 10;
      case 'November': return 11;
      case 'Dezember': return 12;
      default: return null;
  }
}

function monthNumberToName(monthNumber){
  switch(monthNumber){
      case 1: return 'Januar';
      case 2: return 'Februar';
      case 3: return 'März';
      case 4: return 'April';
      case 5: return 'Mai';
      case 6: return 'Juni';
      case 7: return 'Juli';
      case 8: return 'August';
      case 9: return 'September';
      case 10: return 'Oktober';
      case 11: return 'November';
      case 12: return 'Dezember';
      default: return null;
  }
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


export default PublicationList;