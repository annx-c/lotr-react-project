import React, { useState } from "react";
import Options from "./Options";
import styles from "./dashboard.module.css";
import useFetchData from "../hooks/useFetchData";
import Characters from "./info/Characters";
import Movies from "./info/Movies";
import Books from "./info/Books";
import Loader from "./Loader";

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);

  function onClickHander(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  const dataRender = {
    character: <Characters data={data} />,
    book: <Books data={data} />,
    movie: <Movies data={data} />,
  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1 className={styles.title}>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHander} />
        {loading && <Loader />}
        
        {error && (
          <div className={styles.errorMessage}>
            Failed to load data: {error}
          </div>
        )}

        {data && !loading && dataRender[selection]}
      </div>
    </div>
  );
}
