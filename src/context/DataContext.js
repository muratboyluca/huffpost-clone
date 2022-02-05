import { createContext, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import api from "../api/entries";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [entries, setEntries] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const fetchEntries = async () => {
      try {
        const response = await api.get("/entries");
        setEntries(response.data);
      } catch (err) {
        if (err.response) {
          //Not in the 200 response range
          console.log(err.response.data);
          console.log(err.response.status);
          console.log(err.response.headers);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchEntries();
  }, []);

  return (
    <DataContext.Provider
      value={{
        entries,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export default DataContext;
