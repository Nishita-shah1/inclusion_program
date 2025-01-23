import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-primary">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-white">
              Welcome to Our Inclusion Program
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Empowering individuals through inclusive learning and development opportunities. Join us in creating a
              more diverse and skilled workforce.
            </p>
          </div>
          <Button variant="secondary" size="lg">
            Learn More
          </Button>
        </div>
      </div>
    </section>
  )
}

