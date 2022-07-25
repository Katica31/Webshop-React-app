
import { useState } from "react"
import styled from "styled-components"
import { sliderItems } from "../data"

const Container = styled.div`
width: 100%;
height: 100vh;
display:flex;
position:relative;
overflow: hidden;
`
const Arrow = styled.div`
width: 50px;
height: 50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position: absolute; <!-- amibe van, annak a positionja relative kell legyen --!>
top: 100px;
bottom: 300px;
margin: auto;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
cursor: pointer;
opacity: 0.9; <!--átlátszósá<g--!>
position: absolute;
z-index= -2;
`

const Wrapper= styled.div`
height: 100%;
display: flex;
transform: translate(${props=>props.slideIndex *-100}vw);
transition: all 1.5s ease;
`

const ImgContainer = styled.div`
height: 100%;
flex:1;
`;

const Image = styled.img`
display: block;
height: 100%;
margin: 0 auto;
`
const InfoContainer = styled.div`
flex:1;
padding: 50px;

`;

const Title = styled.h1`
font-size: 75px;
`

const Description = styled.p`
margin: 50px 0;
font-size: 16px;
font-weight: bold;
letter-spacing: 3px;
`

const Button = styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor:pointer;
`



const Slide = styled.div`
display: flex;
align-items: center;
width: 100vw;
height: 100vh;
background-color : #${props=>props.bg};
`


export const Slider = () => {

    const [slideIndex, setSlideIndex]= useState(0);
    const handleClick= (direction) => {

  if(direction === "left"){
    setSlideIndex(slideIndex > 0? slideIndex -1 : 2);
  }else{
    setSlideIndex(slideIndex <2 ? slideIndex + 1 : 0);
  }
};

  return (
    <Container>
        <Arrow direction="left" onClick ={() => handleClick ("left")} >
        <i class="bi bi-caret-left-fill"></i>
        </Arrow>
        <Wrapper slideIndex={slideIndex}>
          {sliderItems.map((item)=>(
              <Slide bg={item.bg} key={item.id}>
              <ImgContainer>
                <Image src={item.img}></Image>
              </ImgContainer>
              <InfoContainer>
                <Title>{item.title}</Title>
                <Description>{item.description}</Description>
                <Button>SHOP NOW</Button>
              </InfoContainer>
              </Slide>
          ))}

          
        </Wrapper>
        <Arrow direction="right" onClick ={() => handleClick ("right")}>
        <i class="bi bi-caret-right-fill"></i>
        </Arrow>
    </Container>
  )
}
