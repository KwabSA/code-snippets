interface EditSnippetProps {
  params: {
    id: string;
  };
}

const EditSnippetPage = (props: EditSnippetProps) => {
  const id = parseInt(props.params.id);

  return <div className="text-gray-300">Editing {id}</div>;
};

export default EditSnippetPage;
