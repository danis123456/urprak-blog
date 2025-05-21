import { useEffect, useState } from "react";

function Blog() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts"
        );
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData);
      } catch (err) {
        console.error("Error fetching data: ", err);
      }
    };
    fetchApi();
  }, []);

  return (
    <div className="bg-slate-900 p-9">
        <div className="flex flex-wrap justify-center gap-4">
            {data.map((item) => (
                <div key={item.id} className="flex flex-col gap-4 w-96 bg-slate-700 rounded-md p-2">
                    <img src="src/assets/icon/hero/YouTube banner🏞.jpg" alt="Deskripsi" />
                    <h1 className="text-slate-100 font-bold text-2xl">{item.title}</h1>
                    <p className="text-slate-300">{item.body}</p>
                </div>
            ))}
        </div>
    </div>
  );
}

export default Blog;
