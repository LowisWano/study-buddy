import Deck from "./deck"

export default function DecksSection({
  decks,
}: {
  decks: {
    title: string;
    lastOpened: string;
  }[];
}) {
  return (
    <div className="flex flex-row gap-4">
      {
        decks.map((deck) => (
          <Deck key={deck.title} deck={deck} />
        ))
      }
    </div>
  )
}