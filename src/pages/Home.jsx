import React, { useState, useEffect } from "react";
import InputBox from "../components/InputBox";
import axios from "axios";
import { SEARCH_URI } from "../constant";
import { FaRegCommentAlt } from "react-icons/fa";
import { SlLike } from "react-icons/sl";
import { NavLink } from "react-router-dom";
import Loader from "../components/Loader";

const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  // fetch data
  const fetchData = async () => {
    try {
      const response = await axios.get(`${SEARCH_URI}${searchText}`);
      if (!response.data) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = response.data?.hits;
      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const debounceSearch = setTimeout(() => {
      setLoading(true);
      fetchData();
    }, 1000);

    return () => clearTimeout(debounceSearch);
  }, [searchText]);

  return (
    <div className="flex flex-col items-center justify-center">
      <InputBox
        placeholder="Search here"
        type="text"
        style="border-gray-700 font-medium text-lg border mx-auto px-4 text-gray-800"
        setSearchText={setSearchText}
      />

      {error && <p className="text-red-400">{error}</p>}
      {data.length === 0 && !loading && (
        <p className="text-red-400">No result.</p>
      )}

      {loading ? (
        <Loader />
      ) : (
        <div className="container grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 items-stretch md:gap-14 gap-5 my-4 max-sm:p-10">
          {data?.map((user, index) => (
            <div
              className="flex flex-col gap-2 border border-gray-300 p-2 rounded-lg min-h-[20vh] bg-gray-50 justify-between"
              key={user?.objectID || index}
            >
              <NavLink
                to={`/user/${user.objectID}`}
                className="text-mono text-blue-600 font-medium"
              >
                {user?.title || "NO TITLE"}
              </NavLink>

              <div className="flex justify-end font-serif text-blue-400">
                <p>~{user?.author || "NO AUTHOR"}</p>
              </div>
              <div className="flex gap-2 justify-end text-black">
                <div className="flex gap-1 items-center">
                  <FaRegCommentAlt />
                  <span className="font-semibold">{user?.num_comments}</span>
                </div>
                <div className="flex gap-1 items-center">
                  <SlLike />
                  <span className="font-semibold">{user.points}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
