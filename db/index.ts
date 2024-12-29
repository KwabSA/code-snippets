import { PrismaClient } from "@prisma/client";

export const db = new PrismaClient();

// create snippet
db.snippet.create({
  data: {
    title: "Snippet Title",
    code: "const codeTitle = () => {}",
  },
});
