import Image from "next/image";
import Link from 'next/link'
export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="w-auto flex p-8 m-2 rounded-md flex-shrink flex-col justify-center text-center">
        <span className="text-3xl">
          <strong>myNotes</strong> is a cloud notes application, running on NextJS.
        </span>
        <Link className="flex rounded-md bg-green-500 h-30 px-6 py-3 text-lg self-center hover:bg-green-600 transition-color" href="/dashboard">
          Get started
        </Link>
      </div>
    </main>
  );
}
