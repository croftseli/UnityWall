import Hero from "@/components/home/Hero";

export const metadata = {
  title: "MochiNut",
  description: "MochiNut TN Shop",
}

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <Hero />
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">
          Welcome to <span className="text-amber-700">UnityWall</span>
        </h1>
        <p className="text-2xl font-medium text-gray-400">
          Full website coming soon...
        </p>
      </div>
    </main>
  );
}
