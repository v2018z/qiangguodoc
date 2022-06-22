import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { Hello } from './features/hello/Hello';
import { PostsList } from './features/posts/PostsList';
import { TailWind } from './features/tailwind/Tailwind';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hello />} />
        <Route path="/posts" element={<PostsList />} />
        <Route path="/tailwind" element={<TailWind />} />
      </Routes>
    </Router>
  );
}
