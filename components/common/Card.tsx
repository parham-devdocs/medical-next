import { ArrowBigRight } from "lucide-react";
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
import Link from "next/link";

// Define the props for CardDemo
type CardProps = React.ComponentProps<typeof Card> & {
  image: string;
  title: string;
  content: string; // Added content property
  buttonLink: string;
};

export default function CardDemo({
  className,
  image,
  title,
  content,
  buttonLink,
  ...props
}: CardProps) {
  return (
    <Card
      className={cn("w-full md:w-[420px]  min-h-[250px] ", className)}
      {...props}
    >
      <CardHeader>
        <CardTitle className="my-3 text-xl font-bold text-primary">
          {title}
        </CardTitle>
        <Image
          src={image}
          alt={title}
          width={580}
          height={200}
          objectFit={"contain"}
          className="h-56 w-full"
        />
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="flex items-center space-x-4 rounded-md border p-4">
          <CardDescription className="line-clamp-6">{content}</CardDescription>
        </div>
      </CardContent>
      <CardFooter>
        {buttonLink && (
          <Button className="w-full hover:bg-black">
            <Link href={buttonLink} className=" flex items-center gap-1">
              Read The Article <ArrowBigRight />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}
