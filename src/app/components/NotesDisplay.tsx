"use client";

import React, { useState } from "react";
import Note from "./Note";
import NoteForm from "./NoteForm";

export default function NotesDisplay() {
  const [showForm, setShowForm] = useState(false);
  const [notes, setNotes] = useState([
    {
      title: "Default Note 1",
      content: "This is filler content for Default Note 1.",
    },
    {
      title: "Default Note 2",
      content: "This is filler content for Default Note 2.",
    },
    {
      title: "Default Note 3",
      content: "This is filler content for Default Note 3.",
    },
  ]);

  const handleRemoveNote = (index: number) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
  };

  const handleAddNote = (note: { title: string; content: string }) => {
    setNotes((prevNotes) => [...prevNotes, note]);
  };

  const handleEditNote = (index: number, newTitle: string, newContent: string) => {
    setNotes((prevNotes) =>
      prevNotes.map((note, i) => (i === index ? { title: newTitle, content: newContent } : note))
    );
  };

  return (
    <div className="p-4">
      <button
        className="col-span-full bg-blue-600 text-white px-10 py-2 rounded-lg hover:bg-blue-400 mb-4"
        onClick={() => setShowForm(true)}
      >
        Create Note
      </button>
      <div className="grid grid-cols-3 gap-4">
        {notes.map((note, index) => (
          <Note
            key={index}
            title={note.title}
            content={note.content}
            onRemove={() => handleRemoveNote(index)}
            onEdit={(newTitle, newContent) => handleEditNote(index, newTitle, newContent)}
          />
        ))}
      </div>
      {showForm && (
        <NoteForm onClose={() => setShowForm(false)} onSubmit={handleAddNote} />
      )}
    </div>
  );
}
