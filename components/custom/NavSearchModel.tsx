"use client";

import { Search, X } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { Input } from "@/components/ui/input";

export default function NavSearchModel() {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus the input when dialog opens
  useEffect(() => {
    if (isOpen && inputRef.current) {
      // Small delay to ensure dialog is fully rendered
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    }
  }, [isOpen]);

  return (
    <>
      <button 
        onClick={() => setIsOpen(true)}
        className="p-2 hover:cursor-pointer rounded-md hover:bg-accent transition-colors"
        aria-label="Search"
      >
        <Search className="h-5 w-5 text-foreground" />
      </button>

      <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
        <AlertDialogContent className="sm:max-w-2xl p-0 gap-0 border border-accent shadow-2xl rounded-lg overflow-hidden">
          <AlertDialogHeader className="p-4 border-b border-accent">
            <div className="flex items-center justify-between">
              <AlertDialogTitle className="text-lg font-semibold">Search</AlertDialogTitle>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:cursor-pointer rounded-md hover:bg-accent transition-colors"
                aria-label="Close search"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
          </AlertDialogHeader>
          <div className="p-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                ref={inputRef}
                type="text"
                placeholder="Search for posts, categories, authors..."
                className="pl-10 pr-4 py-2 focus-visible:ring-2 focus-visible:ring-primary"
              />
            </div>
            <div className="mt-4">
              {/* Search results will go here */}
              <p className="text-muted-foreground text-center py-8">
                Start typing to search...
              </p>
            </div>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}