import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Container from '../component/Container'
import { getDatabase, ref, push, set } from "firebase/database";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Cheakout = () => {

  const data = useSelector((state) => state.cart.value)

  const [billing, setBilling] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    note: ""
  })

  const db = getDatabase()

  const total = data.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  )

  const handleOrder = async () => {

    if (!billing.name.trim()) {
      toast.error("Please enter your name")
      return
    }

    if (!billing.email.trim()) {
      toast.error("Please enter your email")
      return
    }

    if (!billing.phone.trim()) {
      toast.error("Please enter your phone number")
      return
    }

    if (!billing.address.trim()) {
      toast.error("Please enter your address")
      return
    }

    if (data.length === 0) {
      toast.error("Your cart is empty")
      return
    }

    try {

      const orderRef = push(ref(db, "orders"))

      await set(orderRef, {
        billingDetails: {
          name: billing.name,
          email: billing.email,
          phone: billing.phone,
          address: billing.address,
          note: billing.note
        },
        products: data,
        total: total,
        status: "pending",
        createdAt: Date.now()
      })

      toast.success("Order Placed Successfully")

      setBilling({
        name: "",
        email: "",
        phone: "",
        address: "",
        note: ""
      })

    } catch (error) {
      console.log(error)
      toast.error("Order Failed")
    }
  }

  return (
    <section className='py-28 bg-gray-100 min-h-screen'>

      <Container>

        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

        <div className='grid md:grid-cols-2 gap-8'>

          {/* Billing Details */}

          <div className='bg-white p-6 rounded-xl shadow-md'>

            <h2 className='text-2xl font-bold mb-6'>
              Billing Details
            </h2>

            <div className='flex flex-col gap-4'>

              <input
                type="text"
                placeholder='Full Name'
                value={billing.name}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    name: e.target.value
                  })
                }
                className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
              />

              <input
                type="email"
                placeholder='Email Address'
                value={billing.email}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    email: e.target.value
                  })
                }
                className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
              />

              <input
                type="text"
                placeholder='Phone Number'
                value={billing.phone}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    phone: e.target.value
                  })
                }
                className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
              />

              <input
                type="text"
                placeholder='Address'
                value={billing.address}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    address: e.target.value
                  })
                }
                className='border border-gray-300 p-3 rounded-md outline-none focus:border-primary'
              />

              <textarea
                rows="4"
                placeholder='Additional Note'
                value={billing.note}
                onChange={(e) =>
                  setBilling({
                    ...billing,
                    note: e.target.value
                  })
                }
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
                data.length > 0 ? (
                  data.map((item) => (
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
                ) : (
                  <p className='text-gray-500'>
                    No products in cart
                  </p>
                )
              }

            </div>

            <div className='mt-6 border-t pt-4 flex justify-between items-center'>

              <h3 className='text-xl font-bold'>
                Total
              </h3>

              <h3 className='text-xl font-bold text-green-600'>
                ${total}
              </h3>

            </div>

            <button
              onClick={handleOrder}
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