import Banner from "../components/Banner"
import NewsLetterBox from "../components/NewsLetterBox"
import OurPolicy from "../components/OurPolicy"
import Content from "../components/Content"


const Home = () => {
  return (
    <div>
      <Banner/>
      <Content/>
      <OurPolicy/>
      <NewsLetterBox/>
    </div>
  )
}

export default Home