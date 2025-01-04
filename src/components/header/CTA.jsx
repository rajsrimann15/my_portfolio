import React from 'react';
const CV = 'https://drive.google.com/file/d/17rGsfaJP1mhjKcUJMcX_lCJh2rkrreVT/view?usp=drive_link';

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV}  target="_blank" rel="noopener noreferrer" className="btn">
        Resume
      </a>
      <a href="#contact" className="btn btn-primary">
        Let's talk
      </a>
    </div>
  );
};

export default CTA;
