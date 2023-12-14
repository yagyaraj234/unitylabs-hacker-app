import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { POST_URI } from "../constant";
import Pagination from "../components/pagination";
import axios from "axios";
import CommentCard from "../components/CommentCard";
import Loader from "../components/Loader";

let commentsPerPage = 10;
const Post = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const userId = useParams()?.ud;
  const url = `${POST_URI}${userId}`;

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(url);

      if (!response.data) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.data;

      setData(result);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [url]);

  const commentData = data?.children;
  // Pagination
  const indexOfLastComment = currentPage * commentsPerPage;
  const indexOfFirstComment = indexOfLastComment - commentsPerPage;
  const currentComments = commentData?.slice(
    indexOfFirstComment,
    indexOfLastComment
  );

  const paginate = (pageNumber) => {
    setLoading(true);

    setTimeout(() => {
      setCurrentPage(pageNumber);
      setLoading(false);
    }, 1000);
  };
  
  return (
    <div className="sm:p-10 max-sm:p-5 container  mx-auto  ">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col">
          <p className="text-5xl font-semibold">{data?.title}</p>
          <p className="my-2 mt-5 text-xl font-semibold">Author:{data?.author}</p>
          <p className=" text-xl font-semibold">
            Points: {data?.points}
          </p>

          <p className="text-gray-600 mt-2 mb-10"> <span className="font-semibold text-gray-900">Posted On: </span>{data?.created_at?.split("T")[0]}</p>

          {/* Display Current Page Comments */}

          <CommentCard
            currentComments={currentComments}
            comments={commentData?.length}
          />

          {/* Pagination Component */}
          <Pagination
            itemsPerPage={commentsPerPage}
            totalItems={commentData?.length}
            currentPage={currentPage}
            paginate={paginate}
          />
        </div>
      )}
    </div>
  );
};

export default Post;
