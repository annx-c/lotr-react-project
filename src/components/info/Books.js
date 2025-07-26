import React from "react";
import styles from "./infoDashboard.module.css";


export default function Books(props) {
  const{data} = props;
  return(
   <div className={styles.infoDashboard}>
    {data.docs.map((book, index) => {
      return (
        <div key={index}>
          <h1>{index + 1}: {book.name}</h1>
        </div>
      );
    })} 
   </div>
  );
}