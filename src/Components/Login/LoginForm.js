import React, { useState } from "react";
import styled from "styled-components";
import TextField from '@material-ui/core/TextField';
import UniSymbol from './../../assets/UniSymbol.PNG';
import PasswordInput from "./PasswordInput";
import Checkbox from '@material-ui/core/Checkbox';
import Fab from '@material-ui/core/Fab';
import axios from 'axios';
import { withRouter } from 'react-router-dom';
import Alert from '@material-ui/lab/Alert';



const TextFieldStyle = {
  width: '95%', marginLeft: '3%',
  marginTop:10
}


const buttonStyle={
  color:'white',
  fontFamily: ' Roboto, sans-serif',
  backgroundColor: '#21bf73'
}

const LoginForm = props => {

  const [checked, setChecked] = useState(false);
  const [data, setData] = useState({
    username: '',
    password: ''
  })
  const [uncorrect, setUncorrect] = useState();
  

  const check = () => {
    setChecked(!checked);
  }

  const handleChange = (e) => {
    const val = e.target.value;
    setData(prev => {
      return {
        ...prev,
        username: val
      }
    })
  }


  const handleSubmit = async() => {
        const tokenurl = 'http://localhost:8080/login';
        const body = {"username": data.username,
                      "password": data.password
        }
        var headers = {
          headers : {
                    'Content-Type': 'application/json'
                    }
        }
        await axios.post(tokenurl,body,headers)
        .then(res => {
            localStorage.setItem('access_token' , res.data.token);
            localStorage.setItem('identification' , data.username);
            props.history.push("/");
            }
         )
         .catch(error => {setUncorrect(true)})
     
  }

  const savePassword = (pass) => {
    setData(prev => {
      return {
        ...prev,
        password: pass
      }
    })
  }

  
  return (<SideForm>
    <h1>Chouette. </h1>
    <Form >
      <h1>Login</h1>
      <TextField error={uncorrect} id="outlined-basic" size="medium" style={TextFieldStyle} label="Anmeldename" variant="outlined" defaultValue={data.username} onChange={handleChange} 
      />
      <PasswordWrapper >
        <PasswordInput uncorrect={uncorrect} password={savePassword} />
      </PasswordWrapper>
      <AngelemdetBleiben>
        <Checkbox
          style={{ marginLeft: '3%' }}
          checked={checked}
          onChange={check}
          color="default"
          inputProps={{ 'aria-label': 'checkbox with default color' }}
        />
        <p >Angemeldet bleiben</p>
      </AngelemdetBleiben>

      <div style={{ width: '100%', textAlign: 'center' }} >
        <Fab onClick={handleSubmit} aria-label="login" variant="extended" style={buttonStyle} >
          <p style={{ color: 'white' , marginTop:16}}>Einloggen</p>
        </Fab>
      </div>
      <div>{uncorrect===true && <Alert style={{marginLeft:'3%',marginTop:16,width:520}}severity="error">Anmeldename oder Passwort falsch!</Alert>}</div>
      
      
      


    </Form>
    <div className="bottom">
      <img src={UniSymbol} alt="" />
      <a href="#">Passwort vergessen?</a>
    </div>
  </SideForm>);
  
}
export default withRouter(LoginForm);
const AngelemdetBleiben = styled.div`
  width:100%;
  display:flex;
  flex-direction:row;

  p{
    font-family: 'Poppins', sans-serif;
    font-size: 12px;
    color: grey;
    margin-top:16px;
  }
  
 
`

const PasswordWrapper = styled.div`
  width:95%;
  margin-left: 3%;
  margin-top: 3%;

`
const Form = styled.form`
  display:flex;
  flex-direction:column;
  align-items: start;
  fab{
    background-color: green;
  }
`

const SideForm = styled.div`

  z-index: 2;
  box-shadow: 40px 0px 100px black; 
  height:100%;
  display:flex;
  flex-direction:column;
  
  
  
  .bottom{
    margin:auto 2% 2% 2%;
    display:flex;
    flex-direction:row;
    justify-content:space-between;
  }

  form{
    margin:auto 2% 2% 2%;
    display:flex;
    flex-direction:column;
  }

  form h1{
    font-family: 'Poppins', sans-serif;
    font-size: 2em;
    margin-left:3%;
    color:#3f3f44;
    margin-bottom:3%;
  }

  .bottom img{
    width: 30%;
  }

  .bottom a{
    margin: auto 0 auto 0;
    color:#3f3f44;
  }

  h1{
    font-family: 'Poppins', sans-serif;
    font-size: 2.5em;
    margin-top:20px;
    margin-left:3%;
    color:#3f3f44;
  }
`