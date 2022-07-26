import React from 'react'
import {Formik, Form, Field, ErrorMessage } from 'formik';

function CreatePost() {
  return (
    <div className="createPostPage">
        <Formik >
            <Form className='formContainer'>
                <label>Title:</label>
                <Field 
                    id="inputCreatePost" 
                    name="title" 
                    placeholder="(Ex. Title...)" />
                <label>Post:</label>
                <Field 
                    id="inputCreatePost" 
                    name="postText" 
                    placeholder="(Ex. Post...)" />
                <label>Title:</label>
                <Field 
                    id="inputCreatePost" 
                    name="userName" 
                    placeholder="(Ex. John...)" />
                <button type="submit">submit</button>
            </Form>
        </Formik>
    </div>
  );
}

export default CreatePost;