import FlashcardsSection from "@/components/flashcards/flashcards-section"
import { getDecks } from "@/services/deck.service"

export default async function Page({
  params,
}: {
  params: { deck: string }
}) {
  const decks = getDecks()
  const currentDeck = decks.find(d => d.title === params.deck)

  if (!currentDeck) {
    return <div>Deck not found</div>
  }

  return (
    <div className="flex justify-center flex-col mx-28">
      <h1 className="text-2xl font-bold">
        {currentDeck.title}
      </h1>
      <FlashcardsSection flashcards={currentDeck.flashcards}/>
    </div>
  )
}