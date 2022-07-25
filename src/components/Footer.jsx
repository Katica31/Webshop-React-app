import styled from "styled-components";

const Container = styled.div`
display: flex;
`;
const Left = styled.div`
flex: 1;
display: flex;
flex-direction: column;
padding: 20px;
`;
const Center = styled.div`
flex: 1;
padding: 20px;
`;

const Title = styled.h3`
margin-bottom: 30px;

`
const List = styled.ul`
margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap: wrap;
`
const ListItem = styled.li`
  width: 50%;
  margin: 5px 0;
`

const Right = styled.div`
flex: 1;
`;
const ContactItem = styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment = styled.img`
width: 300px;`


const Logo = styled.h1`
`;
const Description = styled.p`
margin : 20px 0;
`;
const SocialContainer = styled.div`
display: flex;
`;
const SocialIcon = styled.a`
cursor: pointer;
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: ${props => props.color};
display: flex;
align-items: center;
justify-content: center;
margin: 15px;
`;

export const Footer = () => {
  return (

    <Container>
        <Left>
            <Logo>LAMA.</Logo>
            <Description> Isten, Te vagy az én Istenem, virrasztva kereslek.
                Terád vágyódik a lelkem, testem utánad eped, mint a puszta kiaszott földje.
                Hadd jelenjek meg szentélyedben, látva dicsőséged s fenséged.
            </Description>
            <SocialContainer>
                <SocialIcon color="#e8751a" href="https://www.facebook.com/groups/4581896951875053/?hoisted_section_header_type=recently_seen&multi_permalinks=6133061203425279" >
                <i class="bi bi-facebook"></i>
                </SocialIcon>
                <SocialIcon color="#c51350" href="https://www.youtube.com/watch?v=c1xTDSIXit8&t=3123s">
                <i class="bi bi-youtube"></i>
                </SocialIcon>
                <SocialIcon color="#8a1253">
                <i class="bi bi-twitter"></i>
                </SocialIcon>
            </SocialContainer>
        </Left>

        <Center>
          <Title>Useful Links</Title>
          <List>
            <ListItem>Home</ListItem>
            <ListItem>Cart</ListItem>
            <ListItem>Man Fashion</ListItem>
            <ListItem>Woman Fashion</ListItem>
            <ListItem>Accessories</ListItem>
            <ListItem>My Account</ListItem>
            <ListItem>Order Tracking</ListItem>
            <ListItem>WishList</ListItem>
            <ListItem>Terms</ListItem>
          </List>
        </Center>

        <Right>
          <Title>Contact</Title>
            <ContactItem>
            <i style={{marginRight: "7px"}} class="bi bi-geo-alt-fill"></i>
              Kuba, Havanna, Freedom steet 56987
            </ContactItem>
            <ContactItem>
            <i style={{marginRight: "7px"}} class="bi bi-phone"></i>
              +1 234 56 78
            </ContactItem>
            <ContactItem>
            <i style={{marginRight: "7px"}} class="bi bi-envelope"></i>
              contact@email.com
            </ContactItem>
          <Payment src= "https://static.vitra.com/media-resized/eDSuhmovdVO76Lm-jtJVKFPFIagUrkf3v7r1UQ-EcKA/fill/750/388/ce/0/aHR0cHM6Ly9zdGF0aWMudml0cmEuY29tL21lZGlhL2Fzc2V0LzYwOTUxMjkvc3RvcmFnZS92X2Z1bGxibGVlZF8xNDQweC82Njk0MTc4NS5qcGc.jpg"/>
        </Right>
    </Container>
  );
};

export default Footer;