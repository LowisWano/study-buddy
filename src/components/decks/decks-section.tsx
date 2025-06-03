import Deck from "./deck"
import { Deck as DeckType } from "@/services/deck.service"

export default function DecksSection({
  decks,
}: {
  decks: DeckType[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 m-4">
      {
        decks.map((deck) => (
          <Deck key={deck.title} deck={deck} />
        ))
      }
    </div>
  )
}