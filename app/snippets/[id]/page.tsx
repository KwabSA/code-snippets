import { notFound } from "next/navigation";
import { db } from "@/db";

interface ViewSnippetProps {
  params: {
    id: string;
  };
}

const ViewSnippetPage = async ({ params }: ViewSnippetProps) => {
  // page loading timer
  await new Promise((r) => setTimeout(r, 1500));

  // retrieve record
  const { id } = await params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div>
      <div className="text-gray-300 flex m-4 justify-between items-center">
        <h1 className="text-xl font-bold">
          {snippet.title}
          {/* View Snippet */}
        </h1>
        <div className="flex gap-4">
          <button className="border px-4 py-2 bg-blue-400 text-black font-semibold rounded-md hover:bg-blue-600 transition duration-200">
            Edit
          </button>
          <button className="border px-4 py-2 bg-red-400 text-black font-semibold rounded-md hover:bg-red-600 transition duration-200">
            Delete
          </button>
        </div>
      </div>
      <pre className="m-4 border rounded text-white bg-gray-800 p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ViewSnippetPage;
