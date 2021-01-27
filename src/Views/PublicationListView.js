import React from "react";
import PublicationList from '../Components/PublicationList';
import 'bootstrap/dist/css/bootstrap.min.css'
import '../cssStylesheets/btn.css'
import SearchAppBar from "../Components/Navbar";


function PublicationListView() {
  
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
    },
    {
        id : 10,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 9",
        month:2,
        type: "Proceeding",
        year: 2018,
        school: undefined,
        keywords: ["aaa","bbb","dssdf"]
    },
    {
        id : 11,
        author : "Max Mustermann",
        title : "Lorem ipsum dolo sit amet, consecutor adipiscing 9",
        month:2,
        type: "Proceeding",
        year: 2018,
        school: undefined,
        keywords: ["aaa","ccc"]
    }
  ]

  return (
    <React.Fragment>
      <div><SearchAppBar/></div>
      <div style={{backgroundColor:'#F0F0F0',paddingRight:60,paddingLeft:60,paddingTop:40,paddingBottom:20}}>
       <PublicationList searched="all" />
      </div>
    </React.Fragment>
  );
}

export default PublicationListView;