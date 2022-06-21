import React from 'react';
export interface CommerceMediaProps {
  title: string;
  imageUrl: string;
}

export function CommerceMedia(props: CommerceMediaProps) {
  const { title, imageUrl } = props;
  return (
    <div className="flex flex-col justify-center items-center mx-2 ">
      <div>
        <img src={imageUrl} className="w-12 h-12 rounded-full" alt="" />
      </div>
      <h1 className="text-main font-bold mt-2">{title}</h1>
    </div>
  );
}

export default CommerceMedia;
