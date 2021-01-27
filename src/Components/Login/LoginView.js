import React , { useEffect }from "react";
import styled from "styled-components";
import LoginForm from './LoginForm'
import CampusImg from './../../assets/CampusImg.PNG'
import { withRouter } from 'react-router-dom';



const LoginView = (props) => {

    useEffect(() => {
        if(localStorage.getItem('access_token')!=null){
            props.history.push("/");
        }
      })
    
    return (
        <Wrapper >
            <LoginForm />
            <div className="side-img" />
        </Wrapper>
    );
}

export default LoginView;

const Wrapper = styled.div`
    display:grid;
    grid-template-columns: 30% 70%;
    grid-template-rows: 100%;
    width: 100vw;
    height: 100vh;

    .side-img{
        background-image: url(${CampusImg});
        background-size:cover;
    }
`

