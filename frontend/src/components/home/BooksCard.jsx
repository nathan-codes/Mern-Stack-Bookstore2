import BookSIngleCard from "./BookSIngleCard";

const BooksCard = ({ books }) => {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
      {books.map((book, index) => {
        return <BookSIngleCard key={index} book={book} />;
      })}
    </div>
  );
};

export default BooksCard;
