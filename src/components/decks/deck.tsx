import Link from 'next/link'

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
    <Link href={`/${deck.title}`}>
      <Card className="hover:ring-4 hover:ring-black transition-all">
        <CardHeader>
          <CardTitle>{deck.title}</CardTitle>
        </CardHeader>
        <CardContent>
          <p>
            Last opened: {new Date(deck.lastOpened).toLocaleDateString("en-US", {
              month: "long",
              day: "numeric",
              year: "numeric"
            })}
          </p>
        </CardContent>
      </Card>
    </Link>
    
  )
}