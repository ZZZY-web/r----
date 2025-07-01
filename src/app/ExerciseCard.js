import Link from 'next/link';

export default function ExerciseCard({ exercise }) {
  return (
    <Link href={`/exercises/exercise${exercise.id}`}>
      <a className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden">
        <div className="h-48 bg-gray-300 relative">
          <div className="bg-gray-200 border-2 border-dashed w-full h-full" />
          <div className="absolute top-4 right-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {exercise.date}
          </div>
        </div>
        
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-2">{exercise.title}</h3>
          <p className="text-gray-600 mb-4">{exercise.description}</p>
          
          <div className="flex flex-wrap gap-2">
            {exercise.tags.map((tag, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </a>
    </Link>
  );
}