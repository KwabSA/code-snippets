import { db } from "@/db";

const Home = async () => {
  // retrieve records
  const snippets = await db.snippet.findMany();

  // list records
  const listSnippets = snippets.map((snippet) => {
    return <div key={snippet.id}>{snippet.title}</div>;
  });
  return <div className="text-gray-300 mt-8">{listSnippets} </div>;
};

export default Home;
