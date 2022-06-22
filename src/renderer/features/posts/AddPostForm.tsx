import React, { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { postAdded, AsyncPostAdded } from './postsSlice';
import { useAppDispatch } from '../../hooks';

export const AddPostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const dispatch = useAppDispatch();

  const onTitleChanged = (e: React.FormEvent<HTMLInputElement>) =>
    setTitle(e.currentTarget.value);
  const onContentChanged = (e: React.FormEvent<HTMLTextAreaElement>) =>
    setContent(e.currentTarget.value);

  const onSavePostClicked = () => {
    if (title && content) {
      dispatch(
        postAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle('');
      setContent('');
    }
  };

  const onAsyncSavePostClicked = () => {
    if (title && content) {
      dispatch(
        AsyncPostAdded({
          id: nanoid(),
          title,
          content,
        })
      );

      setTitle('');
      setContent('');
    }
  };

  return (
    <section>
      <h2>Add a New Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          className="text-black"
          id="postTitle"
          name="postTitle"
          value={title}
          onChange={onTitleChanged}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          className="text-black"
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChanged}
        />
        <button type="button" className="btn" onClick={onSavePostClicked}>
          Save Post
        </button>
        <button type="button" className="btn" onClick={onAsyncSavePostClicked}>
          Async Save Post
        </button>
      </form>
    </section>
  );
};
