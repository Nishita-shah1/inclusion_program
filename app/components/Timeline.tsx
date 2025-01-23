const timelineStages = [
  {
    title: "Outreach Campaign",
    description: "Spreading awareness about the program and its benefits.",
    dateRange: "January 1 - February 28",
  },
  {
    title: "Application Phase",
    description: "Accepting and reviewing applications from potential participants.",
    dateRange: "March 1 - April 15",
  },
  {
    title: "Bootcamp Phase",
    description: "Intensive skill development and training sessions.",
    dateRange: "May 1 - June 30",
  },
  {
    title: "Selection Phase",
    description: "Evaluating participants and selecting program cohort.",
    dateRange: "July 1 - July 15",
  },
  {
    title: "Post-Rejection Support",
    description: "Providing resources and guidance for non-selected applicants.",
    dateRange: "July 16 - August 15",
  },
  {
    title: "Engagement Programs",
    description: "Ongoing learning and development activities for selected participants.",
    dateRange: "August 16 - December 31",
  },
]

export default function Timeline() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Program Timeline</h2>
        <div className="max-w-3xl mx-auto">
          {timelineStages.map((stage, index) => (
            <div key={index} className="flex mb-8 last:mb-0">
              <div className="flex flex-col items-center mr-4">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                {index !== timelineStages.length - 1 && <div className="w-1 h-full bg-gray-300"></div>}
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md flex-1">
                <h3 className="text-xl font-bold mb-2">{stage.title}</h3>
                <p className="text-gray-600 mb-2">{stage.description}</p>
                <p className="text-sm text-gray-500">{stage.dateRange}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

