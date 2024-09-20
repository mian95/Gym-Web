import { useState } from 'react'
import './App.css'
import NavBar from './Components/Navbar/NavBar.jsx';
import Hero from './Components/Hero/Hero.jsx';
import Equipments from './Components/Equipments/Equipments.jsx';
import Banner from './Components/Banner/Banner.jsx';
import Tab from './Components/Tabs/TAb.jsx';
import Reviews from './Components/Review/Reviews.jsx';
import Banner2 from './Components/Banner2/Banner2.jsx';
import Footer from './Components/Footer/Footer.jsx';


const bannerdata = {
  image: 'https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/2.png?raw=true',
  title:"The importance to take care of yourself",
  description: `A vital aspect of maintaining overall health and
  well-being. Taking care of oneself involves a combination of physical, mental, and emotional self-care
  practices that promote a sense of balance and harmony in life.`
}

const banner2data = {
  image: 'https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/3.png?raw=true',
  title:"The importance to take care of yourself",
  description: `A vital aspect of maintaining overall health and
  well-being. Taking care of oneself involves a combination of physical, mental, and emotional self-care
  practices that promote a sense of balance and harmony in life.`
}

const bgStyle = {
  backgroundImage: `url(${'https://github.com/dilshad-ahmed/coders-gym-starter/blob/main/src/assets/bg.png?raw=true'})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
};

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="overflow-x-hidden px-5 md:px-15">
      <div style={bgStyle}>
        <NavBar />
        <Hero />
      </div>
      <Equipments />
      <Banner {...bannerdata}/>
      <Tab />
      <Banner {...banner2data}/>
      <Reviews />
      <Banner2 />
      <Footer />
    </div>
  )
}

export default App
