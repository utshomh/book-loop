import Image from "next/image";
import { notFound } from "next/navigation";
import { Calendar, ShieldCheck } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { getBookById } from "@/app/actions/book";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export default async function BookDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  if (Number.isNaN(Number(id))) return notFound();

  const book = await getBookById(Number(id));

  if (!book) return notFound();

  const formattedPrice = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(book.price);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
      <div className="lg:col-span-5">
        <div className="sticky top-24">
          <div className="relative aspect-3/4 w-full overflow-hidden rounded-2xl border bg-secondary/20 shadow-xl">
            <Image
              src={book.image}
              alt={book.title}
              fill
              priority
              className="object-cover"
            />
          </div>
        </div>
      </div>

      <div className="lg:col-span-7 flex flex-col">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-2">
            <Badge
              variant="secondary"
              className="px-3 py-1 text-xs uppercase tracking-wider"
            >
              {book.category.name}
            </Badge>
            <Badge
              variant="outline"
              className="px-3 py-1 text-xs border-primary/50 text-primary"
            >
              {book.condition.replace(/_/g, " ")}
            </Badge>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            {book.title}
          </h1>
          <p className="text-xl text-muted-foreground">
            by{" "}
            <span className="font-semibold text-foreground">{book.author}</span>
          </p>
        </div>

        <Separator className="my-6" />

        <div className="space-y-4">
          <div className="bg-secondary/30 p-6 rounded-xl border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div>
              <p className="text-sm text-muted-foreground mb-1">
                Current Price
              </p>
              <p className="text-4xl font-bold text-primary">
                {formattedPrice}
              </p>
            </div>
            <Button
              size="lg"
              className="h-14 px-10 text-lg shadow-lg shadow-primary/20"
            >
              Send Order Request
            </Button>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-bold">About this book</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">
              {book.description}
            </p>
          </div>
        </div>

        <Separator className="my-6" />

        {/* Seller & Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Seller Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Seller Information
            </h3>
            <div className="flex items-center gap-4">
              <Avatar className="h-12 w-12 border">
                <AvatarImage src={book.seller.image} />
              </Avatar>
              <div>
                <p className="font-bold">{book.seller.name}</p>
                <p className="text-xs text-muted-foreground">
                  Member since 2024
                </p>
              </div>
            </div>
          </div>

          {/* Quick Specs */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Listing Details
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Listed on {new Date(book.createdAt).toLocaleDateString()}
                </span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <ShieldCheck className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground">
                  Buyer Protection Guaranteed
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
