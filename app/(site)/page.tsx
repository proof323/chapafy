import Header from "@/components/Header";
import { ListItem } from "@/components/ListItem";
export default function Home() {
  return (
    <div className="bg-neutral-950 rounded-lg h-full w-full overflow-hidden overflow-y-auto">
      
      <Header>
        <div className="mb-2">
          <h1 className="text-3xl font-semibold text-white">Chafafy</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-3 mt-4">
            <ListItem image="/Images/liked.png" name="Pinga te gusta gil" href="/liked" />

          </div>
        </div>
      </Header>
      <div className="mt-2 mb-7 px-6">
        <div className="flex justify-between items-center mb-2">
          <h1 className="text-2xl font-semibold text-white">
            Canciones nuevas
          </h1>
        </div>
        <div>
          Lista de culos digo canciones xd
        </div>
      </div>
      
      
    </div>
  )
}
