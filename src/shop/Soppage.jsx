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

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 8

  const applyFilter = () => {
    let filterproduct = [...productData]

    // Category
    if (filterState.catagories !== "all") {
      filterproduct = filterproduct.filter(
        (item) => item.category === filterState.catagories
      )
    }

    // Color
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
    setCurrentPage(1)
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

  // Pagination Logic
  const totalPages = Math.ceil(product.length / itemsPerPage)

  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage

  const currentProducts = product.slice(startIndex, endIndex)

  return (
  <div>
  <Container>

    {/* Banner */}
    <div className='w-full py-[60px] sm:py-[80px] md:py-[100px] bg-primary-light'>
      <h2 className='font-bold text-2xl sm:text-3xl md:text-4xl text-center'>
        Shop Page
      </h2>
    </div>

    {/* Main Section */}
    <div className='flex flex-col lg:flex-row gap-6 mt-10'>

      {/* Sidebar */}
      <div className='w-full lg:w-[280px]'>
        <Shopfiltering
          filter={filter}
          filterState={filterState}
          setFilterState={setFilterState}
          clearFilter={clearFilter}
        />
      </div>

      {/* Products Section */}
      <div className='flex-1'>

        <h2 className='font-bold text-lg sm:text-xl md:text-2xl mb-4 text-center lg:text-left'>
          Show {startIndex + 1} to{" "}
          {Math.min(endIndex, product.length)} of{" "}
          {product.length}
        </h2>

        <ProductCart products={currentProducts} />

        {/* Pagination */}
        <div className='flex flex-wrap items-center justify-center gap-3 mt-10'>

          {/* Previous Button */}
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base text-white ${
              currentPage === 1
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          <div className='flex flex-wrap justify-center gap-2'>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full border text-sm sm:text-base ${
                  currentPage === index + 1
                    ? "bg-black text-white"
                    : "bg-white text-black"
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 sm:px-5 py-2 rounded-lg text-sm sm:text-base text-white ${
              currentPage === totalPages
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-black hover:bg-gray-800"
            }`}
          >
            Next
          </button>

        </div>

      </div>

    </div>

  </Container>
</div>
  )
}

export default Soppage