import React from "react";
import styles from "./ProjectCardStyles.module.css";

import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCard({ src, link, h3, p, madeWith1, madeWith2 }) {
  return (
    <Card style={{ width: "15rem" }} className={styles.cardShape}>
      <Card.Img variant="top" src={src} />
      <Card.Body>
        <Card.Title className={styles.projectName}>{h3}</Card.Title>
        <Card.Text className={styles.projectDescription}>{p}</Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className={styles.madeWith}>{madeWith1}</ListGroup.Item>
        <ListGroup.Item className={styles.madeWith}>{madeWith2}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Button variant="outline-info" href={link} target="_blank">
          Visit
        </Button>
      </Card.Body>
    </Card>

    /** */
    // <div className={styles.card}>
    //   <a href={link} target="_blank">
    //     <img src={src} className="hover" alt="" />

    //     <h3>{h3}</h3>
    //     <p>{p}</p>
    //   </a>
    // </div>
  );
}

export default ProjectCard;
