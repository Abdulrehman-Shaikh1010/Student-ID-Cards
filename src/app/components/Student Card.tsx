import { time } from 'console';
import React from 'react';

interface StudentCardProps {
  name: string;
  image: string;
  rollNo: string;
  city: string;
  batch: string;
  day: string;
  time: string;
  description: string;
}

const StudentCard: React.FC<StudentCardProps> = ({ 
  name, 
  description, 
  image, 
  rollNo, 
  city, 
  batch, 
  day,
  time,

}) => {
  return (
    <div className="student-card">
      <img src={image} alt={`${name}'s photo`} className="student-image" />
      <h2>{name}</h2>
      <p>{description}</p>
      <p><strong>Roll No:</strong> {rollNo}</p>
      <p><strong>City:</strong> {city}</p>
      <p><strong>Batch:</strong> {batch}</p>
      <p><strong>Day:</strong> {day}</p>
      <p><strong>Time:</strong> {time}</p>
    </div>
  );
};

export default StudentCard;
