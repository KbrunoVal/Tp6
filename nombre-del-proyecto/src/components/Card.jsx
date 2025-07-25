import img from '../assets/Gustavo-Cerati.jpg';

function Card() {
  return (
    <div className="w-100 bg-white rounded-lg shadow-lg overflow-hidden">
      <img
        className="w-full h-100 object-cover"
        src={img}
        alt="Foto de perfil"
      />
      <div className="p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-1">Gustavo Cerati</h2>
        <h3 className="text-sm text-indigo-600 font-medium mb-3">Genio del siglo XXI</h3>
        <p className="text-gray-600 text-sm">
          Gustavo Cerati fue un influyente músico, compositor y productor argentino, conocido por su trabajo como líder de la banda Soda Stereo y su exitosa carrera en solitario. Cerati dejó una huella imborrable en la industria musical antes de su fallecimiento en 2014.
        </p>
      </div>
    </div>
  );
}

export default Card;
