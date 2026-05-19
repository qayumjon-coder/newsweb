import Header from "../../components/Header"

const Contact: React.FC = () => {
  return (
    <div>
        <Header />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-4xl font-bold mb-4">Welcome to the Contact Page</h1>
          <p className="text-lg text-gray-600">This is the contact page of our React application.</p>
        </div>
    </div>
  )
}

export default Contact 