"use client"
import { useState } from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function FlashCard({ flashcard }:{
  flashcard: {
    term: string,
    definition: string,
  }
}){
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div 
      className="relative h-[300px] perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <Card 
        className={`bg-muted absolute w-full h-full transition-transform duration-500 transform-style-3d cursor-pointer
          ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front of card */}
        <div className={`absolute w-full h-full backface-hidden flex items-center justify-center ${isFlipped ? 'hidden' : ''}`}>
          <CardHeader className="text-center">
            <p className="text-2xl">{flashcard.definition}</p>
          </CardHeader>
        </div>

        {/* Back of card */}
        <div className={`absolute w-full h-full backface-hidden rotate-y-180 flex items-center justify-center ${!isFlipped ? 'hidden' : ''}`}>
          <div className="text-center">
            <CardContent>
              <CardTitle className="text-2xl">{flashcard.term}</CardTitle>
            </CardContent>
          </div>
        </div>
      </Card>
    </div>
  )
}