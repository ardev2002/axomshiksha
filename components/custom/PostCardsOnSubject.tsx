"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
export default function PostCardsOnSubject({ subject }: { subject: string }) {
  const [page, setPage] = useState(1);
  const nextPage = () => setPage((p) => p + 1);
  const prevPage = () => setPage((p) => Math.max(1, p - 1));
  return (
    <div className="mt-6 space-y-6">
      {" "}
      {/* Pagination Buttons */}{" "}
      <div className="flex justify-center gap-3">
        {" "}
        <Button onClick={prevPage} disabled={page === 1}>
          {" "}
          Prev{" "}
        </Button>{" "}
        <Button onClick={nextPage}>Next</Button>{" "}
      </div>{" "}
    </div>
  );
}
