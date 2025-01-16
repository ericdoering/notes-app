"use client";

import React from 'react';

type NoteProps = {
  title: string;
  content: string;
};

export default function Note({ title, content }: NoteProps) {
  return (
    <div className="max-w-[600px] min-w-[275px] h-[200px] p-4 shadow-lg rounded-lg bg-gray-100">
      <div>
        <h5 className="text-xl font-semibold mb-2">{title}</h5>
        <p className="text-sm text-gray-600">{content}</p>
      </div>
    </div>
  );
}
