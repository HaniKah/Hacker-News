import { useState, useEffect } from "react";
import Row from "./components/Row";
import "./App.css";
import Pagination from "@mui/material/Pagination";
import Footer from "./components/Footer";

function App() {
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (e, p) => {
    console.log("clicked on page " + e, p);
    setPage(p);
    fetchData(searchTerm, p);
  };

  console.log("new value of page " + page);

  const handleChange = (event) => {
    let value = event.target.value;

    setSearchTerm(value);
    fetchData(value);
  };

  const fetchData = async (searchT, page) => {
    let url = "http://hn.algolia.com/api/v1/search?query=";

    if (searchT) {
      url = url + searchT;
      console.log("inside fetch if(searchT) " + url);
    }
    if (page) {
      url = url + "&page=" + page;
      console.log("inside fetch if(page) " + url);
    } else {
      setPage(1);
    }

    const postsResponse = await fetch(url);
    const postsData = await postsResponse.json();

    setPosts(postsData.hits);

    console.log("Data fetched " + url);
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

      <Pagination
        boundaryCount={1}
        siblingCount={3}
        count={100}
        page={page}
        onChange={handlePageChange}
      />
      <Footer />
    </div>
  );
}

export default App;
