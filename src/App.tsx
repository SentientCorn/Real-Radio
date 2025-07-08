import Header from "./components/Header"
import Home from "./components/Home"

function App() {

  return (
    <>
      <div className="App flex flex-col bg-gray-300 min-h-screen min-w-screen">
        <Header />
        <main className="flex flex-col flex-1 p-4 h-full w-full">
          <Home />
        </main>
      </div>
    </>
  )
}

export default App
