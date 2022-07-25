import styled from "styled-components";


const Container = styled.div`
flex: 1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
`
const Info = styled.div`
position: absolute;
top:0;
left:0;
width: 100%;
height: 100%;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
`
const Button = styled.button`
border: 2px solid black;
padding: 10px;
background-color: white;
color: black;
font-weight: bold;
cursor:pointer;
`


const Title = styled.h1`
font-size: 45px;
font-weight: bold;
margin-bottom: 20px;
`

const CategoryItem = ({item}) => {
    return(
        <Container>
            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                <Button>SHOP NOW</Button>
            </Info>
        </Container>

    )
}
export default CategoryItem;
