import Header from "../../components/Header"

const AllNews: React.FC = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to the All News Page</h1>
          <p className="text-lg text-gray-600">This is the all news page of our React application.</p>
        </div>
    </div>
  )
}

export default AllNews