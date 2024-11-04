import { useState } from "react";
import Backbutton from "../components/Backbutton";
import Spinner from "../components/Spinner";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useSnackbar } from "notistack";

const CreateBooks = () => {
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [publishedYear, setPublishedYear] = useState("");
  const [loading, setLoading] = useState(false);
  const {enqueueSnackbar}  = useSnackbar()
  const navigate = useNavigate();

  const handleSave = () => {
    setLoading(true);
    const book = {
      title,
      author,
      publishedYear,
    };

    console.log("New book", book);
    axios
      .post("http://localhost:5000/books/", book)
      .then((res) => {
        setLoading(false);
        enqueueSnackbar("book created succesfully", {variant:"success"})
        navigate("/");

        console.log(res);
      })
      .catch((err) => {
        alert("Error occured check console");
        setLoading(false);
        enqueueSnackbar("Error", { variant: "error" });
        console.log(err);
      });
  };

  return (
    <div className="p-4">
      <Backbutton />
      <h1 className="text-3xl my-4">Create Book</h1>
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

        <button className="bg-sky-300 p-2 m-8" onClick={handleSave}>
          Save Book
        </button>
      </div>
    </div>
  );
};

export default CreateBooks;
