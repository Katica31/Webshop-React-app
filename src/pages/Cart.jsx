import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import { useState } from "react";

const Container = styled.div``

const Wrapper = styled.div`
padding: 20px;
`

const Title = styled.h1`
font-weight: bold;
text-align: center;
`

const Top = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 10px 0;
`
const TopButton = styled.button`
padding: 10px;
font-weight: bold;
cursor: pointer;
border: ${(props)=>props.type === "filled" && "none"};
background-color: ${(props)=>props.type === "filled" ? "black" : "transparent"};
color: ${(props)=>props.type === "filled" && "white"};

`

const Bottom = styled.div`
display: flex;
justify-content: space-between;
`

const TopTexts = styled.div`
`

const TopText = styled.span`
text-decoration: underline;
cursor: pointer;
margin: 0 10px;
`

const Info = styled.div`
flex: 2;
`
const Product = styled.div`
display: flex;
justify-content: space-between;
`

const ProductDetail = styled.div`
display: flex;
flex: 2;
`
const Image = styled.img`
width: 250px;
`
const Details = styled.div`
padding: 20px;
display: flex;
flex-direction: column;
justify-content: space-around;
`
const ProductName = styled.span`
font-size: 35px;
`

const ProductId = styled.span`
font-size: 20px;
`

const ProductColor = styled.button`
margin: 2px;
width: 30px;
height: 30px;
border: solid black 1px;
cursor:pointer;
border-radius: 50%;
background-color: ${props => props.color};
`

const ProductSize = styled.span`
font-size: 20px;
`

const PriceDetail = styled.div`
flex = 1;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-weight: bold;
`


const Summary = styled.div`
flex: 0.7;
border: 0.5px solid black;
border-radius: 10px;
padding: 30px;
height: 20%;
margin-left: 120px;
font-weight: bold;
font-size: 25px;
`

const SummaryTitle = styled.h1`
font-weight: bold;
flex: 1;
`

const SummaryItem = styled.div`
flex: 1;
margin: 30px 0px;
display: flex;
font-weight: bold;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span`
flex: 1;
font-weight: bold;
`

const SummaryItemPrice = styled.span`
flex: 1;
font-weight: bold;
`

const Button = styled.button`
flex: 1;
width: 300px;
height: 30px;
font-weight: bold;
`

const ProductAmountContainer = styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
font-weight: bold;

`
const ProductAmount = styled.div`
font-size: 24px;
margin: 5px;

`
const ProductPrice = styled.div`
font-size: 30px;
font-weight: bold;
`

const Add = styled.div`
font-height: 27px;
border: none;
background: white;
`

const Remove = styled.div`
font-height: 27px;
background: white;
`
const SearchContainer = styled.div`
border: 1px solid black;
width: 230px;
height: 30px;
display: flex;
align-items: center;
margin-left: 25px;
padding: 2px;
border-radius: 3px;
`
const Input= styled.input`
width: 200px;
height: 28px;
border:none;`

const Hr = styled.hr`
background-color: darkgray;
border: none;
height: 1.5px;
`
const HHr = styled.hr`
background-color: black;
border: none;
height: 1.5px;
`
const ColorContainer = styled.div`
display: flex;
flex-direction: row;
`


export const Cart = () => {

 const [total, setTotal] = useState(0);
    
const [Amount1, setAmount1] = useState(0);

const [shippdisc, setShippdisc] = useState(0);

const handlePlusClick1 = (event) =>{
        setAmount1(Amount1 + 1);
        setTotal(total + 35);
        if(total == 75 || total >75){setShippdisc(5)
        }else{setShippdisc(0)};
};

const handleMinusClick1 = (event) =>{
    if (Amount1 !== 0 ) {
        setAmount1(Amount1 - 1);
        setTotal(total - 35)
        if(total >= 75){setShippdisc(5)
        }else{setShippdisc(0)};
    }else{  }
}

const [Amount2, setAmount2] = useState(0);
const handlePlusClick2 = (event) =>{
    setAmount2(Amount2 + 1)
    setTotal(total + 83)
    if(total >= 75){setShippdisc(5)
    }else{setShippdisc(0)};
};

const handleMinusClick2 = (event) =>{
if (Amount2 !== 0 ) {
    setAmount2(Amount2 - 1)
    setTotal(total - 83)
}else{   if(total >= 75){setShippdisc(5)
}else{setShippdisc(0)}; }
if(total >= 75){setShippdisc(5)
}else{setShippdisc(0)};
}

const [Amount3, setAmount3] = useState(0);
const handlePlusClick3 = (event) =>{
    setAmount3(Amount3 + 1);
    setTotal(total + 230);
    if(total >= 75){setShippdisc(5)
    }else{setShippdisc(0)};
};

const handleMinusClick3 = (event) =>{
if (Amount3 !== 0 ) {
    setAmount3(Amount3 - 1);
    setTotal(total - 230);
    if(total >= 75){setShippdisc(5)
    }else{setShippdisc(0)};
}
}



const [image1,setImage1] = useState("https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/826535/2.jpg?8601")

const handleBlue =(event)=>{
    setImage1("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/826535/6.jpg?8601")
}

const handleRed =(event)=>{
    setImage1("https://ng.jumia.is/unsafe/fit-in/500x500/filters:fill(white)/product/59/826535/2.jpg?8601")
}

const handleGray =(event)=>{
    setImage1("https://ng.jumia.is/unsafe/fit-in/680x680/filters:fill(white)/product/59/826535/3.jpg?8601")
}




const [image2,setImage2] = useState("https://cdn.officeshoes.ws/product_images/2020ss/big/kl62530-000.jpg")

const handleShoesWhite =(event)=>{
    setImage2("https://cdn.officeshoes.ws/product_images/2021ss/big/kl62530-01w.jpg")
}

const handleShoesBlack =(event)=>{
    setImage2("https://cdn.officeshoes.ws/product_images/2020ss/big/kl62530-000.jpg")
}




const [image3,setImage3] = useState("https://img.ltwebstatic.com/images3_pi/2021/06/29/1624957949014e1cf29f650e9d469977b9c7ec9212_thumbnail_405x552.webp")

const handleTiesColor1 =(event)=>{
    setImage3("https://img.ltwebstatic.com/images3_pi/2021/06/29/1624957949014e1cf29f650e9d469977b9c7ec9212_thumbnail_405x552.webp")
}

const handleTiesColor2 =(event)=>{
    setImage3("https://img.ltwebstatic.com/images3_pi/2021/09/30/16329950430ea053d75a4199777b1299e604ab91ec_thumbnail_405x552.webp")
}

const handleTiesColor3 =(event)=>{
    setImage3("https://img.ltwebstatic.com/images3_pi/2021/08/06/162822083269d0995be425ff6826ee545bd52b52eb_thumbnail_405x552.webp")
}


;

  return (
    <Container>
        <Navbar  />
        <Announcement/>
        <Wrapper>
            <Title>YOUR BAG</Title>
        <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <SearchContainer>
        <Input type="text"
               placeholder="Search..."></Input>
        <i class="bi bi-search" style={{margin:13}}></i>
        </SearchContainer>
            <TopTexts>
                <TopText>Shopping Bag(2)</TopText>
                <TopText>Your Wishlist(0)</TopText>
            </TopTexts>

            <TopButton type="filled" >CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
            <Info>
              
                <Product>
                    <ProductDetail>
                        <Image src={image3} />
                        <Details>
                            <ProductName><b>Product: </b>JESSIE THUNDER TIE </ProductName>
                            <ProductId><b> ID: </b> 9274423578 </ProductId>
                            <ColorContainer>
                                <ProductColor onClick={handleTiesColor1} color="red"><b></b></ProductColor>
                                <ProductColor onClick={handleTiesColor2} color="green"><b></b></ProductColor>
                                <ProductColor onClick={handleTiesColor3} color="gray"><b></b></ProductColor>
                            </ColorContainer>
                            <ProductSize><b>Size:</b> M </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                            <Add><button onClick={handlePlusClick2} >+</button></Add>
                            <ProductAmount>{Amount2}</ProductAmount>
                            <Remove><button onClick={handleMinusClick2} >-</button></Remove>
                        </ProductAmountContainer>
                        <ProductPrice>$ 83</ProductPrice>

                    </PriceDetail>
                </Product>
                <Hr/>
                <Product>
                    <ProductDetail>
                        <Image src={image2} />
                        <Details>
                            <ProductName><b>Product: </b>JESSIE THUNDER SHOES </ProductName>
                            <ProductId><b> ID: </b> 6789423578 </ProductId>
                            <ColorContainer>
                                <ProductColor onClick={handleShoesBlack} color="black"><b></b></ProductColor>
                                <ProductColor onClick={handleShoesWhite} color="white"><b></b></ProductColor>
                            </ColorContainer>
                            <ProductSize><b>Size:</b> 37.5 </ProductSize>
                        </Details>
                    </ProductDetail>
                    <PriceDetail>
                        <ProductAmountContainer>
                        <Add><button onClick={handlePlusClick3} >+</button></Add>
                            <ProductAmount>{Amount3}</ProductAmount>
                            <Remove><button onClick={handleMinusClick3} >-</button></Remove>
                        </ProductAmountContainer>
                        <ProductPrice>$ 230</ProductPrice>

                    </PriceDetail>
                </Product>
            </Info>
            <Summary>
                <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                <SummaryItem>
                     <SummaryItemText>Subtotal</SummaryItemText>
                     <SummaryItemPrice>$ {total}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                     <SummaryItemText>Estimated Shipping</SummaryItemText>
                     <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                     <SummaryItemText>Shipping Discount</SummaryItemText>
                     <SummaryItemPrice>$ {shippdisc}</SummaryItemPrice>
                </SummaryItem>
                <SummaryItem>
                     <SummaryItemText type="total" >Total</SummaryItemText>
                     <SummaryItemPrice>$ {total}</SummaryItemPrice>
                </SummaryItem>
                <Button>CHECKOUT NOW</Button>
            </Summary>
        </Bottom>
        <br/>
        <HHr/>
        <Footer/>
        </Wrapper>
    </Container>
  )
}

export default Cart;
