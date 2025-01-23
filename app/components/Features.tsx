import { Book, Users, Megaphone, Rocket, RefreshCw, Target } from "lucide-react"

const features = [
  {
    icon: Book,
    title: "Foundation Track",
    description: "Comprehensive learning path for core skills and knowledge.",
  },
  {
    icon: Users,
    title: "Customized Learning Models",
    description: "Tailored approaches to meet diverse learning needs and styles.",
  },
  {
    icon: Megaphone,
    title: "Awareness Campaigns",
    description: "Initiatives to promote inclusivity and diversity awareness.",
  },
  {
    icon: Rocket,
    title: "Skill Development Bootcamps",
    description: "Intensive training sessions for rapid skill acquisition.",
  },
  {
    icon: RefreshCw,
    title: "Re-Engagement Opportunities",
    description: "Programs to reconnect and re-skill former participants.",
  },
  {
    icon: Target,
    title: "Impact-Oriented Selection",
    description: "Participant selection focused on maximizing social impact.",
  },
]

export default function Features() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Program Features</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center p-4 bg-white rounded-lg shadow-md">
              <feature.icon className="w-12 h-12 mb-4 text-primary" />
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

