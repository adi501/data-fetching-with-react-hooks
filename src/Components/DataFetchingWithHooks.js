import React, { useState, useEffect } from "react";

import axios from "axios";

function DataFetchingWithHooks() {
  const [data, setData] = useState({ hits: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://hn.algolia.com/api/v1/search?query=redux"
      );

      setData(result.data);
    };

    fetchData();
  }, []);

  return (
    <div>
      <center>
        <h5>Data Fetching with React Hooks</h5>
      </center>
      <ul>
        {data.hits.map(item => (
          <li key={item.objectID}>
            <a href={item.url}>{item.title}</a>
          </li>
        ))}
      </ul>
      Ref: https://www.robinwieruch.de/react-hooks-fetch-data
    </div>
  );
}

export default DataFetchingWithHooks;
