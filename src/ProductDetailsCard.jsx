import React, { useState } from 'react';
import products from './products.json';

const ProductDetailsCard = () => {
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [quantity, setQuantity] = useState(0);

  const product = products[0]; // For now, using the first product

  const handleColorChange = (color) => {
    setSelectedColor(color);
  };

  const handleSizeChange = (size) => {
    setSelectedSize(size);
  };

  const handleQuantityChange = (value) => {
    setQuantity((prev) => Math.max(0, prev + value)); // Prevent negative quantity
  };

  return (
    <div className="max-w-4xl mx-auto p-4 border rounded-lg shadow-lg text-gray-800 flex flex-col">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Detail</h1>
      <div className="flex flex-col md:flex-row">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex justify-center items-center">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-96 object-cover rounded-md"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-1/2 pl-4">
          <h2 className="text-xl font-bold">{product.title}</h2>
          <div className="flex items-center my-2">
            <span className="text-gold mr-2">⭐⭐⭐⭐⭐</span>
            <span>({product.reviews} reviews)</span>
          </div>
          <div className="flex items-center my-2">
            <span className="line-through text-gray-500 mr-2">{product.oldPrice}</span>
            <span className="text-red-500">{product.price}</span>
          </div>
          <p className="my-2">{product.description}</p>
          <div className="flex items-center my-2 text-gray-500">
            <span className="mr-2">Type:</span>
            <span className="font-bold mr-4">{product.type}</span>
            <span className="mr-2">Model Number:</span>
            <span className="font-bold">{product.modelNumber}</span>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Watch Color:</h3>
            <div className="flex items-center my-2">
              <button
                className={`w-4 h-4 rounded-full bg-red-500 mr-2 ${selectedColor === 'red' ? 'ring-2 ring-red-900' : ''}`}
                onClick={() => handleColorChange('red')}
              />
              <button
                className={`w-4 h-4 rounded-full bg-green-500 mr-2 ${selectedColor === 'green' ? 'ring-2 ring-green-900' : ''}`}
                onClick={() => handleColorChange('green')}
              />
              <button
                className={`w-4 h-4 rounded-full bg-blue-500 mr-2 ${selectedColor === 'blue' ? 'ring-2 ring-blue-900' : ''}`}
                onClick={() => handleColorChange('blue')}
              />
            </div>
          </div>
          <div className="my-4">
            <h3 className="font-bold">Wrist Size:</h3>
            <div className="flex items-center my-2">
              <button className="border p-2 mr-2 text-sm text-gray-700 rounded-md font-semibold">
                S <span className="font-normal text-gray-500">$70</span>
              </button>
              <button className="border p-2 mr-2 text-sm text-gray-700 rounded-md font-semibold">
                M <span className="font-normal text-gray-500">$77</span>
              </button>
              <button className="border p-2 mr-2 text-sm text-gray-700 rounded-md font-semibold">
                L <span className="font-normal text-gray-500">$89</span>
              </button>
              <button className="border p-2 mr-2 text-sm text-gray-700 rounded-md font-semibold">
                XL <span className="font-normal text-gray-500">$99</span>
              </button>
            </div>
          </div>
          <div className="my-4 flex items-center">
            <h3 className="font-bold mr-4">Quantity:</h3>
            <div className="flex items-center">
              <button
                className="border p-2 text-sm rounded-md w-10 h-10"
                onClick={() => handleQuantityChange(-1)}
                disabled={quantity <= 0}
              >
                -
              </button>
              <span className="px-4 text-sm">{quantity}</span>
              <button
                className="border p-2 text-sm rounded-md w-10 h-10"
                onClick={() => handleQuantityChange(1)}
              >
                +
              </button>
              <button className="bg-blue-500 text-white px-4 py-2 rounded ml-4 text-sm w-25 h-10">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Checkout Button */}
      <div className="mt-6 flex justify-center">
        <button
          className={`px-6 py-2 rounded text-black-300 font-bold ${
            quantity === 0 ? 'bg-yellow-500' : 'bg-gold'
          }`}
        >
          Checkout: {quantity}
        </button>
      </div>
    </div>
  );
};

export default ProductDetailsCard;
