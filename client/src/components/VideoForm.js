import React, { useState, } from "react";
import axios from "axios";
import { Form, } from "semantic-ui-react";

const VideoForm = (props) => {
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
            label="Title"
            placeholder="Title"
            name="title"
            required
            onChange={handleTitleChange}
            value={title}
          />
          <Form.Input
            label="Duration"
            placeholder="Duration"
            name="duration"
            required
            onChange={handleDurationChange}
            value={duration}
            />
            </Form.Group>
            <Form.Group widths="equal">
          <Form.Input
            label="Genre"
            placeholder="Genre"
            name="genre"
            required
            onChange={handleGenreChange}
            value={genre}
          />
          <Form.Input
            label="Trailer"
            placeholder="Trailer"
            name="trailer"
            required
            onChange={handleTrailerChange}
            value={trailer}
            />
            </Form.Group>
            <Form.Group>
            <Form.TextArea
            label="Description"
            placeholder="Description"
            name="description"
            required
            onChange={handleDescriptionChange}
            value={description}
            />
            </Form.Group>
        <Form.Button>Add Video</Form.Button>
      </Form>
    </>
  )
}

export default VideoForm;
