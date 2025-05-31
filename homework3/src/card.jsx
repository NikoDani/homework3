
import React from 'react';

export default function Card({ title = "Card title", content = "Card content", img = "", bgColor = "#f9f9f9" }) {
  return (
    <div className='card' style={{ backgroundColor: bgColor }}>
      <h2>{title}</h2>
      <p>{content}</p>
      <img src={img} alt={title} width={150} height={150} />
    </div>
  );
}
