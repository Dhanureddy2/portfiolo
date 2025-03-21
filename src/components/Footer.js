import React from 'react';

function Footer() {
  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Dhanunjay Reddy. All Rights Reserved.</p>
      <p>
        <a href="https://www.linkedin.com/in/gurram-dhanunjaya-reddy-127987236/" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
        <a href="https://github.com/Dhanureddy2" target="_blank" rel="noopener noreferrer"> GitHub</a>
      </p>
    </footer>
  );
}

export default Footer;
