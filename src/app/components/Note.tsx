"use client";

import React, { useState } from "react";

type NoteProps = {
  title: string;
  content: string;
  onRemove: () => void;
  onEdit: (newTitle: string, newContent: string) => void;
};

export default function Note({ title, content, onRemove, onEdit }: NoteProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(title);
  const [newContent, setNewContent] = useState(content);

  const handleSave = () => {
    onEdit(newTitle, newContent);
    setIsEditing(false);
  };

  return (
    <div className="relative max-w-[600px] min-w-[275px] h-[200px] p-4 shadow-lg rounded-lg bg-gray-100">
      <div className="absolute top-2 right-2 flex space-x-2">
        <button
          className="px-2 rounded text-red-500 text-lg font-bold hover:text-red-300 bg-gray-700 hover:bg-gray-500"
          onClick={onRemove}
        >
          X
        </button>
        <button
          className="px-2 rounded text-blue-500 text-lg font-bold hover:text-blue-300 bg-gray-700 hover:bg-gray-500"
          onClick={() => setIsEditing(!isEditing)}
        >
          ✎
        </button>
      </div>
      {isEditing ? (
        <div className="flex flex-col space-y-2">
          <input
            className="w-full p-1 border rounded"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <textarea
            className="w-full p-1 border rounded"
            value={newContent}
            onChange={(e) => setNewContent(e.target.value)}
          />
          <button
            className="px-3 py-1 rounded bg-green-500 text-white font-bold hover:bg-green-400"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      ) : (
        <div>
          <h5 className="text-xl font-semibold mb-2">{title}</h5>
          <p className="text-sm text-gray-600">{content}</p>
        </div>
      )}
    </div>
  );
}
