import React, { useState } from 'react';

function App() {
  const [getName, setGetName] = useState('subha');
  const [getResponse, setGetResponse] = useState('');
  const [postMessage, setPostMessage] = useState('backend is working');
  const [postResponse, setPostResponse] = useState('');

  const backendUrl = 'https://ALB-1471335983.ap-south-1.elb.amazonaws.com'; // Make sure this uses http:// or https://

  const handleGet = async () => {
    try {
      const response = await fetch(`${backendUrl}/get?name=${getName}`);
      const data = await response.json();
      setGetResponse(data.message);
    } catch (error) {
      setGetResponse('Error fetching GET data');
    }
  };

  const handlePost = async () => {
    try {
      const response = await fetch(`${backendUrl}/submit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: postMessage }),
      });
      const data = await response.json();
      setPostResponse(data.reply);
    } catch (error) {
      setPostResponse('Error sending POST request');
    }
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial' }}>
      <h2>🔍 GET Method (Query by Name)</h2>
      <label htmlFor="getNameInput">Enter your name:</label>
      <input
        id="getNameInput"
        type="text"
        placeholder="Enter your name"
        value={getName}
        onChange={(e) => setGetName(e.target.value)}
      />
      <button onClick={handleGet}>Fetch Info</button>
      <p><strong>Response:</strong> {getResponse}</p>

      <hr />

      <h2>📩 POST Method (Send Message)</h2>
      <label htmlFor="postMessageInput">Enter a message:</label>
      <input
        id="postMessageInput"
        type="text"
        placeholder="Enter a message"
        value={postMessage}
        onChange={(e) => setPostMessage(e.target.value)}
      />
      <button onClick={handlePost}>Send</button>
      <p><strong>Response:</strong> {postResponse}</p>
    </div>
  );
}

export default App;
