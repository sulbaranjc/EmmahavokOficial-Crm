import React, { useState, useEffect } from "react";
import axios from "axios";

import Message from "./message";

export default () => {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      axios({
        method: "GET",
        url: "https://emmahavokoficial-client-api.herokuapp.com/api/client",
      }).then((res) => {
        setQuestions(res.data);
        setLoading(false);
      });
    }
  }, [loading]);

  return (
    <div>
      <p>Listado de Mensages</p>
      {loading && <p> It's loading....!</p>}
      {!loading && (
        <>
          {questions.map((question, i) => (
            <Message
              key={i}
              keyMessage={question._id}
              first_name={question.first_name}
              last_name={question.last_name}
              phone={question.phone}
              email={question.email}
              question={question.question}
              updatedAt={question.updatedAt}
              createdAt={question.createdAt}
              check_it={question.check_it}
              setLoading={setLoading}
            />
          ))}
        </>
      )}
    </div>
  );
};
