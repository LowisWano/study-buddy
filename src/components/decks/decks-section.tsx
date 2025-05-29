import Deck from "./deck"
import { Deck as DeckType } from "@/services/deck.service"

export default function DecksSection({
  decks,
}: {
  decks: DeckType[];
}) {
  return (
    <div className="flex flex-row gap-4 m-4">
      {
        decks.map((deck) => (
          <Deck key={deck.title} deck={deck} />
        ))
      }
    </div>
  )
}