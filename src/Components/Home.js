import React, { useEffect } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { requestAllNews } from "../thunk/requestAllNews";
import { setBookMark } from "../redux/action/index";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchValue } from "../redux/action/index";
import { setCheckBox } from "../redux/action/index";
import { requestHeadlines } from "../thunk/requestHeadlines";
export default function Home() {
  const headlines = useSelector((state) => state.headlinesReducer.headlines);
  const checkbox = useSelector((state) => state.headlinesReducer.checkbox);
  const bookmark = useSelector((state) => state.headlinesReducer.bookmark);
  const news = useSelector((state) => state.searchNewsReducer.news);
  const search = useSelector((state) => state.searchNewsReducer.search);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(requestHeadlines());
  }, []);

  const handleChange = (e) => {
    dispatch(setSearchValue(e.target.value));
  };

  const handleSubmit = () => {
    dispatch(requestAllNews(search));
  };

  const handleCheck = (data) => {
    alert("added to bookmark");
    dispatch(setCheckBox(true));
    dispatch(setBookMark([...bookmark, data]));
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  };

  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Nav className="me-auto">
            <div className="ml-2">
              <input
                type="text"
                placeholder="search-news"
                onChange={handleChange}
                className="text-center"
              />
              <Button
                className="mx-2 bg-info btn btn-sm text-dark"
                onClick={handleSubmit}
              >
                search
              </Button>
            </div>
         </Nav>
         <div className="text-right">
            <Link
              to="/bookmark"
              className="btn-info btn-sm text-decoration-none"
            >
              Check Bookmar
            </Link>
          </div>
        </Container>
      </Navbar>
      <div className="container">
        <marquee width="60%" direction="left">
          <h3 className="py-3 ">News Headlines</h3>
        </marquee>
        <ul className="list-group">
          {news.map((data, index) => (
            <>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={data.urlToImage} />
                <Card.Body>
                  <Card.Title className="text-center">Breaking News</Card.Title>
                  <Card.Text>
                    <li className="list-group-item text-danger" key={index}>
                      author:- {data.author}
                    </li>
                    <Link
                      className="text-decoration-none text-dark"
                      to={`/description/${index}`}
                    >
                      <span className="text-dark"></span>
                      <h4>{data.title}</h4>{" "}
                      <span className="text-primary">Read more...</span>
                    </Link>
                  </Card.Text>
                </Card.Body>
              </Card>
            </>
          ))}
        </ul>
      </div>

      {headlines.map((item, index) => (
        <>
          <ul className="list-group">
            <li key={index} className="text-danger">
              Author:-{item.author}
            </li>
            <div className="mx-auto">
              <span className="text-danger mx-2">Add to Bookmark</span>
              <input type="checkbox" onChange={() => handleCheck(item)} />
            </div>
            <img
              src={item.urlToImage}
              alt="img"
              srcset=""
              style={{ maxWidth: "50%" }}
            />

            <Link
              to={`/articles/${index}`}
              className="text-decoration-none text-dark list-group-item"
            >
              <h5>
                {item.title} <span className="text-primary">Read more...</span>
              </h5>
            </Link>
          </ul>
        </>
      ))}
    </div>
  );
}
