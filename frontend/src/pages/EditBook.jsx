import { useEffect, useState } from "react";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";

const EditBook = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const getBook = async (id) => {
    try {
      const res = await axios.get(`http://localhost:5000/books/${id}`);
      setAuthor(res.data.data.author);
      setTitle(res.data.data.title);
      setPublishedYear(res.data.data.publishedYear);
      console.log(res.data)
      return res.data;
    } catch (error) {
      console.log(error);
    }
  };
  // called on first render to get the current selected book to be edited
  useEffect(() => {
    getBook(id);
  }, []);

  const handleEdit = () => {
    setLoading(true);
    const book = {
      title,
      author,
      publishedYear,
    };

    console.log("Edited book", book);
    axios
      .patch(`http://localhost:5000/books/${id}`, book)
      .then((res) => {
        setLoading(false);
        navigate("/");

        console.log(res);
      })
      .catch((err) => {
        alert("Error occured check console");
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Edit Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto ">
        <div className="my-4">
          <label htmlFor="title" className="text-xl mr-4 text-gray-500">
            Title
          </label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="author" className="text-xl mr-4 text-gray-500">
            Author
          </label>
          <input
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label htmlFor="publishedYear" className="text-xl mr-4 text-gray-500">
            Published Year
          </label>
          <input
            id="publishedYear"
            type="text"
            value={publishedYear}
            onChange={(e) => setPublishedYear(e.target.value)}
            className="border-2 border-gray-500 px-4 py-2 w-full"
          />
        </div>

        <button className="bg-sky-300 p-2 m-8" onClick={handleEdit}>
          Edit Book
        </button>
      </div>
    </div>
  );
};

export default EditBook;
