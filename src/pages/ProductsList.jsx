import styled from "styled-components"
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";



const Container = styled.div`
`
const Title = styled.h1`
margin: 20px;
font-weight: bold;
`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin: 20px;
font-size: 20px;
font-weight: bold;
`
const FilterText = styled.span`
font-size: 20px;
font-weight: bold;
margin-right: 10px;
`

const Selects = styled.select`
padding: 10px;
border-radius: 3px;
margin: 10px;
margin-right: 20px;
`

const Option= styled.option`
padding: 10px,
margin: 10px;
`

 const ProductsList = () => {
    
  return (

    <Container>
        <Announcement/>
        <Navbar/>
        <Title>Dresses</Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Products:</FilterText>

                    <Selects>
                        <Option disabled selected>Color</Option>
                        <Option>Green</Option>
                        <Option>Blue</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Gray</Option>
                    </Selects>
               
                    <Selects>
                        <Option disabled selected>Size</Option>
                        <Option>Xs</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Selects>
               
            </Filter>
            <Filter>
            <FilterText>Sort Products:</FilterText>
                
                    <Selects>
                        <option>Price (asc)</option>
                        <option>Price </option>
                        <option>Price </option>
                    </Selects>
                  
            </Filter>
        </FilterContainer>
        <Products/>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default ProductsList;