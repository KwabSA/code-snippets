import { redirect } from "next/navigation";
import { db } from "@/db";

const CreateSnippetPage = () => {
  // create record and redirect to root route
  async function createSnippet(formData: FormData) {
    // create server action
    "use server";

    // check and validate user inputs
    const title = formData.get("title") as string;
    const code = formData.get("code") as string;

    // create new record in the databse
    const snippet = await db.snippet.create({
      data: {
        title,
        code,
      },
    });
    console.log(snippet);

    // redirect to root route
    redirect("/");
  }
  return (
    <form
      action={createSnippet}
      className="max-w-lg mx-auto mt-8 p-4 border border-gray-200 rounded-md shadow-md shadow-blue-400"
    >
      <div className="flex items-center my-4">
        {" "}
        <hr className="flex-grow border-gray-300" />{" "}
        <h3 className="mx-4 font-bold text-xl text-gray-200">
          Create Code Snippet
        </h3>{" "}
        <hr className="flex-grow border-gray-300" />{" "}
      </div>
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2">
          <label className="text-gray-400 font-medium" htmlFor="title">
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
          <label className="text-gray-400 font-medium" htmlFor="code">
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
