"use client";

import Image from "next/image";
import { BookOpen } from "lucide-react";

import { Book } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";

const formatCondition = (condition: string) => {
  return condition
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

interface BookCardProps {
  book: Book & { color?: string };
}

export function BookCard({ book }: BookCardProps) {
  const { title, author, price, condition, image, color } = book;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <Card className="overflow-hidden hover:shadow-lg transition-all duration-300 group cursor-pointer border-border/50 bg-card h-full flex flex-col">
      {/* Image Container */}
      <div className="relative h-52 w-full overflow-hidden bg-secondary/20">
        {image ? (
          <Image
            src={image}
            alt={`Cover of ${title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className={`h-full w-full ${
              color || "bg-primary/10"
            } flex items-center justify-center`}
          >
            <BookOpen className="h-12 w-12 text-primary/40 group-hover:scale-110 transition-transform duration-300" />
          </div>
        )}
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      <CardHeader className="p-4 pb-2 space-y-1 flex-1">
        <div className="flex justify-between items-start gap-2">
          <CardTitle
            className="text-lg leading-tight line-clamp-1"
            title={title}
          >
            {title}
          </CardTitle>
          <Badge
            variant="outline"
            className="shrink-0 text-[10px] px-2 py-0 h-5 border-primary/30 text-primary"
          >
            {formatCondition(condition)}
          </Badge>
        </div>
        <CardDescription className="line-clamp-1">{author}</CardDescription>
      </CardHeader>

      <CardFooter className="p-4 pt-2 flex justify-between items-center mt-auto">
        <span className="font-bold text-primary text-lg">{formattedPrice}</span>
        <Button
          size="sm"
          variant="ghost"
          className="text-muted-foreground hover:text-primary hover:bg-primary/5 -mr-2"
        >
          View
        </Button>
      </CardFooter>
    </Card>
  );
}
