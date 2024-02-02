import React from 'react';

interface IImage extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
}

const Image: React.FC<IImage> = ({ src, alt, ...props }: IImage) => {
  return (
    <img
      onError={({ currentTarget }) => {
        currentTarget.onerror = null; // prevents looping
        currentTarget.src = '/assets/images/dummy-image-square.jpg';
      }}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Image;
