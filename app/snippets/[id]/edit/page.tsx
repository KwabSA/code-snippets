import { notFound } from "next/navigation";
import { db } from "@/db";
import EditSnippetForm from "@/components/edit-snippet-form";

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

  return (
    <div className="text-gray-300 m-4">
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippetPage;
