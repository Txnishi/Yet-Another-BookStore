import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

const book = [
  {
  author: "Rebecca Yarros",
  title: "Iron Flame (The Empyrean, 2)",
  img: "./images/1_book.jpg",
  id: 1,
},
{
  author: "Laura Dave",
  title: "The Last Thing He Told Me: A Novel",
  img: "https://images-na.ssl-images-amazon.com/images/I/71LyuJP7yUL._AC_UL600_SR600,400_.jpg",
  id: 2,
}
]



const BookList = () => {
  return (
    <section className="bookList">
      {book.map((book) => {
        return <Book {...book} key={book.id}/>
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author } = props;
  console.log(props);
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <h4>{author}</h4>
    </article>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
