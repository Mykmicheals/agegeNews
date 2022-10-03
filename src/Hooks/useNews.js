import React, { useState, useCallback } from "react";

var date = new Date();
var current_date = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + (date.getDate() - 2);

function useNews() {
  const [newsData, setData] = useState([]);
  const [sucess, setSucess] = useState();
  const fetchNews = useCallback(async (tag, numberOfItems) => {
    const response = await fetch(
      `https://content.guardianapis.com/search?api-key=e34f93a2-6629-42cd-a6bd-2940b8cbfbb8&show-fields=thumbnail&q=${tag}&page-size=${numberOfItems}&show-blocks=all&from-date=${current_date}`
    );
    const data = await response.json();
    setData(data.response.results);
    setSucess(true);
  }, [newsData]);


  return [fetchNews, newsData, sucess];
}

export default useNews;
