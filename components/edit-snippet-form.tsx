"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  return (
    // <div className="text-gray-300 m-4 font-bold">Editing: {snippet.title}</div>
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
      />
    </div>
  );
};

export default EditSnippetForm;
