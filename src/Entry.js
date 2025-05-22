import React, { useState } from 'react';
import './Entry.css';
const Shutup = () => {
  const [message, setMessage] = useState('');
  const [isAgreed, setIsAgreed] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [submissionStatus, setSubmissionStatus] = useState('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e) => {
  e.preventDefault();
  if (!isAgreed) {
    setErrorMessage('DO YOU HATE ME ANSWER THE QUESTION');
    return;
  }

  setSubmissionStatus('submitting');
  setErrorMessage('');

  try {
    const response = await fetch('https://heartbe.vercel.app/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message, isAgreed, selectedOption })
    });

    if (!response.ok) throw new Error('Failed to submit');

    setSubmissionStatus('success');
    setMessage('');
    setIsAgreed('');
    setSelectedOption('');
  } catch (error) {
    setSubmissionStatus('idle');
    setErrorMessage('Submission failed. Try again.');
  }
};



  return (
    <form onSubmit={handleSubmit}>
      <div style={{
        minHeight: '100vh',
        
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '3rem 1rem'
      }}>
        <div style={{
          maxWidth: '500px',
          width: '100%',
          background: 'rgb(142, 42, 72)', 
          borderRadius: '1rem',
          boxShadow: '0 0 20px rgba(0,0,0,0.2)',
          padding: '2rem',
          color: 'white'
        }}>

          
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="message" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem'}}>
              <h4>♥️♥️♥️</h4>
              <h2>write something to me</h2>
            </label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.currentTarget.value)}
              placeholder="type here..."
              style={{
                width: '100%',
                padding: '0.75rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                resize: 'vertical',
                color: '#111',
              }}
            />
          </div>

          
          <div style={{ marginBottom: '1rem' }}>
            <label style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
              <h3>do you still love me? 🥺</h3>
            </label>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="agree"
                  value="i love you"
                  checked={isAgreed === 'i love you'}
                  onChange={(e) => setIsAgreed(e.currentTarget.value)}
                  style={{ marginRight: '0.5rem' , cursor: 'pointer'}}
                />
                yea maybe
              </label>
              <label style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="radio"
                  name="agree"
                  value="no i dont"
                  checked={isAgreed === 'no i dont'}
                  onChange={(e) => setIsAgreed(e.currentTarget.value)}
                  style={{ marginRight: '0.5rem' , cursor: 'pointer'}}
                />
                NO I HATE U
              </label>
            </div>
          </div>

          
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="option" style={{ display: 'block', fontWeight: '600', marginBottom: '0.5rem' }}>
              <h3>are you okay, love</h3>
            </label>
            <select
              id="option"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.currentTarget.value)}
              style={{
                width: '100%',
                padding: '0.5rem',
                border: '1px solid #ccc',
                borderRadius: '6px',
                color: 'white',
                backgroundColor: 'rgb(100, 8, 54)',
                cursor:'pointer'
              }}
            >
              <option value="um ok">um</option>
              <option value="im okay">yesss</option>
              <option value="idk">idk</option>
              <option value="no i miss you">no i miss you</option>
            </select>
          </div>

          
          <div style={{ marginTop: '1rem' }}>
            <button
              type="submit"
              disabled={submissionStatus === 'submitting'}
              style={{
                width: '50%',
                padding: '0.75rem',
                borderRadius: '30px',
                backgroundColor: submissionStatus === 'submitting' ? 'black' : 'pink',
                color: 'rgb(73, 7, 39)',
                fontWeight: '600',
                border: 'none',
                cursor: submissionStatus === 'submitting' ? 'not-allowed' : 'pointer'
              }}
            >
              {submissionStatus === 'submitting' ? 'Submitting...' : 'SEND HER!!'}
            </button>
          </div>

          
          {errorMessage && (
            <div style={{
              marginTop: '1rem',
              backgroundColor: 'pink',
              color: '#b91c1c',
              padding: '0.75rem',
              borderRadius: '6px',
              border: '1px solid #fca5a5'
            }}>
              <strong>error:</strong> {errorMessage}
            </div>
          )}

          
          {submissionStatus === 'success' && (
            <div style={{
              marginTop: '1rem',
              color: 'lightpink',
              textAlign: 'center',
              fontWeight: '600'
            }}>
              thank you baby, i love you 
            </div>
          )}
        </div>
      </div>
    </form>
  );
};

function Entry() {
  return (
    <div className="Entry">
      <Shutup />
    </div>
  );
}

export default Entry;
