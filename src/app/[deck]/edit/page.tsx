import {
  Card,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

export default function EditPage() {
  return (
    <div className="flex justify-center flex-col">
      <Card className="bg-muted mb-6">
        <CardHeader className="flex flex-row justify-between">
          <CardTitle className="text-2xl">
            Create flashcards below!
          </CardTitle>
          <Button>Save</Button>
        </CardHeader>
      </Card>
      
      {/* Edit title and add tag */}
      <Card className="bg-muted mb-6">
        <CardHeader className="flex flex-row gap-6">
          <div className="flex flex-col w-1/2">
            <CardTitle className="text-lg mb-2">Title</CardTitle>
            <Input className="bg-background rounded-3xl h-10"/>
          </div>
          <div className="flex flex-col w-1/2">
            <CardTitle className="text-lg mb-2">Tags</CardTitle>
            <Button className="rounded-3xl w-28">Add tags +</Button>
          </div>
        </CardHeader>
      </Card>

    </div>
  )
}