import Header from "../../components/Header"

const Blog: React.FC = () => {
  return (
    <div>
        <Header />

        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Blog Page</h1>
          <p className="text-lg text-gray-600">This is the blog page of our React application.</p>
        </div>
    </div>
  )
}

export default Blog