import FlashcardsSection from "@/components/flashcards/flashcards-section"

export default async function Page({
  params,
}: {
  params: Promise<{ deck : string }>
}){
  const { deck } = await params

  const flashcards = [
    {
      term: "Software Engineering",
      definition: "It is a discipline within computer science that focuses on the systematic and professional development, testing, and maintenance of software applications. "
    }
  ]

  return (
    <div className="flex justify-center flex-col mx-28">
      <h1 className="text-2xl font-bold"  >
        {deck}
      </h1>

      <FlashcardsSection flashcards={flashcards}/>

    </div>
  )
}