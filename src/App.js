import { useState, useEffect } from "react";
import Row from "./components/Row";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState();

  const [page, setPage] = useState(0);

  // const [searchTerm, setSearchTerm] = useState("");

  // const posts = fetch("http://hn.algolia.com/api/v1/search?query=")
  //   .then((res) => res.json())
  //   .then((data) => {
  //     setPosts(data)
  //   });

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (event) => {
    let value = event.target.value;

    // setSearchTerm(value);
    fetchData(value);
  };

  const fetchData = async (searchT) => {
    let url = "http://hn.algolia.com/api/v1/search?query=";

    if (searchT) {
      url = url + searchT;
    }

    console.log(url);

    const postsResponse = await fetch(url);
    const postsData = await postsResponse.json();

    setPosts(postsData.hits);
    // console.log(postsData);
  };

  return (
    <div className="App">
      <input type="text" onChange={handleChange} />
      <ol>
        {posts?.map((post) => (
          <>
            <Row post={post}></Row>
          </>
        ))}
      </ol>
    </div>
  );
}

export default App;
