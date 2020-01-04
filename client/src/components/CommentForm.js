import React, { useState, } from "react";
import { Form, } from 'semantic-ui-react';

const CommentForm = (props) => {
  const [body, setBody] = useState("")

    const handleBodyChange = (e) => {
      setBody(e.target.value);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      props.add(body)
      setBody('')
    }

  return (
    
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.TextArea
            label="Comment"
            placeholder="Comment"
            name="body"
            required
            onChange={handleBodyChange}
            value={body}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    
  )
}

export default CommentForm