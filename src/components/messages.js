import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios({
      method: "GET",
      url: "https://emmahavokoficial-client-api.herokuapp.com/api/client",
    }).then((res) => {
      setQuestions(res.data);
      debugger;
      setLoading(false);
    });
  }, [setQuestions]);
  return (
    <div>
      <p>Listado de Mensages</p>
      {loading && <p> It's loading....!</p>}
      {!loading && (
        <>
          {questions.map((question, i) => (
            <div key={i}>{question.first_name}</div>
          ))}
        </>
      )}
    </div>
  );
};
