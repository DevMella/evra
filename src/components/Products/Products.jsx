import React from 'react'
import Heading from '../Shared/Heading'
import ProductCard from './ProductCard'
import img1 from '../../assets/hero/img1.png'
import img2 from '../../assets/hero/img2.png'
import img3 from '../../assets/hero/img3.png'
import img4 from '../../assets/hero/img4.png'
import img5 from '../../assets/hero/img5.png'
import img6 from '../../assets/hero/img6.png'
import img7 from '../../assets/hero/img7.png'
import img8 from '../../assets/hero/img8.png'

const Productsdata =[
  {
    id:1,
    img:img1,
    title:"JBL Headphone",
    price:"3500",
    aosDelay:"0",
  },
  {
    id:2,
    img:img2,
    title:"Ergonomic Mouse",
    price:"10500",
    aosDelay:"200",
  },
  {
    id:3,
    img:img3,
    title:"Desk Organizer",
    price:"5300",
    aosDelay:"400",
  },
  {
    id:4,
    img:img4,
    title:"CRRJU Wristwatch",
    price:"30500",
    aosDelay:"600",
  },
  {
    id:5,
    img:img5,
    title:"Screen CleanerKit",
    price:"8200",
    aosDelay:"800",
  },
  {
    id:6,
    img:img6,
    title:"Ruby Cubes",
    price:"14500",
    aosDelay:"1000",
  },
  {
    id:7,
    img:img7,
    title:"Laptop Stand",
    price:"6500",
    aosDelay:"1200",
  },
  {
    id:8,
    img:img8,
    title:"Comfortable Desk Mat",
    price:"3500",
    aosDelay:"1400",
  },
]
const Products = () => {
  return (
    <div className='shop' id='shop'>
      <div className="container">
        <Heading title={"Our Products"} subtitle={"Explore Our Products"}/>
        <ProductCard data= {Productsdata}/> 
      </div>
    </div>
  )
}

export default Products
