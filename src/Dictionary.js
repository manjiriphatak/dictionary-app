import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState("");
  const [photos, setPhotos] = useState(null);
  const [loaded, setLoaded] = useState(false);

  function handleKeyword(event) {
    setKeyword(event.target.value);
  }

  function handleSearch() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(showDictionary);

    let pexelsApiKey =
      "563492ad6f91700001000001631914ed1e554c589f0c791e7e201cb3";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=9`;
    axios
      .get(pexelsApiUrl, {
        headers: {
          authorization: pexelsApiKey,
        },
      })
      .then(showPhotos);
  }
  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }
  function showDictionary(response) {
    setResults(response.data[0]);
  }
  function load() {
    setLoaded(true);
    handleSearch();
  }

  function showPhotos(response) {
    setPhotos(response.data.photos);
  }
  if (loaded) {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input
            className="form"
            type="search"
            autoFocus="on"
            placeholder="Type the word you are looking for..."
            onChange={handleKeyword}
          />
        </form>
        <Results results={results} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
  }
}
