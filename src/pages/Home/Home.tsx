import Header from "../../components/Header";
import NewsCard from "../../components/NewsCard";

const Home: React.FC = () => {
  interface NewsCard {
    id: number;
    title: string;
    desc: string;
  }

  const newsCard: NewsCard[] = [
    {
      id: 1,
      title: "Qanaqadir moshina ko'rinish berdi",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ipsum delectus aspernatur necessitatibus quod.",
    },
    {
      id: 2,
      title: "Qanaqadir moshina ko'rinish berdi",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ipsum delectus aspernatur necessitatibus quod.",
    },
    {
      id: 3,
      title: "Qanaqadir moshina ko'rinish berdi",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ipsum delectus aspernatur necessitatibus quod.",
    },
    {
      id: 4,
      title: "Qanaqadir moshina ko'rinish berdi",
      desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ipsum delectus aspernatur necessitatibus quod.",
    },
  ];

  return (
    <>
      <Header />

      <section className="w-full pt-18 flex justify-center bg-linear-to-r/shorter from-cyan-300 to-sky-400">
        <div className="w-360 h-175 relative">
          <div className="flex w-full justify-center items-center">
            <div className="absolute  mb-4 z-2 top-[50%] font-satisfy">
              <p className="font-satisfy tracking-widest font-semibold text-center text-2xl -mt-4 mb-4">
                Blogdagi so'ngi yangiliklar
              </p>
              <h1 className="text-8xl text-blue-700 font-bold -rotate-5">
                Welcome to HomePage
              </h1>
            </div>
            <span className="absolute w-180 h-180 bg-white rounded-full  blur-xl top-0"></span>
          </div>
        </div>
      </section>

      <section className="w-full flex justify-center relative bg-slate-50">
        <span className="absolute w-[110%] h-25 bg-white blur-md -left-5 -top-5"></span>
        <div className="w-360 h-screen flex flex-col items-center pt-30 gap-10">
          <h2
            className="text-5xl text-center w-full font-eater font-bold tracking-[30px] 
              transition text-shadow-md text-shadow-black/50"
          >
            Latest news
          </h2>

          <div className="w-full flex justify-between">
            {newsCard.map((item) => (
              <NewsCard
                key={item.id}
                description={item.desc}
                title={item.title}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
