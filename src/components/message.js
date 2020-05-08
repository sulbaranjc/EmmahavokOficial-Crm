import React from "react";
import { Card, Button } from "react-bootstrap";

import axios from "axios";

import "../styles/message.css";
export default (props) => {
  function delMenssage() {
    axios({
      method: "PUT",
      url:
        "https://emmahavokoficial-client-api.herokuapp.com/api/client" +
        "/" +
        props.keyMessage,
    }).then((res) => {
      props.setLoading(true);
    });
  }

  return (
    <div bg="dark" className="container card-message mb-3 content">
      <Card className="container text-light bg-dark text-left">
        <Card.Header>{props.email}</Card.Header>
        <Card.Body>
          <Card.Title className="text-left">
            {props.first_name} {props.last_name}
            <br />
            {props.phone}
          </Card.Title>
          <Card.Text className="text-justify">{props.question}.</Card.Text>
          <Button
            id={props.iMessage}
            size="xl"
            variant="light"
            className="btn btn-primary btnCheckIt"
            onClick={delMenssage}
          >
            X
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};
