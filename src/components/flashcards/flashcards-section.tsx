"use client"
import FlashCard from "./flashcard"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function FlashcardsSection({
  flashcards
}: {
  flashcards: {
    term: string,
    definition: string,
  }[]
}){
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : flashcards.length - 1))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => (prev < flashcards.length - 1 ? prev + 1 : 0))
  }

  return (
    <div className="flex flex-col gap-6">
      <FlashCard key={flashcards[currentIndex].term} flashcard={flashcards[currentIndex]}/>

      <div className="flex items-center justify-center gap-4">
        <Button 
          variant="outline" 
          onClick={handlePrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Previous
        </Button>
        
        <span className="text-sm text-muted-foreground">
          Card {currentIndex + 1} of {flashcards.length}
        </span>

        <Button 
          variant="outline" 
          onClick={handleNext}
          className="flex items-center gap-2"
        >
          Next
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}