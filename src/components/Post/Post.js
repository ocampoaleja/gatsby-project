import React from "react"
import { Card, Button } from "react-bootstrap"

const Post = ({ title, excerpt, image }) => (
  <div className="p-3">
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{excerpt}</Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  </div>
)

export default Post
