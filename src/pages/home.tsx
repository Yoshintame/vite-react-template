import { env } from "@/config/env";

const Home = () => {
  return (
    <div className="flex  h-screen w-screen flex-col items-center justify-center bg-blue-300 font-bold ">
      <p className="text-6xl text-white">{env.VITE_APP_TITLE}</p>
    </div>
  );
};

export default Home;
