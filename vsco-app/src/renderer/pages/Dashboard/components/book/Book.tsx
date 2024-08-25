import React from 'react';

const colorOptions = {
  purple: '#6f46a3',
  red: 'red',
};

const BookStyle: { [key: string]: React.CSSProperties } = {
  container: {
    transform: 'scale(0.8)',
    position: 'relative',
    width: '10rem',
    height: '15rem',
    backgroundColor: colorOptions.red,
    backgroundImage:
      'url(https://m.media-amazon.com/images/I/71Fbh0aeLDL._SL1500_.jpg)',
    backgroundSize: 'cover',
    borderRadius: '0.2rem',
    overflow: 'hidden',
    boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
  },
  leftCorner: {
    width: '0.1rem',
    height: '100%',
    background: '#ffffffa1',
    opacity: '0.1',
    borderRight: '0.3rem solid #000000',
    borderLeft: '0.2rem solid #000000',
  },
  content: {
    position: 'relative',
    zIndex: 2,
    padding: '1rem',
    height: '100%',
  },
};

export default function Book() {
  return (
    <div style={BookStyle.container}>
      <div style={BookStyle.leftCorner} />
      <div style={BookStyle.content}>
        <h2>Book Title</h2>
        <p>Author Name</p>
      </div>
    </div>
  );
}
