import React from 'react';

export function PhotoGallery() {
  return (
    <div className="grid grid-cols-5">
      <div className="col-span-3 row-span-2">
        {' '}
        <img src="https://picsum.photos/800" alt="" />
      </div>
      <div className="col-span-2">
        {' '}
        <img src="https://picsum.photos/700" alt="" />
      </div>
      <div>
        {' '}
        <img src="https://picsum.photos/600" alt="" />
      </div>
      <div>
        {' '}
        <img src="https://picsum.photos/800" alt="" />
      </div>
    </div>
  );
}

export default PhotoGallery;
