import React from "react";
import BookForm from "./BookForm";
import { useNavigate } from "react-router-dom";

const AddBook = ({ books, setBooks }) => {
  const navigate = useNavigate();
  const handleOnSubmit = (book) => {
    console.log("Newly Added Book::", book);
    setBooks([book, ...books]);
    navigate("/");
  };

  return (
    <React.Fragment>
      <BookForm handleOnSubmit={handleOnSubmit} />
    </React.Fragment>
  );
};

export default AddBook;
