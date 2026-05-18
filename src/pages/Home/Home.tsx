import Header from "../../components/Header"

const Home: React.FC = () => {
  return (
    <>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Home Page</h1>
          <p className="text-lg text-gray-600">This is the home page of our React application.</p>
        </div>
    </>
  )
}

export default Home