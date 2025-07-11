import React from 'react';
import { Routes, Route } from 'react-router-dom';
import FeedbackForm from './pages/FeedbackForm';
import Confirmation from './pages/Confirmation';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FeedbackForm />} />
      <Route path="/submitted" element={<Confirmation />} />
    </Routes>
  );
}

export default App;
