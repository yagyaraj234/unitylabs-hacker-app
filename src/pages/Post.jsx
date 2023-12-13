import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POST_URI } from "../constant";
import useFetch from "../hooks/useFetch";
import Pagination from "../components/pagination";
import axios from "axios";

let commentsPerPage = 10;
const Post = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState();
  const userId = useParams()?.ud;
  const url = `${POST_URI}${userId}`;
  

  const fetchData = async () => {
    // setLoading(true);
    try {
      const response = await axios.get(url);
      console.log(response);
      if (!response.data) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.data;
      console.log(result);

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      // setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);
  const commentData = data?.children;

  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentData?.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  function truncateString(str, maxLength) {
    if (str.length <= maxLength) {
      return str;
    }

    return str.slice(0, maxLength - 3) + "...";
  }

  return (
    <div className="sm:p-10 max-sm:p-5 ">
      <div className="flex flex-col">
        <p className="text-5xl font-semibold">{data?.title}</p>
        <p>{data?.points}</p>
        <p>{data?.author}</p>

        {/* Display Current Page Comments */}
        <ul>
          {currentComments?.map((comment) => (
            <div className="flex flex-col" key={comment?.id}>
              <p className="text-blue-900">
                {truncateString(comment?.text, 250)}
              </p>
              <p>{comment?.author}</p>
            </div>
          ))}
        </ul>

        {/* Pagination Component */}
        <Pagination
          itemsPerPage={commentsPerPage}
          totalItems={commentData?.length}
          currentPage={currentPage}
          paginate={paginate}
        />
      </div>
    </div>
  );
};

export default Post;
