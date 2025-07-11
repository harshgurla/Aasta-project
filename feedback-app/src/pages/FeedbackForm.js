import React from 'react';
import { useNavigate } from 'react-router-dom';

const FeedbackForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Feedback submitted!');
    navigate('/submitted');
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Feedback Form</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Enter your feedback"
          rows="5"
          cols="40"
          required
        ></textarea>
        <br /><br />
        <button type="submit">Send Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
