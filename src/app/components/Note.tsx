"use client";

import React from 'react';

type NoteProps = {
  title: string;
  content: string;
  onRemove: () => void;
};

export default function Note({ title, content, onRemove }: NoteProps) {
  return (
    <div className="relative max-w-[600px] min-w-[275px] h-[200px] p-4 shadow-lg rounded-lg bg-gray-100">
      <button
        className="relative px-2 mb-2 rounded text-red-500 text-lg font-bold hover:text-red-300 bg-gray-700 hover:bg-gray-500"
        onClick={onRemove}
      >
        X
      </button>
      <div>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}