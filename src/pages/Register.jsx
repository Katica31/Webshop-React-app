import styled from "styled-components"

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
flex-wrap: wrap;
`
const Title = styled.h1`
font-size: 24px;
font-weight: bold;
`
const Input = styled.input`
flex: 1;
min-width: 40%;
margin: 20px 10px 0 0;
padding: 10px;
`
const Agreement = styled.span`
font-size: 12px;
margin: 20px 0;
`
const Button = styled.button`
width: 40%;
height: 30px;
border: none;
padding: 15 px 20px;
background-color: teal;
color: white;
font-weight: bold;
cursor: pointer;
`


export const Register = () => {
  return (
    <div>
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input type="text" placeholder ="name"/>
                <Input type="text"  placeholder ="last name"/>
                <Input type="text"  placeholder ="username"/>
                <Input type="email"  placeholder ="email"/>
                <Input type="password"  placeholder ="password"/>
                <Input type="password"  placeholder ="confirm password"/>
                <Agreement>
                    By creating this account i consent to the processing of
                     my personal data in accordance with the <b>PRIVACY POLICY</b>
                </Agreement>
                <Button>Create</Button>
            </Form>
        </Wrapper>
    </Container>
  </div>
  )
}

export default Register;