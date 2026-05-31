const NewsCard: React.FC = () => {
  return (
    <div className="bg-blue-500 rounded-xl shadow-md p-1 w-62.5">
      <div className="bg-white rounded-lg p-2">
        <img src="public\andrew-akabane-psNg6lEq698-unsplash.jpg" className="w-full h-auto rounded-xl" alt="moshina" />

        <h2 className="text-xl font-bold mb-2">Qanaqadir moshina ko'rinish berdi</h2>

        <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, doloremque.
        </p>
      </div>
      <span className="text-sm text-gray-500 flex justify-between pt-1">
        <a href="#" className="text-blue-500 rounded-lg text-center p-1 bg-white hover:underline w-[50%]">Read more</a>
        <a href="#" className="text-blue-500 rounded-lg text-center p-1 bg-white hover:underline ml-4 w-[50%]">Share</a>
      </span>
    </div>
  )
}

export default NewsCard;