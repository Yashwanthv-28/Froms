import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Carousel from './components/Carousel'
import Footer from './components/Footer'
import Card2 from './components/Card2'
import About from './components/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
        
        <Route path="/About" element={<About />} />
      </Routes>
      <Carousel />
      <div className='cards-container'>
        <div className='card-warpper'>
          <div className='card-wrapper left'>
            <Cards Name='card-1' img="https://picsum.photos/100/100" C="This is the first card" />
            <p>where creativity meets innovation! Whether you're looking for insightful content, expert advice, or just a spark of inspiration,
              you've come to the right place. Explore our features, browse our latest updates, and discover something new today!</p>
          </div>
          <div className='card-wrapper right'>
            <Cards Name='card-2' img="https://picsum.photos/100/100" C="This is the second card" />
            <p>- Looking for top-notch solutions? We've got you covered! From expert advice to cutting-edge resources, [Your Website Name] is committed to delivering quality services tailored to your needs. Explore our offerings and find the perfect fit for you!
            </p>
          </div>
          <div className='card-wrapper left'>
            <Cards Name='card-3' img="https://picsum.photos/100/100" C="This is the third card" />
            <p>Don’t just take our word for it—see what our satisfied users have to say! Read real experiences, success stories, and feedback from our community </p>
          </div>
          <div className='card-wrapper right'>
            <Cards Name='card-4' img="https://picsum.photos/100/100" C="This is the fourth card" />
            <p>- Stay ahead of the curve with our latest articles, industry updates, and thought-provoking discussions. Whether you're looking for expert insights or a dose of inspiration, our blog at [Your Website Name] has something for everyone!"
            </p>
          </div>
        </div>
      </div>
      <div className='cointainera'>
        <Card2 Name='card-a' img="https://picsum.photos/400/200" C="hii" />
        <p>At [Your Website Name], we are passionate about innovation, creativity, and connection. Our mission is to provide insightful content, expert guidance, and inspiring resources that help individuals and businesses thrive. Whether you're seeking fresh ideas, industry trends, or practical solutions, our platform is designed to empower and support you. With a commitment to quality and growth, we continuously explore new possibilities to bring valuable experiences to our community. Discover engaging discussions, helpful tools, and meaningful interactions as you navigate through [Your Website Name]. Welcome to a space where ideas come to life and possibilities are endless!
        </p>
        <Card2 Name='card-b' img="https://picsum.photos/400/200" C="hello" />
        <p>At [Your Website Name], we are passionate about innovation, creativity, and connection. Our mission is to provide insightful content, expert guidance, and inspiring resources that help individuals and businesses thrive. Whether you're seeking fresh ideas, industry trends, or practical solutions, our platform is designed to empower and support you. With a commitment to quality and growth, we continuously explore new possibilities to bring valuable experiences to our community. Discover engaging discussions, helpful tools, and meaningful interactions as you navigate through [Your Website Name]. Welcome to a space where ideas come to life and possibilities are endless!
        </p>
      </div>
      <Footer />
      </Router>
    </>
  )
}

export default App
