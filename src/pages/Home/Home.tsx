import Header from "../../components/Header"
import NewsCard from "../../components/NewsCard"

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center mt-8 h-screen">

          <h1 className="text-4xl font-bold mb-4">Latest News</h1>
          
          <NewsCard />
        </div>
    </>
  )
}

export default Home