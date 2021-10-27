import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";

export default function Dictionart() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState("");

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSearch(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictionary);
  }
  function showDictionary(response) {
    console.log(response.data[0]);
    setResults(response.data[0]);
  }

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          className="form"
          type="search"
          autoFocus="on"
          placeholder="Type the word you are looking for..."
          onChange={handleKeyword}
        />
        <input type="submit" />
      </form>
      <Results results={results} />
    </div>
  );
}
