import { notFound } from "next/navigation";
import { db } from "@/db";
import EditSnippetForm from "@/components/edit-snippet-form";

interface EditSnippetProps {
  params: {
    id: string;
  };
}

const EditSnippetPage = async ({ params }: EditSnippetProps) => {
  // const id =  parseInt(props.params.id);
  const { id } = await params;
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(id) },
  });

  if (!snippet) {
    return notFound();
  }

  return (
    <div className="text-gray-300 m-4">
      <h1 className="font-bold mb-4"> Editing {snippet.title} ...</h1>
      <EditSnippetForm snippet={snippet} />
    </div>
  );
};

export default EditSnippetPage;
