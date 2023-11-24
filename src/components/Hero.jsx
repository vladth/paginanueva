import React, { useState } from 'react';
import Img1 from '../assets/tractor.jpg'
import { persons } from './Slider';

const Hero = () => {
    const [activeItem, setActiveItem] = useState(3);
    return (
        <div className="max-w-sm w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-2">
        <div className="bg-white rounded shadow-md">
          <img
            src={Img1} // Reemplaza con la URL de tu imagen
            alt="Imagen de la tarjeta"
            className="w-full h-auto"
          />
          <div className="p-4">
            <h2 className="text-xl font-semibold mb-2">Título de la Tarjeta</h2>
            <p className="text-gray-600">Descripción de la tarjeta.</p>
          </div>
        </div>
      </div>
    );
};

export default Hero;