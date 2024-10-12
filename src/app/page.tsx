import React from 'react';
import StudentCard from './components/Student Card';
import { time } from 'console';

const students = [
  {
    name: 'Abdulrehman Shaikh',
    description: 'Student of GIAIC.',
    image: '/My Photo.jpg',
    rollNo: '156331',
    city: 'Karachi',
    batch: '1',
    day: 'Monday',
    time: '2-5',
  },
  {
    name: 'Asharib Ali',
    description: 'Cloud Native Applied Generative AI (GenEng).',
    image: '/Asharib.jpeg',
    rollNo: '134742',
    city: 'Karachi',
    batch: '1',
    day: 'Tuesday',
    time: '7-10',
  },
  {
    name: 'Hina Naseer',
    description: 'DevOps Engineer.',
    image: '/Hina.jpeg',
    rollNo: '456733',
    city: 'Karachi',
    batch: '1',
    day: 'Wednesday',
    time: '7-10',
  },
];

const HomePage: React.FC = () => {
  return (
    <div className="cards-container">
      {students.map((student, index) => (
        <StudentCard
          key={index}
          name={student.name}
          description={student.description}
          image={student.image}
          rollNo={student.rollNo}
          city={student.city}
          batch={student.batch}
          day={student.day}
          time={student.time}
        />
      ))}
    </div>
  );
};

export default HomePage;
