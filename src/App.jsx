import Header from "./component/Header/Header"
import Navbar from "./component/Navbar/Navbar"
import Banner from "./component/Banner/Banner"
import Service from "./component/Banner/service/Service"
import Slider from "./component/slider/Slider"
import Ourservice from "./component/Ourservice/Ourservice"
import About from "./component/About/About"
import Logo from "./component/Logo/Logo"
import Lorem from "./component/Lorem/Lorem"
import Map from "./component/Map/Map"
import Contact from"./component/Contact/Contact"
import Footer from"./component/Footer/Footer"
import FooterBG from "./component/Footer bg/FooterBG"



function App() {

  return (
    <>
      <Header></Header>
      <Navbar></Navbar>
      <Banner></Banner>
      <Service></Service>
      <Slider></Slider>
      {/* <Ours></Ours>
      <Ours></Ours> */}
      {/* <Supply/> */}
      <Ourservice/>
      <About></About>
      <Logo></Logo>
      <Lorem></Lorem>
      <Map></Map>
      <Contact></Contact>
      <Footer></Footer>
      <FooterBG></FooterBG>
  </>

  )
}

export default App
