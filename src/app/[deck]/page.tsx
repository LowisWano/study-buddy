import FlashcardsSection from "@/components/flashcards/flashcards-section"

import { MoreVertical } from 'lucide-react'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import { getDecks } from "@/services/deck.service"

export default async function Page({
  params,
}: {
  params: { deck: string }
}) {
  const { deck } = await params
  const decks = getDecks()
  const currentDeck = decks.find(d => d.id === Number(deck))

  if (!currentDeck) {
    return <div>Deck not found</div>
  }

  return (
    <div className="flex justify-center flex-col mx-28">
      <Card className="bg-muted mb-6">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-2xl font-bold">
            {currentDeck.title}
          </CardTitle>

          <div className="items-center flex justify-center">
            <Button variant="outline">Edit Flashcards</Button>
            <button className="p-1 hover:bg-gray-100 rounded-full">
              <MoreVertical className="h-5 w-5" />
            </button>
          </div>
        </CardHeader>
      </Card>
      
      <FlashcardsSection flashcards={currentDeck.flashcards}/>
    </div>
  )
}