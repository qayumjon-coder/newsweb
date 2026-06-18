import Button from "./Button";
import LinkItem from "./LinkItem";

const NewsCard: React.FC<{ description: string; title: string }> = ({
  description,
  title,
}) => {
  return (
    <div className="rounded-xl shadow-1xl hover:scale-101 p-1 transition w-80.5">
      <div className="flex flex-col gap-2.5 bg-white rounded-2xl p-3">
        <img
          src="/andrew-akabane-psNg6lEq698-unsplash.jpg"
          className="w-full h-auto rounded-xl "
          alt="moshina"
        />

        <h2 className="text-xl font-bold mb-2">{title}</h2>

        <p className="text-gray-700">{description}</p>

        <span className="text-sm text-gray-500 flex justify-between pt-1">
          <LinkItem
            title="Read more"
            href="#"
            isBlank="_self"
            styleclass="text-blue-500 rounded-full text-center p-2 bg-white hover:underline w-[50%]"
          />
          <Button
            name="Share"
            selector="text-blue-500 rounded-full text-center p-2 bg-white hover:underline ml-4 w-[50%]"
          />
        </span>
      </div>
    </div>
  );
};

export default NewsCard;
