"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { MoveLeft, BookX } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center px-4 text-center">
      <div className="bg-secondary/30 p-8 rounded-full mb-6">
        <BookX className="h-24 w-24 text-primary" strokeWidth={1.5} />
      </div>

      <h1 className="text-4xl font-bold tracking-tight text-primary mb-2">
        404: Not Found
      </h1>

      <p className="text-lg text-muted-foreground max-w-125 mb-8">
        It seems the page you&apos;re looking for doesn&apos;t exist.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          variant="default"
          size="lg"
          className="rounded-full shadow-lg"
          onClick={() => router.back()}
        >
          <MoveLeft className="h-4 w-4" />
          Go Back
        </Button>

        <Button
          asChild
          variant="outline"
          size="lg"
          className="rounded-full border-primary/20 text-primary"
        >
          <Link href="/">Back to Home</Link>
        </Button>
      </div>

      <div className="mt-16 w-full max-w-md h-px bg-linear-to-r from-transparent via-border to-transparent" />
    </div>
  );
}
