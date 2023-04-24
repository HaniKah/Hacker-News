import { useState, useEffect } from "react";
import Row from "./components/Row";
import "./App.css";
import Pagination from "@mui/material/Pagination";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

function App() {
  const [posts, setPosts] = useState([]);

  const [searchTerm, setSearchTerm] = useState();
  const [page, setPage] = useState(1);
  const [spinner, setSpinner] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  const handlePageChange = (e, p) => {
    //console.log("clicked on page " + e, p);
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
    setSpinner(true);
    let url = "http://hn.algolia.com/api/v1/search?query=";
    try {
      if (searchT) {
        url = url + searchT;
        //console.log("inside fetch if(searchT) " + url);
      }
      if (page) {
        url = url + "&page=" + (page - 1);
        //console.log("inside fetch if(page) " + url);
      } else {
        setPage(1);
      }

      const postsResponse = await fetch(url);
      const postsData = await postsResponse.json();
      setPosts(postsData.hits);
    } catch (error) {
      console.error(error);
    }

    setTimeout(() => {
      setSpinner(false);
    }, 1500);

    console.log("Data fetched " + url);
  };

  return (
    <div className="App">
      <Navbar />

      <input type="text" onChange={handleChange} />
      <Box
        sx={{ display: spinner ? "flex" : "none", justifyContent: "center" }}
      >
        <CircularProgress size={200} color="secondary" />
      </Box>
      <div style={{ display: spinner ? "none" : "block" }}>
        <ol>
          {posts ? (
            posts.map((post) => (
              <>
                <Row post={post}></Row>
              </>
            ))
          ) : (
            <h1>You are doing some crazy stuff. There is nothing to show</h1>
          )}
        </ol>
        {/* Pagination Component from MaterialUI */}
        <Pagination
          boundaryCount={1}
          siblingCount={3}
          count={100}
          page={page}
          onChange={handlePageChange}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
