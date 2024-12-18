export default function PropertyCard({ image, location, properties }) {
    return (
      <div className="group relative w-full max-w-sm mx-auto bg-white shadow-lg hover:shadow-2xl transition duration-500 rounded-lg overflow-hidden">
        <div className="relative w-full h-64 bg-gray-300">
          <img src={image} alt={location} className="object-cover w-full h-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50 group-hover:opacity-60 transition-opacity"></div>
        </div>
        <div className="absolute bottom-4 left-4 text-white z-10">
          <h2 className="text-lg font-bold group-hover:text-indigo-400 transition duration-300">{location}</h2>
          <p className="text-sm">{properties} Properties</p>
        </div>
        <div className="absolute bottom-4 right-4 z-10">
          <button className="bg-white text-black px-4 py-2 text-sm rounded-lg shadow-lg hover:bg-indigo-600 hover:text-white transition duration-300">More Details</button>
        </div>
      </div>
    );
  }
  