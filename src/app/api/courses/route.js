import { NextResponse } from "next/server";

export async function GET(req) {
  const courses = [
    {
      id: 1,
      title: "JavaScript",
      url: "../../../../assets/javascript.png",
    },
    { id: 2, title: "React", url: "../../../../assets/react.png" },
    {
      id: 3,
      title: "TypeScript",
      url: "../../../../assets/typescript.png",
    },
    { id: 4, title: "git", url: "../../../../assets/git.png" },
    { id: 5, title: "Node", url: "../../../../assets/node.png" },
  ];

  return NextResponse.json({ status: 200, data: courses });
}
