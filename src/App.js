import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./project/pages/Header";
import Home from "./project/pages/Home";
import Men from "./project/pages/Men";
import Women from "./project/pages/Women";
 import Signup from "./project/pages/Signup";
import Login from "./project/pages/Login";
import Footer from "./project/pages/Footer";
import Cart from "./project/pages/Cart";


function App() {
  const [homeProduct,sethomeProduct] = useState([
    {
      id: 1,
      url: './images/m4.webp',
      name: "Men's Solid Black Sweatshirt",
      mrp: 'MRP : ₹999',
      price: '₹699',
      off: "58% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
    quality: "Soft, premium cotton with wrinkle-resistant finish",
    ratings: "4.5/5",
    packaging: "Recyclable polybag",
    
    product_description: "This Men's Solid Black Sweatshirt Slim Fit Shirt combines comfort and style with its breathable cotton fabric and tailored fit. Perfect for both formal and casual occasions."
    },
    {
      id: 2,
      url: './images/men10.webp',
      name: 'Men Green Printed Sweatshirt',
      mrp: 'MRP : ₹1899',
      price: '₹799',
      off: "62% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
    },
    {
      id: 3,
      url: './images/m7.webp',
      name: 'Men Boyfriend Mid Rise Light Blue Jeans',
      mrp: 'MRP : ₹1099',
      price: '₹599',
      off: "56% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "This Men Boyfriend Mid Rise Light Blue Jeans combines comfort and style with its breathable cotton fabric and tailored fit. Perfect for both formal and casual occasions."
     },
     {
      id: 4,
      url: './images/m8.jpg',
      name: "Men Solid Skinny Fit Jean",
      mrp: 'MRP : ₹999',
      price: '₹699',
      off: "58% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.6/5",
     packaging: "Recyclable polybag",
     
     product_description: "This Men Solid Skinny Fit Jean combines comfort and style with its breathable cotton fabric and tailored fit. Perfect for both formal and casual occasions."
     },
     {
      id: 5,
      url: './images/women1.webp',
      name: 'Women Check Shirt',
      mrp: 'MRP : ₹1699',
      price: '₹1394',
      off: "18% Off Inclusive of all taxes",
      text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Stylish, comfortable, and durable. Perfect for everyday wear, combining modern design with premium quality materials for all-day comfort."
     },
     {
      id: 6,
       url: './images/wom.webp',
       name: 'Solid Regular Fit Blouson',
       mrp: 'MRP : ₹1899',
       price: '₹799',
       off: "62% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
     },
     {
      id: 7,
       url: './images/women3.webp',
       name: 'Solid Velvet Cropped Camisole',
       mrp: 'MRP : ₹699',
       price: '₹599',
       off: "70% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
      },
      {
        id: 8,
       url: './images/women4.webp',
       name: "Light Pink Floral Print Sweatshirt",
       mrp: 'MRP : ₹2499',
       price: '₹999',
       off: "60% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
      }    
  ])




  const [menProduct,setmenProduct] = useState([
    {
      id: 1,
     url: './images/m1.webp',
     name: 'Green Checked Shirt',
     mrp: 'MRP : ₹1899',
     price: '₹799',
     off: "58% Off inclusive of all taxes",
     text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
    },
    {
      id: 2,
      url: './images/m2.webp',
      name: 'Abstract Shirts',
      mrp: 'MRP : ₹1899',
      price: '₹799',
      off: "62% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
    },
    {
      id: 3,
      url: './images/m3.webp',
      name: 'Men Regular Fit Polka Print Casual Shirt',
      mrp: 'MRP : ₹1099',
      price: '₹599',
      off: "56% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
     },
     {
      id: 4,
      url: './images/m4.webp',
      name: "Men's Solid Black Sweatshirt",
      mrp: 'MRP : ₹999',
      price: '₹699',
      off: "58% Off inclusive of all taxes",
      text: "100% Original Products",
     text1: "Pay on delivery might be available",
     text2: "Easy 14 days returns and exchanges",
     quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
     },
     {
      id: 5,
      url: './images/m5.webp',
      name: 'Byford By Pantaloons Olive Slim Fit Printed Sweater',
      mrp: 'MRP : ₹1699',
      price: '₹1394',
      off: "18% Off Inclusive of all taxes",
      text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
     },
     {
      id: 6,
       url: './images/m6.webp',
       name: 'Mens Solid Regular Fit Pants',
       mrp: 'MRP : ₹1899',
       price: '₹799',
       off: "62% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
     },
     {
      id: 7,
       url: './images/m7.webp',
       name: 'Men Boyfriend Mid Rise Light Blue Jeans',
       mrp: 'MRP : ₹699',
       price: '₹599',
       off: "70% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
      },
      {
        id: 8,
       url: './images/m8.jpg',
       name: "Men Solid Skinny Fit Jean",
       mrp: 'MRP : ₹2499',
       price: '₹999',
       off: "60% Off inclusive of all taxes",
       text: "100% Original Products",
      text1: "Pay on delivery might be available",
      text2: "Easy 14 days returns and exchanges",
      quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
      }    
  ])

const [womenProduct, setwomenProduct] = useState([
  {
    id: 1,
   url: './images/women5.webp',
   name: 'Regular Fit Cropped Sweatshirts',
   mrp: 'MRP : ₹1899',
   price: '₹799',
   off: "58% Off inclusive of all taxes",
   text: "100% Original Products",
   text1: "Pay on delivery might be available",
   text2: "Easy 14 days returns and exchanges",
   ratings: "4.4/5",
   packaging: "Recyclable polybag",
   quality: "Soft, premium cotton with wrinkle-resistant finish",
   product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
  },
  {
    id: 2,
    url: './images/women6.webp',
    name: 'Floral Printed Cotton Pullover Sweatshirt',
    mrp: 'MRP : ₹1899',
    price: '₹799',
    off: "62% Off inclusive of all taxes",
    text: "100% Original Products",
   text1: "Pay on delivery might be available",
   text2: "Easy 14 days returns and exchanges",
   ratings: "4.4/5",
   packaging: "Recyclable polybag",
   quality: "Soft, premium cotton with wrinkle-resistant finish",
   product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
  },
  {
    id: 3,
    url: './images/women7.webp',
    name: 'Blocked Regular Fit Cropped Sweatshirts',
    mrp: 'MRP : ₹1099',
    price: '₹599',
    off: "56% Off inclusive of all taxes",
    text: "100% Original Products",
   text1: "Pay on delivery might be available",
   text2: "Easy 14 days returns and exchanges",
   ratings: "4.4/5",
   packaging: "Recyclable polybag",
   quality: "Soft, premium cotton with wrinkle-resistant finish", 
   product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
   },
   {
    id: 4,
    url: './images/women8.webp',
    name: "White Checked Hooded Tailored Jacket",
    mrp: 'MRP : ₹999',
    price: '₹699',
    off: "58% Off inclusive of all taxes",
    text: "100% Original Products",
   text1: "Pay on delivery might be available",
   text2: "Easy 14 days returns and exchanges",
   ratings: "4.4/5",
   packaging: "Recyclable polybag",
   quality: "Soft, premium cotton with wrinkle-resistant finish",
   product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
   },
   {
    id: 5,
    url: './images/w1.webp',
    name: 'Women Lightly Washed Knee-Slit Straight Jeans',
    mrp: 'MRP : ₹1699',
    price: '₹1394',
    off: "18% Off Inclusive of all taxes",
    text: "100% Original Products",
    text1: "Pay on delivery might be available",
    text2: "Easy 14 days returns and exchanges",
    ratings: "4.4/5",
    packaging: "Recyclable polybag",
    quality: "Soft, premium cotton with wrinkle-resistant finish",
    product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
   },
   {
    id: 6,
     url: './images/w2.jpg',
     name: 'Womens Solid Flared Jeans Jeans',
     mrp: 'MRP : ₹1899',
     price: '₹799',
     off: "62% Off inclusive of all taxes",
     text: "100% Original Products",
    text1: "Pay on delivery might be available",
    text2: "Easy 14 days returns and exchanges",
    ratings: "4.4/5",
    packaging: "Recyclable polybag",
    quality: "Soft, premium cotton with wrinkle-resistant finish",
    product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
   },
   {
    id: 7,
     url: './images/w3.jpg',
     name: 'Women Solid Straight Fit Jean',
     mrp: 'MRP : ₹699',
     price: '₹599',
     off: "70% Off inclusive of all taxes",
     text: "100% Original Products",
    text1: "Pay on delivery might be available",
    text2: "Easy 14 days returns and exchanges",
    ratings: "4.4/5",
    packaging: "Recyclable polybag",
    quality: "Soft, premium cotton with wrinkle-resistant finish",
    product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
    },
    {
      id: 8,
     url: './images/w4.webp',
     name: "Women Regular Mid Rise Blue Jeans",
     mrp: 'MRP : ₹2499',
     price: '₹999',
     off: "60% Off inclusive of all taxes",
     text: "100% Original Products",
    text1: "Pay on delivery might be available",
    text2: "Easy 14 days returns and exchanges",
    quality: "Soft, premium cotton with wrinkle-resistant finish",
     ratings: "4.4/5",
     packaging: "Recyclable polybag",
     
     product_description: "Versatile, stylish, and comfortable clothing designed for both men and women. Crafted with premium materials, offering a perfect fit and timeless design, ideal for everyday wear, ensuring comfort and durability all day."
    } 
])



  const [cartdata, setcartdata] = useState([])
  
  const addToCart = (data) => {
      setcartdata(data)
  }
  return (
      
        <div>
            <Header/>
          
             <Routes>
      
      <Route index path="/" element={<Home  homeProduct={homeProduct} addToCart={addToCart}/>} />

      <Route path="/men" element={<Men menProduct={menProduct} addToCart={addToCart}/>} />
      <Route path="/cart" element={<Cart cartdata={cartdata} />} />

      <Route path="/women" element={<Women womenProduct={womenProduct}  addToCart={addToCart}/>} />

      <Route path="/signup" element={<Signup />} />

      <Route path="/login" element={<Login />} />
    
  </Routes>
  <Footer/>
      </div>

  );
}
export default App;
