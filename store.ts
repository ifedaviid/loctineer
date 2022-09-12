import { configureStore } from '@reduxjs/toolkit';
import bookingReducer from './actions/booking';

export const store = configureStore({
  reducer: {
    booking: bookingReducer,
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch