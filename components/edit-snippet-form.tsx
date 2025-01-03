"use client";

import type { Snippet } from "@prisma/client";
import Editor from "@monaco-editor/react";
import { useState } from "react";
import * as actions from "@/actions";

interface EditSnippetFormProps {
  snippet: Snippet;
}

const EditSnippetForm = ({ snippet }: EditSnippetFormProps) => {
  const [code, setCode] = useState(snippet.code);

  const handleEditorChange = (value: string = "") => {
    console.log(code);
    setCode(value);
  };
  // calling server action
  const editSnippetAction = actions.editSnippet.bind(null, snippet.id, code);

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

      <form action={editSnippetAction} className="flex justify-end p-2">
        <button
          type="submit"
          className="py-2 px-4 border rounded hover:bg-blue-500"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default EditSnippetForm;
