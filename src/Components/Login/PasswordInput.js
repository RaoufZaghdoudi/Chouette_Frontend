import React, { useState } from "react";
import OutlinedInput from '@material-ui/core/OutlinedInput';
import IconButton from '@material-ui/core/IconButton';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import FormControl from '@material-ui/core/FormControl';




const PasswordInput = (props) => {

  const [values, setValues] = useState({
    showPassword: false,
    password: ''
  })

  const handleChange = (e) => {
    const val = e.target.value;
    const name = e.target.name;
    setValues(prev => {
      return {
        ...prev,
        [name]: val
      }
    });
    props.password(val);
  }

  const handleClickShowPassword = (e) => {
    setValues(prev => {
      return {
        ...prev,
        showPassword: !values.showPassword
      }
    })
  }

  const formStyle = {
    textField: {
      width: '100%',
      height: '100%'
    }
  }

  return (
      <FormControl style={formStyle.textField} variant="outlined">
        <InputLabel style={props.uncorrect && {color:'red'}} htmlFor="outlined-adornment-password">Passwort</InputLabel>
        <OutlinedInput
          error={props.uncorrect}
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange}
          name="password"
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
                name="showPassword"
              >
                {values.showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </InputAdornment>
          }
          labelWidth={70}
        />
      </FormControl>
    );
}

export default PasswordInput;