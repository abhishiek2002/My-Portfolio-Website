import React, { useEffect, useState } from "react";

const Home = () => {
  const [githubData, setGithubData] = useState({});
  useEffect(() => {
    fetch("https://api.github.com/users/abhishiek2002")
      .then((res) => res.json())
      .then((res) => setGithubData(res));
  }, []);
  const imgUrl = githubData.avatar_url || githubData["avatar_url"];
  console.log(imgUrl);

  return (
    <div className="w-screen">
      <div className="flex flex-col gap-6 sm:flex-row sm:gap-0 justify-between px-6 items-center py-6 lg:py-8 max-w-3xl mx-auto">
        {/* Image Part */}
        <div className="w-[200px] relative">
          <img src={imgUrl} className="rounded-full w-full" alt="" />
        </div>

        {/* Download CV */}
        <div className="flex flex-col gap-4 sm:items-end">
          <h2 className="text-4xl font-bold">Download CV</h2>
          <button className="flex justify-center gap-0.5 bg-orange-700 py-2 px-3 rounded-lg cursor-pointer hover:bg-orange-800">
            {" "}
            <img
              src="https://cdn1.iconfinder.com/data/icons/general-ui-outlined-thick/24/download-1024.png"
              className="w-6 text-center animate-bounce hover:animate-none"
              alt=""
            />{" "}
            Download Now
          </button>
        </div>

        {/* Bio */}
      </div>

      <div className=" flex flex-col gap-3 max-w-3xl mx-auto mt-8 mb-3.5">
        <h1 className="text-4xl font-bold text-center">About Me</h1>
        <p className="text-justify">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit nemo
          tempora eos rem sequi neque dolorem voluptas. Vitae voluptates nobis
          repellat placeat a quidem voluptatum dolor corporis minus! Quaerat
          maiores mollitia itaque a dolorum atque non voluptatem dolor vel at
          voluptates, recusandae aspernatur incidunt, eius delectus, quia labore
          maxime nam error numquam deserunt aperiam! Corrupti distinctio facilis
          repudiandae autem. Praesentium assumenda amet nisi dolore a cumque
          quas totam ipsam ullam iusto dolor nobis similique alias, distinctio,
          dolorem vero doloribus, esse expedita voluptatibus ea facere! Vero quo
          reprehenderit error, aliquam veritatis qui at aspernatur obcaecati?
          Nisi laborum amet quis harum corporis doloribus velit ex. Eos quia
          minima at quas saepe repellat amet tempore voluptatibus exercitationem
          delectus, expedita sapiente voluptatem magni molestiae!
        </p>
      </div>
    </div>
  );
};

export default Home;
