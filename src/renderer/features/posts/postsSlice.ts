import { createSlice, PayloadAction, Dispatch } from '@reduxjs/toolkit';

export interface PostState {
  id: string;
  title: string;
  content: string;
}

const initialState = [
  { id: '1', title: 'First Post!', content: 'Hello!' },
  { id: '2', title: 'Second Post', content: 'More text' },
] as PostState[];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    postAdded(state: PostState[], action: PayloadAction<PostState>) {
      state.push(action.payload);
    },
    incrementByAmount(state: PostState[], action: PayloadAction<PostState>) {
      state.push(action.payload);
    },
  },
});

const post = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      setTimeout(() => {
        resolve(null);
      });
    }, 3000);
  });
};

export const AsyncPostAdded =
  (payload: PostState) => async (dispatch: Dispatch) => {
    await post();
    dispatch(postsSlice.actions.incrementByAmount(payload));
  };

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
