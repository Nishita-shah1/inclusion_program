import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SolutionBeyondRejections() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">
          Pathways Beyond Rejections
        </h2>
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div className="space-y-4">
            <p className="text-lg text-gray-600">
              We believe in continuous growth and second chances. Rejected applicants will have access to preparatory
              programs, bootcamps, and mentorship to help them upskill and reapply in the future. Our goal is to ensure
              that every interaction with our program leads to personal and professional development.
            </p>
            <Button size="lg" className="mt-4">
              Turn Rejections into Growth Opportunities
            </Button>
          </div>
          <div className="bg-gray-100 p-6 rounded-lg">
            <h3 className="text-xl font-bold mb-4">Benefits for Rejected Applicants</h3>
            <ul className="space-y-2">
              {[
                "Opportunities to join skill-building bootcamps",
                "Access to interactive webinars and gamified learning modules",
                "Personalized feedback to improve for future applications",
                "Networking opportunities with mentors and peers",
              ].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <CheckCircle className="text-green-500 flex-shrink-0" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

