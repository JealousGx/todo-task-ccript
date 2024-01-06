import Image from "next/image";

import { Input } from "@/components/Input";
import { TodoList } from "@/components/TodoList";

export default function Home() {
  return (
    <main
      style={{
        backgroundImage: "url(/images/image.webp)",
      }}
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center bg-no-repeat before:bg-inherit before:h-full before:w-full before:absolute before:backdrop-blur relative"
    >
      <div className="max-w-3xl z-10 w-full flex flex-col gap-y-8 items-center justify-center">
        <Image
          src="/images/profile.jpg"
          alt="User Profile"
          width={80}
          height={80}
          priority
          className="rounded-full mb-4 border-4 border-gray-400 h-32 w-32"
        />
        <Input />

        <TodoList />
      </div>
    </main>
  );
}
