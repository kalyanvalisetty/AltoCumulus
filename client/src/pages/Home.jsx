import Banner from "../components/Banner"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"
import Content from "../components/Content"
import AutoCarousel from "../components/AutoCarousel"


const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <AutoCarousel/>
      <Content/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home