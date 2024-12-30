import { notFound } from "next/navigation";
import { db } from "@/db";

interface EditSnippetProps {
  params: {
    id: string;
  };
}

const EditSnippetPage = async (props: EditSnippetProps) => {
  const id = parseInt(props.params.id);
  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }

  return <div className="text-gray-300 m-4">Editing {snippet?.title}</div>;
};

export default EditSnippetPage;
