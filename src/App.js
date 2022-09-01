import "./styles.css";
import React from "react";

import { useState } from "react";

const bookDB = {
  story: [
    {
      name: "A Little Book Of Happiness ",
      rating: "4.5/5"
    },
    {
      name: "Everything Happens for a Reason",
      rating: "4/5"
    },
    {
      name: "A Million Thoughts",
      rating: "3.5/5"
    }
  ],

  selfhelp: [
    {
      name: "The Secrets of Productive People",
      rating: "5/5"
    },
    {
      name: "Secrets of success at Work",
      rating: "4.5/5"
    },
    {
      name: "The Secrets of Influential People",
      rating: "4/5"
    }
  ],
  business: [
    {
      name: "Blue Ocean Shift",
      rating: "3.5/5"
    },
    {
      name: "Winning in the Digital Age",
      rating: "4.5/5"
    },
    {
      name: "The Visual MBA",
      rating: "5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("business");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> Good Books </h1>
      <p style={{ fontSize: "medium" }}>
        {" "}
        Checkout my favorite books. Select a genre to get started{" "}
      </p>

      <div>
        {Object.keys(bookDB).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              color: "#ffffff",
              background: "#3A3B3C",
              fontSize: "18px",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {bookDB[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #000",
                width: "70%",
                margin: "1rem auto",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
