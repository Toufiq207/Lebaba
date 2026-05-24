import React from 'react'
import { useSelector } from 'react-redux'
import Container from '../component/Container'
import { getDatabase, ref, push, set } from "firebase/database";

export const Cheakout = () => {
    const data = useSelector((state)=>state.cart.value)
const db= getDatabase()
const total = data.reduce(
(acc,item)=> acc + item.price * item.quantity,
0
)
 const handleOrder = async () => {
    try {
      const orderRef = push(ref(db, "orders"))

      await set(orderRef, {
        products: data,
        total: total,
        createdAt: new Date().toISOString(),
        status: "pending"
      })

      alert("Order Placed Successfully ✅")

    } catch (error) {
      console.log(error)
      alert("Order Failed ❌")
    }
  }
  return (
   <section className='py-28 bg-gray-100 min-h-screen'>

<Container>

<div className='grid md:grid-cols-2 gap-8'>

{/* Billing Info */}

<div className='bg-white p-6 rounded-xl shadow-md'>

<h2 className='text-2xl font-bold mb-6'>
Billing Details
</h2>

<div className='flex flex-col gap-4'>

<input
type="text"
placeholder='Full Name'
className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
/>

<input
type="email"
placeholder='Email Address'
className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
/>

<input
type="text"
placeholder='Phone Number'
className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
/>

<input
type="text"
placeholder='Address'
className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
/>

<textarea
placeholder='Additional Note'
rows="4"
className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
></textarea>

</div>

</div>

{/* Order Summary */}

<div className='bg-white p-6 rounded-xl shadow-md'>

<h2 className='text-2xl font-bold mb-6'>
Order Summary
</h2>

<div className='flex flex-col gap-4'>

{
data.map((item)=>(
<div
key={item.id}
className='flex justify-between items-center border-b pb-3'
>

<div>
<h4 className='font-semibold'>
{item.name}
</h4>

<p className='text-sm text-gray-500'>
Quantity: {item.quantity}
</p>
</div>

<p className='font-semibold'>
${item.price * item.quantity}
</p>

</div>
))
}

</div>

<div className='mt-6 border-t pt-4 flex justify-between items-center'>

<h3 className='text-xl font-bold'>
Total
</h3>

<h3 className='text-xl font-bold text-primary'>
${total}
</h3>

</div>

<button onClick={handleOrder}
className='w-full mt-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-xl transition'
>
Place Order
</button>

</div>

</div>

</Container>

</section>
  )
}
