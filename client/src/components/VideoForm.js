import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const FriendsForm = (props) => {
  const [title, setTitle] = useState("");
  const [duration, setDuration] = useState("");
  const [description, setDescription] = useState("");
  const [genre, setGenre] = useState("")
  const [trailer, setTrailer] = useState("")


  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  }

  const handleDurationChange = (e) => {
    setDuration(e.target.value);
  }

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleGenreChange = (e) => {
    setGenre(e.target.value);
  }

  const handleTrailerChange = (e) => {
    setTrailer(e.target.value);
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/videos", {  title, duration, genre, description, trailer, })
      .then( res => {
        props.add(res.data);
      })
  }




return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            onChange={handleNameChange}
            value={name}
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            name="age"
            required
            onChange={handleAgeChange}
            value={age}
            />
            </Form.Group>
            <Form.Group widths="equal">
          <Form.Input
            label="Name"
            placeholder="Name"
            name="name"
            required
            onChange={handleNameChange}
            value={name}
          />
          <Form.Input
            label="Age"
            placeholder="Age"
            name="age"
            required
            onChange={handleAgeChange}
            value={age}
            />
            </Form.Group>
            <Form.Group>
            <Form.TextArea
            label="Age"
            placeholder="Age"
            name="age"
            required
            onChange={handleAgeChange}
            value={age}
            />
            </Form.Group>
        <Form.Button>Add Friend</Form.Button>
      </Form>
    </>
  )
}

export default FriendsForm;
