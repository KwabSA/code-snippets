import Link from "next/link";
import { notFound } from "next/navigation";
import { db } from "@/db";
import * as actions from "@/actions";

export const metadata = {
  title: "View Snippet",
};

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

  const deleteSnippetAaction = actions.deleteSnippet.bind(null, snippet.id);

  return (
    <div>
      <div className="text-gray-300 flex m-4 justify-between items-center">
        <Link
          href={`/`}
          className="font-bold text-blue-800 border border-blue-400 rounded-full bg-white p-1 shadow-md hover:shadow-blue-500 hover:bg-transparent hover:text-white"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {" "}
            <path
              d="M19 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H19v-2z"
              fill="currentColor"
            />{" "}
          </svg>
        </Link>
        <h1 className="text-xl font-bold">{snippet.title}</h1>
        <div className="flex gap-4">
          <Link
            href={`/snippets/${snippet.id}/edit`}
            className="border px-4 py-2  font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          >
            Edit
          </Link>
          <form action={deleteSnippetAaction}>
            <button className="border px-4 py-2  font-semibold rounded-md hover:bg-red-600 transition duration-200">
              Delete
            </button>
          </form>
        </div>
      </div>
      <pre className="m-4 border rounded text-white bg-gray-800 p-3">
        <code>{snippet.code}</code>
      </pre>
    </div>
  );
};

export default ViewSnippetPage;
