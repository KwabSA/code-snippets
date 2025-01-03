"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    console.log(code);
    setCode(value);
  };

  return (
    // <div className="text-gray-300 m-4 font-bold">Editing: {snippet.title}</div>
    <div>
      <Editor
        height="40vh"
        theme="vs-dark"
        language="javascript"
        defaultValue={snippet.code}
        options={{ minimap: { enabled: false } }}
        onChange={handleEditorChange}
      />
    </div>
  );
};

export default EditSnippetForm;
