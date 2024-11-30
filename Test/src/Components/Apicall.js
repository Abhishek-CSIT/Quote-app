const URL = "https://dummyjson.com/quotes";

 const fetchQuote = async () => {
  const response = await fetch(URL);
  const data = await response.json();
  console.log(data); // Log the quotes
  return data.quotes;
};

// Call the function
 export default fetchQuote;
