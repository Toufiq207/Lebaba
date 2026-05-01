import React from 'react'

const Shopfiltering = ({ filter, filterState, setFilterState, clearFilter }) => {
  return (
    <div className='w-[250px]'>
      <h3 className='text-xl font-bold mb-4'>Filters</h3>

      {/* Category */}
      <div className='mb-6'>
        <h4 className='text-lg font-medium'>Category</h4>
        <hr className='my-2' />

        <div className='flex flex-col gap-2'>
          {filter.catagories.map((catagory) => (
            <label key={catagory} className='capitalize cursor-pointer'>
              <input
                type="radio"
                name='catagory'
                value={catagory}
                checked={filterState.catagories === catagory}
                onChange={(e) =>
                  setFilterState({
                    ...filterState,
                    catagories: e.target.value
                  })
                }
              />
              <span className='ml-2'>{catagory}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Color */}
      <div className='mb-6'>
        <h4 className='text-lg font-medium'>Color</h4>
        <hr className='my-2' />

        <div className='flex flex-col gap-2'>
          {filter.colors.map((color) => (
            <label key={color} className='capitalize cursor-pointer'>
              <input
                type="radio"
                name='color'
                value={color}
                checked={filterState.colors === color}
                onChange={(e) =>
                  setFilterState({
                    ...filterState,
                    colors: e.target.value
                  })
                }
              />
              <span className='ml-2'>{color}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price */}
      <div className='mb-6'>
        <h4 className='text-lg font-medium'>Price</h4>
        <hr className='my-2' />

        <div className='flex flex-col gap-2'>
          {filter.priceRage.map((range) => (
            <label key={range.label} className='cursor-pointer'>
              <input
                type="radio"
                name='price'
                checked={filterState.priceRage?.label === range.label}
                onChange={() =>
                  setFilterState({
                    ...filterState,
                    priceRage: range
                  })
                }
              />
              <span className='ml-2'>{range.label}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Clear Button */}
      <button
        onClick={clearFilter}
        className='bg-red-500 text-white px-4 py-2 rounded'
      >
        Clear All Filter
      </button>
    </div>
  )
}

export default Shopfiltering