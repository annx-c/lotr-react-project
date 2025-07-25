import React, { useState } from "react";
import Options from "./Options";
import "./dashboard_module.css";
import useFetchData from "../hooks/useFetchData";

export default function Dashboard() {
  const [selection, setSelection] = useState(null);
  const { data, loading, error } = useFetchData(selection);

  function onClickHander(clickedButton) {
    return () => {
      setSelection(clickedButton);
    };
  }

  return (
    <div className="dashboard">
      <div>
        <h1>LOTR INFO</h1>
        <Options selection={selection} setSelection={onClickHander} />
      </div>
    </div>
  );
}
