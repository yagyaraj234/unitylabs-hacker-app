import React from "react";
import { LuUserCircle } from "react-icons/lu";
import { MdReply } from "react-icons/md";

const CommentCard = ({ currentComments, comments }) => {
  const truncateString = (str, maxLength) => {
    if (str.length <= maxLength) {
      return str;
    }
    return str.slice(0, maxLength - 3) + "...";
  };
  return (
    <div className="my-4 flex flex-col items-start overflow-hidden">
      <small className="border-b w-full text-base font-bold text-gray-700 ml-1">
        {comments} comments
      </small>

      {currentComments?.map((comment) => (
        <div key={comment.id} className="flex flex-col mt-4">
          <div className="flex flex-row mx-auto justify-between px-1 py-1">
            <div className="flex mr-2">
              <div className="items-center justify-center w-12 h-12 mx-auto">
                <LuUserCircle className="text-4xl max-sm:text-2xl" />
              </div>
            </div>
            <div className="flex-1 pl-1">
              <div className="text-base font-semibold text-gray-600">
                {comment?.author}
                <span className="text-sm font-normal text-gray-500">
                  - {comment?.created_at?.split("T")[0]}
                </span>
              </div>
              <div className="text-sm text-gray-600">
                {truncateString(comment.text, 150)}
              </div>
              <div className="flex items-center text-sm mt-1 space-x-3">
                <a
                  href="#"
                  className="flex items-center text-blue-500 hover:text-blue-600"
                >
                  <MdReply />
                  <span className="font-semibold">
                    {comment?.children?.length} Reply
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Replies to comment */}
          <div className="pl-20">
            {comment?.children.slice(0, 2)?.map((subcomment) => (
              <div
                className="flex flex-row mx-auto justify-between mt-4"
                key={subcomment?.id}
              >
                <div className="flex mr-2">
                  <div className="items-center justify-center w-10 h-10 mx-auto">
                    <img
                      alt="profil"
                      src="https://svgsilh.com/svg/659651.svg"
                      className="object-cover w-10 h-10 mx-auto rounded-full border border-gray-200"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="text-base font-semibold text-gray-600">
                    {subcomment?.author}
                    <span className="text-sm font-normal text-gray-500">
                      - {subcomment?.created_at}
                    </span>
                  </div>
                  <div className="text-sm text-gray-600 break-words break-all">
                    {truncateString(subcomment?.text, 70)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CommentCard;

{
  /* <div className="flex flex-row mx-auto justify-between px-1 py-4">
          <div className="flex mr-2">
            <div className="items-center justify-center w-12 h-12 mx-auto">
              <img
                alt="profil"
                src="https://images.unsplash.com/photo-1520745716611-5f02a256ac09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTU0fHx3b21lbiUyMGFzaWF8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                className="object-cover w-12 h-12 mx-auto rounded-full"
              />
            </div>
          </div>
          <div className="flex-1 pl-1">
            <div className="text-base font-semibold text-gray-600">
              Manako Uchiyama{" "}
              <span className="text-sm font-normal text-gray-500">
                - Feb 10, 2022
              </span>
            </div>
            <div className="text-sm text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              laborum corrupti dolor!
            </div>
            <div className="flex items-center text-sm mt-1 space-x-3">
              <a
                href="#"
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="font-semibold">Reply</span>
              </a>
              <a
                href="#"
                className="flex items-center text-blue-500 hover:text-red-600 group"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 group-hover:text-red-600 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span className="font-semibold ">0</span>
              </a>
              <a
                href="#"
                className="flex items-center text-blue-500 hover:text-blue-600"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 mr-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
                </svg>
                <span className="font-semibold">Share</span>
              </a>
            </div>
          </div>
        </div> */
}

{
  /* <div className="flex flex-row mx-auto justify-between mt-4">
              <div className="flex mr-2">
                <div className="items-center justify-center w-10 h-10 mx-auto">
                  <img
                    alt="profil"
                    src="https://images.unsplash.com/photo-1604238473951-bf1492b379f8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fHdvbWVuJTIwYXNpYXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                    className="object-cover w-10 h-10 mx-auto rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-600">
                  Amanda J. Rich{" "}
                  <span className="text-sm font-normal text-gray-500">
                    - Feb 11, 2022
                  </span>
                </div>
                <div className="text-sm text-gray-600">
                  Lorem ipsum dolor sit amet.
                </div>
              </div>
            </div> */
}
{
  /* <div className="flex flex-row mx-auto justify-between mt-4">
              <div className="flex mr-2">
                <div className="items-center justify-center w-10 h-10 mx-auto">
                  <img
                    alt="profil"
                    src="https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFuJTIwYmxhY2t8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                    className="object-cover w-10 h-10 mx-auto rounded-full"
                  />
                </div>
              </div>
              <div className="flex-1">
                <div className="text-base font-semibold text-gray-600">
                  Jonathan Paul{" "}
                  <span className="text-sm font-normal text-gray-500">
                    - Feb 12, 2022
                  </span>
                </div>
                <div className="text-sm text-gray-600">Lorem, ipsum dolor.</div>
              </div>
            </div> */
}
