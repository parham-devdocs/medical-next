import { ArrowBigRight, Check } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

// Define the props for CardDemo
type CardProps = React.ComponentProps<typeof Card> & {
  image: string;
  title: string;
  content: string; // Added content property
};

export default function CardDemo({ className, image, title, content, ...props }: CardProps) {
  return (
    <Card className={cn("w-[380px] h-[550px]", className , )} {...props}>
      <CardHeader>
        <CardTitle className=" my-3 text-xl font-bold text-primary">{title}</CardTitle>
        <Image src={image} alt={title} width={380} height={200} className=" h-56" /> {/* Added width and height */}
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          {/* You can add content or description here */}
          <CardDescription className=" line-clamp-6">{content}</CardDescription>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full hover:bg-black">
           Read The  Article <ArrowBigRight/>
        </Button>
      </CardFooter>
    </Card>
  );
}
