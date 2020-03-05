import React, { useEffect, useReducer } from "react";
import axios from "axios";
import styled from "styled-components";
import SkeletonLoader from "tiny-skeleton-loader-react";

const GetMovieTitleBlock = styled.div`
  width: 512px;
  height: 768px;

  margin: 0 auto;
  margin-top: 96px;

  display: flex;
  flex-direction: column;

  div {
    margin: 0 auto;
    color: #5f9ea0;
    font-size: 300%;
    font-weight: bold;
    padding-bottom: 50px;
    text-decoration: underline;
  }

  ul {
    text-align: center;
    padding-right: 42px;
  }
`;

// LOADING, SUCCESS, ERROR
function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function GetMovieTitle() {
  const [state, dispatch] = useReducer(reducer, {
    loading: false,
    data: null,
    error: null
  });

  const fetchMovies = async () => {
    dispatch({ type: "LOADING" });
    try {
      // CORS error(No 'Access-Control-Allow-Origin' header is present on the requested resource), using proxy url
      const response = await axios.get(
        "https://cors-anywhere.herokuapp.com/https://yts.mx/api/v2/list_movies.json?limit=50"
      );
      dispatch({ type: "SUCCESS", data: response.data.data.movies });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  const { loading, data: movies, error } = state;
  if (loading) return <SkeletonLoader height="400%" background="#708090" />;
  if (error) return <div>Error Occurred</div>;
  if (!movies) return null;

  return (
    <>
      <GetMovieTitleBlock>
        <div>Movie List</div>
        <ul>
          {movies.map(movie => (
            <ul key={movie.id}>{movie.title}</ul>
          ))}
        </ul>
      </GetMovieTitleBlock>
    </>
  );
}

export default GetMovieTitle;
