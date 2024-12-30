"use client";

import type { Snippet } from "@prisma/client";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  return (
    <div className="text-gray-300 m-4 font-bold">Editing: {snippet.title}</div>
  );
};

export default EditSnippetForm;
