import styled from "styled-components"
import Announcement from "../components/Announcement"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"

const Container = styled.div`

`
const Wrapper = styled.div`
padding: 50px;
display: flex;
`
const ImgContainer = styled.div`
flex: 1;
`
const Image = styled.img`
width: 350px;
height: 600px;
object-fit: cover;
`
const InfoContainer = styled.div`
flex: 1;
padding: 0px 50px;
`

const Description = styled.p`
margin: 20px 0px;
`
const Price = styled.span`
font-weight: 100;
font-size: 40ox;
`
const FilterContainer = styled.div`
width: 50%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`
const Filter = styled.div`
display: flex;
align-items:center;

`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: bold;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props=>props.color};
margin: 0px 5px;
cursor:pointer;

`
const FilterSize = styled.select`
margin-left: 5px;

`
const FilterSizeOption = styled.option`

`
const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
`
const AmountContainer = styled.div`
display: flex;
align-items: center;
font-weight: bold;
`
const Amount = styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 2px solid teal;
display: flex;
align-items: center;
justify-content: center;
margin: 0px 5px;
`
const Add = styled.div`

`

const Button = styled.button`
padding: 6px;
border: 2px solid teal;
background-color: white;
cursor: pointer;
margin: 0px 20px;
border-radius: 5px;
font-weight: bold;

&:hover{
  background-color: gray;
}
`


export const Product = () => {

  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Wrapper>
          <ImgContainer>
            <Image src="https://media.boohoo.com/i/boohoo/fzz30708_mid%20blue_xl_2/female-mid%20blue-balloon-sleeve-denim-jumpsuit"/>
          </ImgContainer>
          <InfoContainer>
            <FilterTitle>
              DENIM JUMPSUITS
            </FilterTitle>
            <Description>
              Jöjjetek, örvendezzünk az Úrnak, és ujjongjunk
              üdvünk sziklája előtt. Lépjünk színe elé hálaadással, 
              magasztaljuk Őt hangos énekszóval.
            </Description>
            <Price>
              90$
            </Price>
            <FilterContainer>
              <Filter>
                <FilterTitle>Color</FilterTitle>
                <FilterColor color="black" />
                <FilterColor color="darkblue" />
                <FilterColor color="gray" />
                </Filter>
                <Filter>
                  <FilterTitle>Size</FilterTitle>
                  <FilterSize>
                    <FilterSizeOption>XS</FilterSizeOption>
                    <FilterSizeOption>S</FilterSizeOption>
                    <FilterSizeOption>M</FilterSizeOption>
                    <FilterSizeOption>L</FilterSizeOption>
                    <FilterSizeOption>XL</FilterSizeOption>
                  </FilterSize>
                </Filter>
            </FilterContainer>
            <AddContainer>
              <AmountContainer>
                <Add>-</Add>
                <Amount>1</Amount>
                <Add>+</Add>
              </AmountContainer>
              <Button>ADD TO CART</Button>
            </AddContainer>
          </InfoContainer>
        </Wrapper>
        <Newsletter/>
    </Container>

  )
}

export default Product;