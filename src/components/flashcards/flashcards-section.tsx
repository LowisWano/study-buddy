import FlashCard from "./flashcard"

export default function FlashcardsSection({
  flashcards
}: {
  flashcards: {
    term: string,
    definition: string,
  }[]
}){
  return (
    <div>
      {
        flashcards.map((flashcard) => (
          <FlashCard key={flashcard.term} flashcard={flashcard}/>
        ))
      }
    </div>
  )
}