import { useEffect, useState } from "react";
import { FaRegPlusSquare } from "react-icons/fa";
import axios from "axios";
import Spinner from "../components/Spinner.jsx";
import { Link } from "react-router-dom";

import BooksTable from "../components/home/BooksTable.jsx";
import BooksCard from "../components/home/BooksCard.jsx";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [display,setDisplay] = useState("table")

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5000/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);
  console.log(books);
  return (
    <div className="p-4">
      <div className="flex justify-center items-center gap-x-4">
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setDisplay("table")}> Table</button>
        <button className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg" onClick={()=>setDisplay("card")}> Card</button>
      </div>
      <div className="flex justify-between items-center px-3">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="/books/create">
          {" "}
          <FaRegPlusSquare className="text-3xl" />{" "}
        </Link>
      </div>

      {loading ? (
        <Spinner />
      ) : (
        <>
          {" "}
          {display === "table" ? <BooksTable books={books} /> : <BooksCard  books={books}/>}
        </>
      )}
    </div>
  );
};

export default Home;
