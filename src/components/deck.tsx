import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Deck({ deck }: { 
  deck: { 
    title: string,
    lastOpened: string,
  } 
}) {

  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{deck.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>Last opened: {new Date(deck.lastOpened).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
          })}
        </p>
      </CardContent>
    </Card>
  )
}