import React from 'react';

const Card = () => {
  const studentData = [
    { id: 1, name: 'Asharib Ali', rollno: '005683', age: '21', time: 'Monday 2 to 5', Image: '/Asharib.jpeg' },
    { id: 2, name: 'Ameen Alam', rollno: '005685', age: '35', time: 'Tuesday 2 to 5', Image: '/Ameen Alam.jpeg' },
    { id: 3, name: 'Hina Naseer', rollno: '005689', age: '32', time: 'Sunday 2 to 5', Image: '/Hina Naseer.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-20">
      <h1 className="text-3xl font-bold text-center mb-6">Student Cards</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {studentData.map((studentCard) => (
          <div
            key={studentCard.id}
            className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center text-center"
          >
            <img
              src={studentCard.Image}
              alt={studentCard.name}
              className="w-40 h-40 object-cover rounded-full mb-6"
            />
            <h3 className="text-xl font-semibold text-gray-800">{studentCard.name}</h3>
            <div className="text-gray-600">Roll No: {studentCard.rollno}</div>
            <div className="text-gray-600">Time: {studentCard.time}</div>
            <div className="text-gray-600">Age: {studentCard.age}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
