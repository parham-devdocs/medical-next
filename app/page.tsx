import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-900 to-blue-300">
      <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">
        Welcome to Our Homepage!
      </h1>
      <p className="text-lg text-white mb-6">
        Discover amazing features and content.
      </p>
      <div className=" flex items-center justify-between gap-x-4">
        <Button
          variant="outline"
          className="  hover:bg-blue-400 hover:text-white transition-colors duration-500"
        >
          Sign up
        </Button>
        <Button
          variant="outline"
          className="hover:bg-blue-400 hover:text-white transition-colors duration-300 "
        >
          login
        </Button>
      </div>
    </div>
  );
}
