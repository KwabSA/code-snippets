import Link from "next/link";
import { db } from "@/db";

export const metadata = {
  title: "Home",
};

const Home = async () => {
  // retrieve records
  const snippets = await db.snippet.findMany();

  // list records
  const listSnippets = snippets.map((snippet) => {
    return (
      <Link
        key={snippet.id}
        className="flex justify-between items-center p-2 border rounded hover:shadow-md hover:shadow-blue-600"
        href={`/snippets/${snippet.id}`}
      >
        <div>{snippet.title}</div>
        <div>View</div>
      </Link>
    );
  });
  return (
    <div className="max-w-lg mx-auto mt-8 p-4">
      <div className="flex mt-8 justify-between items-center">
        <h1 className=" pl-2 text-white font-bold text-2xl">Snippets</h1>
        <Link
          className="border px-4 py-2 bg-blue-400 text-black font-semibold rounded-md hover:bg-blue-600 transition duration-200"
          href={`/snippets/new`}
        >
          New
        </Link>
      </div>
      {/* <hr className="m-2" /> */}
      <div className="text-gray-300 mt-4 flex flex-col gap-4 ">
        {listSnippets}{" "}
      </div>
    </div>
  );
};

export default Home;
