import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="w-full py-12 md:py-24 lg:py-32 bg-gray-900 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary">
                <Facebook />
              </a>
              <a href="#" className="hover:text-primary">
                <Twitter />
              </a>
              <a href="#" className="hover:text-primary">
                <Instagram />
              </a>
              <a href="#" className="hover:text-primary">
                <Linkedin />
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4">Subscribe to Our Newsletter</h3>
            <form className="flex space-x-2">
              <Input type="email" placeholder="Enter your email" className="flex-grow" />
              <Button type="submit">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © {new Date().getFullYear()} Inclusion Program Platform. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

