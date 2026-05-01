import React, { useEffect, useState } from 'react'
import Container from '../component/Container'
import productData from '../data/products.json'
import ProductCart from './ProductCart'
import Shopfiltering from './Shopfiltering'

const filter = {
  catagories: ["all","accessories","dress","jewellery","cosmetics"],
  colors: ["all","red","black","green","beige","blue","gold","silver"],
  priceRage: [
    {label:"Under $50", min:0,max:50},
    {label:"$50 - $100", min:50,max:100},
    {label:"$100 - $200", min:100,max:200},
    {label:"$200 and above", min:200,max:Infinity}
  ]
}

const Soppage = () => {
  const [product, setProduct] = useState(productData)

  const [filterState, setFilterState] = useState({
    catagories: "all",
    colors: "all",
    priceRage: null
  })

  const applyFilter = () => {
    let filterproduct = [...productData]

    // Category
    if (filterState.catagories !== "all") {
      filterproduct = filterproduct.filter(
        (item) => item.category === filterState.catagories
      )
    }

    // Color (IMPORTANT: your JSON must have "color")
    if (filterState.colors !== "all") {
      filterproduct = filterproduct.filter(
        (item) => item.color === filterState.colors
      )
    }

    // Price
    if (filterState.priceRage) {
      filterproduct = filterproduct.filter(
        (item) =>
          item.price >= filterState.priceRage.min &&
          item.price <= filterState.priceRage.max
      )
    }

    setProduct(filterproduct)
  }

  useEffect(() => {
    applyFilter()
  }, [filterState])

  const clearFilter = () => {
    setFilterState({
      catagories: "all",
      colors: "all",
      priceRage: null
    })
  }

  return (
    <div>
      <Container>
        <div className='w-full py-[100px] bg-primary-light'>
          <h2 className='font-bold text-4xl text-center'>Shop Page</h2>
        </div>

        <div className='flex gap-6 mt-10'>
          <Shopfiltering
            filter={filter}
            filterState={filterState}
            setFilterState={setFilterState}
            clearFilter={clearFilter}
          />

          <div className='flex-1'>
            <h2 className='font-bold text-2xl mb-4'>
              Product Available: {product.length}
            </h2>

            <ProductCart products={product} />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Soppage