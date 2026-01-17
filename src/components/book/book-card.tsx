"use client";

import Link from "next/link";
import Image from "next/image";
import { Tag } from "lucide-react";

import { Book, Category, User } from "@prisma/client";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
  CardContent,
} from "@/components/ui/card";

const formatCondition = (condition: string) => {
  return condition
    .replace(/_/g, " ")
    .toLowerCase()
    .replace(/\b\w/g, (c) => c.toUpperCase());
};

interface BookCardProps {
  book: Book & {
    category: Category;
    seller: User;
  };
}

export function BookCard({ book }: BookCardProps) {
  const {
    title,
    author,
    price,
    condition,
    image,
    description,
    category,
    seller,
  } = book;

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(price);

  return (
    <Card className="group flex h-full flex-col overflow-hidden border-border/50 bg-card transition-all duration-300 hover:shadow-lg hover:border-primary/50 pt-0 gap-2">
      <div className="relative aspect-video w-full overflow-hidden bg-secondary/20 sm:aspect-2/1">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <div className="absolute right-2 top-2">
          <Badge
            variant="secondary"
            className="backdrop-blur-md bg-background/80"
          >
            {formatCondition(condition)}
          </Badge>
        </div>
      </div>

      <CardHeader className="px-4 gap-1">
        <div className="flex items-center gap-1">
          <Badge
            variant="outline"
            className="text-[10px] px-2 py-0 h-5 gap-1 font-normal text-muted-foreground"
          >
            <Tag className="h-3 w-3" />
            {category.name}
          </Badge>
        </div>

        <CardTitle className="line-clamp-1 text-lg group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
        <CardDescription className="line-clamp-1">by {author}</CardDescription>
      </CardHeader>

      <CardContent className="px-4 text-sm text-muted-foreground">
        <p className="line-clamp-2 leading-relaxed">{description}</p>
      </CardContent>

      <CardFooter className="px-4 pt-3 mt-auto border-t bg-secondary/5 flex flex-col gap-1">
        <div className="flex w-full items-center gap-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={seller.image} />
          </Avatar>
          <span className="text-xs text-muted-foreground">
            Sold by{" "}
            <span className="font-medium text-foreground">{seller.name}</span>
          </span>
        </div>

        <div className="flex w-full items-center justify-between">
          <span className="text-lg font-bold text-primary">
            {formattedPrice}
          </span>
          <Link href={`books/${book.id}`}>
            <Button size="sm" variant="outline" className="h-8">
              View Details
            </Button>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
