import React from "react";

const CreateSnippetPage = () => {
  return (
    <form className="max-w-lg mx-auto p-4 border border-gray-200 rounded-md shadow-md">
      <h3 className="font-bold text-xl mb-4 text-gray-700">Create Snippet</h3>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium" htmlFor="title">
            Title
          </label>
          <input
            name="title"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="title"
            placeholder="Enter snippet title"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 font-medium" htmlFor="code">
            Code
          </label>
          <textarea
            name="code"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            id="code"
            placeholder="Enter code snippet"
          />
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-400 text-black font-semibold py-2 rounded-md hover:bg-blue-600 transition duration-200"
      >
        Create
      </button>
    </form>
  );
};

export default CreateSnippetPage;
