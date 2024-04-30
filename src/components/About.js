import React from 'react';
import notesImage from './notesimage.jpeg';

const About = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>About Us</h1>
      <div style={styles.imageContainer}>
        <img src={notesImage} alt="Notes of the user" style={styles.image} />
      </div>
      <p style={styles.paragraph}>
        In the intricate dance of life, notes emerge as the silent companions, orchestrating our journey through the symphony of existence. They are the whispered echoes of our thoughts, meticulously woven into the fabric of time. Each note, a poignant reflection of our innermost desires, hopes, and dreams, resonating with the melody of our souls. Like delicate petals on a vibrant tapestry, they capture fleeting moments, immortalizing emotions in their silent embrace. Notes are the ethereal bridges that connect the realms of imagination and reality, guiding us through the labyrinth of experience with grace and poise. Within their tender embrace lies the essence of our stories, waiting to be unfurled with each stroke of the pen, each stroke of the keyboard. They are the silent witnesses to our triumphs and tribulations, the custodians of our deepest secrets and aspirations. In the delicate dance of pen and paper, notes become the timeless melodies that serenade the heart, painting the canvas of our lives with hues of inspiration and wonder.

      </p>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    color: '#333',
    marginBottom: '20px',
  },
  imageContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '300px',
    borderRadius: '10px',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
  },
  paragraph: {
    fontSize: '1.2rem',
    lineHeight: '1.6',
    color: '#666',
  },
};

export default About;
