import React from 'react';
import styled from "styled-components";
import Login from '../pages/Login'
import Register from '../pages/Register'
import { Component } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';


const Container = styled.div`
  font-size: 32px;
  color: black;
`;

const Wrapper = styled.div`
padding: 10px 20px;
display: flex;
align-items:center;
justify-content: space-between;
`;

const Left = styled.div`
display: flex;
justify-content: flex-start;
flex : 1;
`;
const Center = styled.div`
flex : 1;
text-align:center;
`;
const Right = styled.div`
flex : 1;
display: flex;
align-items:center;
justify-content: flex-end;
`;
const Language = styled.span`
margin: 20px;
font-size: 25px;
cursor: pointer;
`;

const SearchContainer = styled.div`
border: 0.5px solid lightgray;
width: 260px;
height: 40px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 5px;
`
const Input= styled.input`
width: 200px;
height: 40px;
border:none;
`

const Logo = styled.h1`
  font-weight:bold;

`
const MenuItem = styled.a`
  font-size: 30px;
  cursor:pointer;
  margin: 25px;
` 




const Navbar = () => {
  return (
    <Container>
        <Wrapper>
          <Left>
            <Language>EN</Language>
            <SearchContainer>
            <Input></Input>
            <i class="bi bi-search" style={{margin:13}}></i>
            </SearchContainer>
          </Left>
          <Center><Logo>LAMA.</Logo></Center>
          <Right>
            <MenuItem href='/register'>Register</MenuItem>
            <MenuItem href='/login'>Sign In</MenuItem>
            <MenuItem>
            <i class="bi bi-cart3"></i>
            </MenuItem>
          </Right>
        </Wrapper>
    </Container>
  );
};

export default Navbar;