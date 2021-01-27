import React, { useState } from 'react';
import styled from "styled-components";
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import SendIcon from '@material-ui/icons/Send';


const CommentInput = () => {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    const val = e.target.value;
    setComment(val);
  }
  return (
    <WrapperInput>
      <FormControl className="form" >
        <Input
          multiline
          placeholder="Kommentare schreiben"
          value={comment}
          onChange={handleChange}
          endAdornment={<InputAdornment position="end"><SendIcon color="action" /></InputAdornment>}
        />
      </FormControl>
    </WrapperInput>);
}

export default CommentInput;

const WrapperInput = styled.div`
  width: 30%;

  .form{
    width:100%;
    padding: 3%;
  }
`