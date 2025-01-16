"use client";

import React from "react";
import Note from "./Note";

export default function NotesDisplay() {
  const notes = [
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
    {
      title: "Default Note 4",
      content: "This is filler content for Default Note 4.",
    },
    {
      title: "Default Note 5",
      content: "This is filler content for Default Note 5.",
    },
    {
      title: "Default Note 6",
      content: "This is filler content for Default Note 6.",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-y-px gap-8 min-h-screen p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {notes.map((note, index) => (
        <Note key={index} title={note.title} content={note.content} />
      ))}
    </div>
  );
}
