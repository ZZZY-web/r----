import React from 'react';

const ExerciseCard = ({ exercise }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-4">
      <h2 className="text-xl font-semibold mb-2">{exercise.title}</h2>
      <p className="text-gray-600 mb-4">{exercise.description}</p>
      {exercise.imageUrl && (
        <img src={exercise.imageUrl} alt={exercise.title} className="w-full h-48 object-cover rounded-md mb-4" />
      )}
      {exercise.link && (
        <a href={exercise.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
          View Project
        </a>
      )}
      {exercise.tags && exercise.tags.length > 0 && (
        <div className="mt-2">
          {exercise.tags.map((tag, index) => (
            <span key={index} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExerciseCard;