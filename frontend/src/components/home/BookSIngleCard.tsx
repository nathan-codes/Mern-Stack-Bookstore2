import React, { useState } from "react";
import { BsFillInfoCircleFill, BsInfoCircle } from "react-icons/bs";
import { FaBookOpen, FaUserCircle } from "react-icons/fa";
import { MdEditLocation, MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import BookModal from "./BookModal";


const BookSIngleCard = ({ book }) => {
    const [showModal,setShowModal] = useState(false)

    return (


<div className="border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl">
      <h2 className="absolute top-1 right-2 px-4 py-1 bg-red-300 rounded-lg">
        {book.publishedYear}
      </h2>
      <h4 className="my-2 text-gray-500">{book._id}</h4>
      <div className="flex justify-start items-center gap-x-2">
        <FaBookOpen className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.title}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2">
        <FaUserCircle className="text-red-300 text-2xl" />
        <h2 className="my-1">{book.author}</h2>
      </div>
      <div className="flex justify-between items-center gap-x-2 mt-4 p-4">
        <BsFillInfoCircleFill
                className="text-3xl text-blue-800 hover:text-black cursor-pointer"
                onClick={() => setShowModal(true)}
              />
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-2xl text-green-800 hover:text-black" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <MdEditLocation className="text-2xl text-yellow-600 hover:text-black" />
        </Link>
        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-2xl text-red-600 hover:text-black" />
        </Link>
      </div>
      {showModal && (
        <BookModal book={book} onClose={()=>setShowModal(false)}/>
      )}
    </div>
  );
};

export default BookSIngleCard;
