import { notFound } from "next/navigation";
import { db } from "@/db";

interface ViewSnippetProps {
  params: {
    id: string;
  };
}

const ViewSnippetPage = async ({ params }: ViewSnippetProps) => {
  // retrieve record
  const { id } = await params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="text-gray-300 mt-8">
      View Snippet
      <h3>{snippet.title}</h3>
    </div>
  );
};

export default ViewSnippetPage;
