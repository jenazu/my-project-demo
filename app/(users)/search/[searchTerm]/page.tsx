import React from "react";
import { SearchResult } from "../../../../typings";

interface SearchProps {
  params: {
    searchTerm: string;
  };
}

const search = async (searchTerm: string) => {
  const res = await fetch(
    `https://serpapi.com/search.json?q=${searchTerm}&api_key=${process.env.API_KEY}`
  );
  
  const data: SearchResult = await res.json()
  return data
};

async function SearchResults({ params: { searchTerm } }: SearchProps) {
  const searchResults = await search(searchTerm);

  return (
  <div>
    <p className="text-gray-500 text-sm">You searched for: {searchTerm}</p>
    <ol className="space-y-5 p-5">
    {searchResults.organic_results.map((result) => (
        <li key={result.positiion} className='list-decimal'>
            <p className="font-bold">{result.title}</p>
            <p>{result.snippet}</p>
        </li>
    ))}
    </ol>
  </div>
      );
}

export default SearchResults;
