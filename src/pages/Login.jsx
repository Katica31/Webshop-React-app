import styled from "styled-components"
import Navbar from "../components/Navbar"


const Container = styled.div`
width: 100%;
height: 900px;
background: url("https://cdn2.assets-servd.host/pebble-mag/production/images/_1200x630_crop_center-center_82_none/What%E2%80%99s-Wrong-With-Fast-Fashion_-header.jpg?mtime=1583424325");
background-size: cover;
display: flex;
align-items: center;

`
const Wrapper = styled.div`
width: 35%;
padding: 20px;
background-color: white;
opacity: 0.7;
margin:0 0 0 100px;
border-radius: 3px;
`
const Form = styled.form`
display: flex;
flex-direction: column;
`
const Title = styled.h1`
font-size: 30px;
font-weight: bold;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`

const Button = styled.button`
width: 90%;
height: 30px;
border: none;
padding: 15 px 20px;
background-color: teal;
color: white;
font-weight: bold;
cursor: pointer;
margin: 10px auto;
`

const Link = styled.a`
text-align: center;
margin: 5px 0;
font-size: 12px;
text-decoration: underline;
cursor: pointer;
`


export const Login = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <Title>SIGN IN </Title>
            <Form>
                <Input type="text"  placeholder ="username"/>
                <Input type="password"  placeholder ="password"/>
                <Button>Login</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link> CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  </div>
  )
}

export default Login;