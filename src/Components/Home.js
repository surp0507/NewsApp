import React, { useEffect, useState } from "react";
import { Navbar, Nav, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { requestAllNews } from "../thunk/requestAllNews";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setSearchValue } from "../redux/action/index";
import { requestHeadlines } from "../thunk/requestHeadlines";
export default function Home() {
  const headlines = useSelector((state) => state.headlinesReducer.headlines);
  const news = useSelector((state) => state.searchNewsReducer.news);
  const search = useSelector((state) => state.searchNewsReducer.search);
  console.log(headlines);
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
              />
              <Button
                className="mx-2 bg-info btn btn-sm"
                onClick={handleSubmit}
              >
                search
              </Button>
            </div>
          </Nav>
        </Container>
      </Navbar>
      <div className="container">
        <ul className="list-group">
          {news.map((data, index) => (
            <>
              <li className="list-group-item text-danger" key={index}>
                author:- {data.author}
              </li>
              <Link
                className="text-decoration-none"
                to={`/description/${index}`}
              >
                <span className="text-dark">Title:-</span>
                {data.title}
              </Link>
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
            <Link
              to={`/articles/${index}`}
              className="text-decoration-none text-dark list-group-item"
            >
              Title:- {item.title}
            </Link>
          </ul>
        </>
      ))}
    </div>
  );
}
