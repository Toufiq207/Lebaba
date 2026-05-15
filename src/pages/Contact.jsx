import React from 'react'
import Container from '../component/Container'

const Contact = () => {
  return (
    <section>
        <Container>
                 <div className="max-w-6xl mx-auto px-4">

          {/* Title */}
          <h2 className="text-4xl font-bold text-center mb-10">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left Side */}
            <div className="bg-white p-6 rounded-2xl shadow-md space-y-5">

              <h3 className="text-2xl font-semibold">Get in Touch</h3>

              <p className="text-gray-600">
                Feel free to contact us anytime. We usually respond within 24 hours.
              </p>

              <div>
                <p className="font-semibold">Phone:</p>
                <a href="tel:01609697207" className="text-blue-600 hover:underline">
                  01609697207
                </a>
              </div>

              <div>
                <p className="font-semibold">WhatsApp:</p>
                <a
                  href="https://wa.me/8801609697207"
                  target="_blank"
                  rel="noreferrer"
                  className="text-green-600 hover:underline"
                >
                  Chat on WhatsApp
                </a>
              </div>

              <div>
                <p className="font-semibold">Email:</p>
                <a
                  href="mailto:lijonlijon30@gmail.com"
                  className="text-red-500 hover:underline"
                >
                  lijonlijon30@gmail.com
                </a>
              </div>

              <div>
                <p className="font-semibold">Address:</p>
                <p className="text-gray-600">
                  123, London Bridge Street, London
                </p>
              </div>

            </div>

            {/* Right Side - Map */}
            <div className="rounded-2xl overflow-hidden shadow-md h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2072.7748812871528!2d-0.08970392414490631!3d51.50496951088194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48760350a5933a43%3A0xbcea0bc743134400!2s123%20London%20Bridge%20St%2C%20London%2C%20UK!5e1!3m2!1sen!2sbd!4v1778861693544!5m2!1sen!2sbd"
                className="w-full h-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>

        </Container>
    </section>
  )
}

export default Contact