import React, { useState } from "react";
import Options from "./Options";
import styles from "./dashboard.module.css";
import useFetchData from "../hooks/useFetchData";
import Characters from "./Characters";
import Movies from "./Movies";
import Books from "./Books";
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
    'character': <Characters />,
    'book': <Books />,
    'movie': <Movies />,

  };

  return (
    <div className={styles.dashboard}>
      <div className={styles.layout}>
        <h1>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHander} />
        {loading && (
          <Loader />
        )}

        {(data && !loading) && (
          dataRender[selection]
        ) }
      </div>
    </div>
  );
}
