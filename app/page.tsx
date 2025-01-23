import Hero from "./components/Hero"
import Features from "./components/Features"
import SolutionBeyondRejections from "./components/SolutionBeyondRejections"
import Timeline from "./components/Timeline"
import Footer from "./components/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <Hero />
      <Features />
      <SolutionBeyondRejections />
      <Timeline />
      <Footer />
    </main>
  )
}

