import { useEffect, useState } from "react";

import "./Universities.css";

const Universities = () => {
  const [table, setTable] = useState<{ [col: string]: string }[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchCSV = async () => {
      const response = await fetch(
        "https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv"
      );
      const csv = await response.text();
      const splitCSV = csv.split("\n");
      const columns = splitCSV[0].split(",");
      const data = splitCSV.slice(1).map((row) => {
        const splitRow = row.split(",");
        return {
          [columns[0]]: splitRow[0],
          [columns[1]]: splitRow[1],
          [columns[2]]: splitRow[2],
          [columns[3]]: splitRow[3],
          [columns[4]]: splitRow[4],
        };
      });
      setTable(data);
    };
    fetchCSV();
  }, []);

  if (!table?.length) {
    return <div>Loading...</div>;
  }

  const getTable = () => {
    // TODO, debounce search
    let filteredTable = table;
    if (searchTerm) {
      filteredTable = table.filter((row) => {
        if (row.INSTNM.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        }
        return false;
      });
    }
    return filteredTable
      .sort((a, b) => {
        if (a.STABBR < b.STABBR) {
          return -1;
        }
        if (a.STABBR > b.STABBR) {
          return 1;
        }
        return 0;
      })
      .map((uni) => {
        return (
          <div
            key={uni.UNITID}
            className="University"
            onClick={() => {
              window.open("https://" + uni.INSTURL);
            }}
          >
            <h2>
              {uni.CITY} • {uni.STABBR}
            </h2>
            <h1>{uni.INSTNM}</h1>
            <span className="University--Link">{uni.INSTURL}</span>
          </div>
        );
      });
  };

  return (
    <div className="Universities">
      <input
        className="Universities--Search"
        placeholder="Search.."
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <div className="Universities--Table">{getTable()}</div>
    </div>
  );
};

export default Universities;
