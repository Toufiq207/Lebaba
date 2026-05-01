import React from 'react'

const RatingStar = ({ rating }) => {
  let stars = []

  for (let i = 1; i <= 5; i++) {
    stars.push(
      <span
        key={i}
        className={`ri-star${i <= rating ? "-fill" : "-line"}`}
      ></span>
    )
  }

  return (
    <div className="text-center text-yellow-500 text-xl">
      {stars}
    </div>
  )
}

export default RatingStar