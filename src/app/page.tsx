import Image from "next/image";
import LinkBox from "./components/LinkBox";
import Calculator from "./components/Calculator";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const links = [
  {
    id: 0,
    name: "Docs",
    description: "Find in-depth information about Next.js features and API.",
    href: "https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
  },
  {
    id: 1,
    name: "Learn",
    description: "Learn about Next.js in an interactive course with quizzes!",
    href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app",
    target: "_blank",
  },
  {
    id: 2,
    name: "Templates",
    description: "Explore the Next.js 13 playground.",
    href: "https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
  },
  {
    id: 3,
    name: "Deploy",
    description:
      "Instantly deploy your Next.js site to a shareable URL with Vercel.",
    href: "https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app",
    target: "_blank",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Project C</h1>
      <Calculator />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
        {links.map(link => (
          <LinkBox
            key={link.id}
            name={link.name}
            description={link.description}
            href={link.href}
            target={link.target}
          />
        ))}
      </div>
    </main>
  );
}
