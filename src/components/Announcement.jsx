import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    fonst-size: 15px;
    font-weight: bold;
`

const Announcement = () => {
  return (
        <Container>
                Super Deal! Free Shipping on Orders over $75!
        </Container>
  )
}

export default Announcement