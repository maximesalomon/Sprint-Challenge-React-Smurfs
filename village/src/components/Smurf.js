import React from 'react';
import styled from 'styled-components'

const SmurfStyle = styled.div `
  display: flex;
`
const SmurfName = styled.div `
  padding: 10px;
  margin-bottom: 7px;
  width: 200px;
  border: 1px solid blue;
`

const SmurfItem = styled.div `
  padding: 10px;
  margin-bottom: 7px;
  width: 140px;
  border: 1px solid blue;
`

const Smurf = props => {
  return (
    <SmurfStyle>
      <SmurfName>Name: {props.name}</SmurfName>
      <SmurfItem>Height: {props.height}</SmurfItem>
      <SmurfItem>Age: {props.age}</SmurfItem>
    </SmurfStyle>
  );
};

Smurf.defaultProps = {
  name: '',
  height: '',
  age: ''
};

export default Smurf;

