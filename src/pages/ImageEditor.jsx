import React, { useState, useEffect } from "react";
import Button from "../components/Button";

const ImageEditor = ({ generatedImage, updatedEditedImage }) => {
  const [editedImage, setEditedImage] = useState(generatedImage);
  const [isGrayscale, setIsGrayscale] = useState(false);
  const [blur, setBlur] = useState(0);
  const [sepia, setSepia] = useState(0);

  useEffect(() => {
    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    const img = new Image();
    img.src = generatedImage;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      context.filter = `grayscale(${
        isGrayscale ? 1 : 0
      }) blur(${blur}px) sepia(${sepia}%) `;
      context.drawImage(img, 0, 0, img.width, img.height);
      setEditedImage(canvas.toDataURL());
    };
  }, [generatedImage, isGrayscale, blur, sepia]);

  const handleSepiaChange = (event) => {
    setSepia(event.target.value);
  };

  const toggleGrayscale = () => {
    setIsGrayscale(!isGrayscale);
  };

  const handleBlurChange = (event) => {
    setBlur(event.target.value);
  };

  const resetImage = () => {
    setEditedImage(generatedImage);
    setIsGrayscale(false);
    setBlur(0);
    setSepia(0);
  };

  const handleSaveImage = () => {
    updatedEditedImage(editedImage);
  };

  return (
    <div>
      <h2 className="block text-lg font-medium text-gray-900 mb-2">
        Image Editor
      </h2>
      <div>
        <img
          src={editedImage}
          alt="Generated"
          style={{
            filter: `grayscale(${
              isGrayscale ? 1 : 0
            }) blur(${blur}px) sepia(${sepia}%)`,
            width: "480px",
          }}
        />
        <div className="my-2">
          <label htmlFor="blur">Blur:</label>
          <input
            type="range"
            id="blur"
            min="0"
            max="10"
            value={blur}
            className="slider"
            onChange={handleBlurChange}
          />
          <br />
          <label htmlFor="sepia">Sepia:</label>
          <input
            type="range"
            id="sepia"
            min="0"
            max="100"
            value={sepia}
            className="slider"
            onChange={handleSepiaChange}
          />
          <br />
          <div className="my-2">
            <Button type="button" onClick={toggleGrayscale}>
              {isGrayscale ? "Remove Grayscale" : "Apply Grayscale"}
            </Button>
            <Button type="button" className="mx-4" onClick={resetImage} white>
              Reset
            </Button>
            <Button type="button" onClick={handleSaveImage}>
              Save
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageEditor;
