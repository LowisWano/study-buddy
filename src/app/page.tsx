import DecksSection from "@/components/decks/decks-section"
import { getDecks } from "@/services/deck.service"

export default function Page() {
  const decks = getDecks()
  
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div>
          <h1 className="text-2xl font-bold">Welcome Luis Andrei Ouano!</h1>
          <p className="text-sm text-gray-500">
            This is your dashboard.
          </p>
          <DecksSection decks={decks} />
        </div>
      </div>
    </div>
  )
}
