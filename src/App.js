import { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [myData, setMyData] = useState([]);
  const [myError, setMyError] = useState("  ");

                    // with promises frist time call when app run
  // useEffect(() => {
  //   axios
  //     .get("https://jsonplaceholder.typicode.com/posts")
  //     .then((res) => setMyData(res.data))
  //     // if face error then perform 
  //     .catch((error) => setMyError(error.message))
  // });
 
  // using async await method working below here
  

  let apidata = async()=>{

    // if show errror then use try catch 

    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
      setMyData(res.data);
    } catch (error) {
      setMyError(error.message)
    }
   
  }
  useEffect(()=>{
    apidata();
  })
 

  return (
    <>
    <h1>Axios Working</h1>
    {myError !== "" && <h2>{myError}</h2>}
      {myData.map((post) => {
        const { id, title, body } = post;
        return (
          <a
            href="/" key={id}
            className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
          >
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {title}
            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
              {body}
            </p>
          </a>
        );
      })}
    </>
  );
}

export default App;
