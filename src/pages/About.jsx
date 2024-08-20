import React from "react";
import Image from "../assets/images/shopping 6.jpg";
import Image1 from "../assets/images/shopping.jpg";
import Image2 from "../assets/images/shopping 4.jpg";
import Image3 from "../assets/images/shopping 2.jpg";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-[80px]">
      <header
        className="bg-cover bg-center h-96 text-white flex justify-center items-center bg-opacity-30 relative"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute bg-black opacity-80 inset-0"></div>
        <div className="relative text-center">
          <h1 className="text-5xl font-bold">About Us</h1>
          <p className="text-xl mt-4">
            Our journey, values, and what makes us unique
          </p>
        </div>
      </header>

      <section className="max-w-[1024px] mx-auto py-16 px-6 lg:px-0">
        <div className="flex flex-col md:flex-row  items-center">
          <div className="md:w-1/2">
            <img
              src={Image1}
              alt=""
              className="w-full border border-gray-100 shadow-xl"
            />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <h2 className="font-bold text-4xl font-rubik mb-4">Our Story</h2>
            <p className="text-justify">
              Welcome to <strong>PureBazaar</strong>, where we bring you a
              curated collection of high-quality products that cater to your
              needs and desires. Our journey began in <strong>2004</strong> with
              a vision to offer exceptional products at unbeatable prices, all
              while providing a seamless and enjoyable shopping experience.
              <br /> <br />
              At <strong>PureBazaar</strong>, our mission is to revolutionize the way you shop by
              offering a diverse range of products that combine style,
              functionality, and affordability. Over the years, we've expanded
              our offerings to include everything from cutting-edge electronics
              to the latest fashion trends, home essentials, beauty products,
              and much more.
            </p>
           
          </div>
        </div>
      </section>

      <section className=" bg-gray-100 py-16 px-6">
        <div className="container max-w-[1024px] mx-auto text-justify">
          <h2 className="text-4xl font-rubik font-bold mb-4">Our Mission & Values</h2>
          <div className="grid md:grid-cols-2 gap-6 mt-4">
            <div className="py-4">
              <div className="p-12 bg-white rounded shadow-lg">
                <i className="fas fa-check-circle text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">Quality</h3>
                <p>
                  We believe that quality is the cornerstone of trust. Every
                  product in our store is carefully handpicked to meet the
                  highest standards, ensuring that you receive nothing but the
                  best. Our commitment to quality extends beyond our products to
                  every aspect of our service.
                </p>
              </div>
            </div>
            <div className="py-4">
              <div className="p-12 bg-white rounded shadow-lg">
                <i className="fas fa-smile text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">Customer Satisfaction</h3>
                <p>
                  Your satisfaction is our top priority. We strive to exceed
                  your expectations with every purchase, providing not only
                  excellent products but also a seamless and enjoyable shopping
                  experience. We listen to your feedback and continuously
                  improve to serve you better.
                </p>
              </div>
            </div>

            <div className="py-4">
              <div className="p-12 bg-white rounded shadow-lg">
                <i className="fas fa-shield-alt text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">Integrity</h3>
                <p>
                  We conduct our business with honesty and transparency,
                  building trust with our customers, partners, and community.
                  Integrity is at the heart of everything we do, from the
                  products we offer to the way we communicate and interact with
                  you.
                </p>
              </div>
            </div>
            <div className="py-4">
              <div className="p-12 bg-white rounded shadow-lg">
                <i className="fas fa-globe text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">Sustainability</h3>
                <p>
                  We are committed to protecting the planet. By adopting
                  sustainable practices in our sourcing, packaging, and
                  operations, we strive to minimize our environmental footprint
                  while providing you with eco-friendly products that align with
                  your values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="why-choose-us py-16 px-6 lg:px-0">
        <div className="container max-w-[1024px] mx-auto text-left">
          <h2 className="text-4xl font-rubik font-bold mb-4 text-center">
            Why Choose Us?
          </h2>
          <div className=" mt-8">
            <div className=" grid md:grid-cols-2 gap-6">
              <div className="">
                <img src={Image2} alt="" className="border border-gray-200" />
              </div>
              <div>
                <div>
                  <h3 className="text-xl font-bold py-2">Wide Range of Products</h3>
                  <p>
                    Our store is a one-stop shop for all your needs. We offer a
                    diverse selection of products across various categories,
                    ensuring that you find exactly what you're looking for.
                    Whether it's the latest gadgets, fashionable apparel, or
                    everyday essentials, we've got you covered.
                  </p>
                </div>
                <div className="pt-4">
                  <i className="fas fa-tags text-3xl mb-4"></i>
                  <h3 className="text-xl font-bold py-2">Competitive Prices</h3>
                  <p>
                    We believe that quality shouldn't come at a premium. By
                    working directly with manufacturers and suppliers, we are
                    able to offer you top-notch products at the most competitive
                    prices. Enjoy great value without compromising on quality.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="pt-10 grid md:grid-cols-2 gap-6">
            <div className="order-1 md:order-2">
              <img src={Image3} alt="" />
            </div>
            <div className="order-2 md:order-1">
              <div>
                <i className="fas fa-shipping-fast text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">Fast & Secure Shipping</h3>
                <p>
                  We understand the importance of getting your orders to you
                  quickly and safely. That's why we partner with reliable
                  carriers to ensure that your items are delivered to your
                  doorstep in the shortest possible time, with secure packaging
                  to protect your purchases.
                </p>
              </div>
              <div className="pt-4">
                <i className="fas fa-headset text-3xl mb-4"></i>
                <h3 className="text-xl font-bold py-2">
                  Exceptional Customer Service
                </h3>
                <p>
                  Our dedicated customer support team is here to assist you with
                  any questions or concerns. We pride ourselves on our
                  responsiveness and willingness to go the extra mile to ensure
                  that your shopping experience is nothing short of exceptional.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-[1024px]  mx-auto py-16 px-4 text-center">
        <div className="container mx-auto">
          <h2 className="text-4xl font-rubik font-bold mb-4">Join Our Community</h2>
          <p className="text-lg mb-6">
            Follow us on social media to stay up-to-date with the latest news,
            promotions, and product launches. We love hearing from our
            customers, so feel free to reach out and share your thoughts with
            us!
          </p>
          <div className="flex justify-center space-x-4">
            {/* Replace with actual social media links */}
            <a href="#" className="text-blue-600 text-2xl">
              <FaFacebook />
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="text-blue-400 text-2xl">
              <FaTwitter />
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-pink-600 text-2xl">
              <FaInstagram />
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" className="text-blue-700 text-2xl">
              <FaLinkedin />
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
