import Image from 'next/image'
import { Button } from "../../components/ui/button"
import { Mail } from "lucide-react"


export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Button> <Mail className="mr-2 h-4 w-4" /> Login with Email</Button>

    </div>
  )
}
