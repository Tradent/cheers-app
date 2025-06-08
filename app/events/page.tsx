import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Clock, Users, ExternalLink, Filter, Search } from "lucide-react"

export default function EventsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#0e0e13]">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover bg-center opacity-10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Cheers Events</h1>
              <p className="text-xl text-gray-400 mb-8">
                Connect with the Cheers community at virtual and in-person events
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <div className="relative w-full max-w-md mx-auto">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <input
                    type="search"
                    placeholder="Search events..."
                    className="w-full pl-10 py-2 bg-[#252530] border border-[#2d2d3a] rounded-md text-white"
                  />
                </div>
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">
                  <Filter className="mr-2 h-4 w-4" /> Filter Events
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Upcoming Events */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Upcoming Events</h2>
              <Button variant="outline" className="mt-4 md:mt-0 border-[#2d2d3a] text-white hover:bg-[#252530]">
                Submit an Event
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Event 1 */}
              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="p-0">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src="/events/solana-hackathon.jpg"
                      alt="Solana Hackathon"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-amber-600">Hackathon</Badge>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                        Virtual
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cheers Solana Hackathon</h3>
                    <p className="text-gray-400 mb-4">
                      Build innovative applications using Cheers browserless technology and win prizes.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>May 15-22, 2024</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>Starts at 9:00 AM UTC</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        <span>1,200+ participants</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-6">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Register Now</Button>
                </CardFooter>
              </Card>

              {/* Event 2 */}
              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="p-0">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src="/events/community-meetup.jpg"
                      alt="Community Meetup"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-amber-600">Meetup</Badge>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                        In-Person
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cheers Community Meetup</h3>
                    <p className="text-gray-400 mb-4">
                      Connect with fellow Cheers users and team members in San Francisco.
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>June 5, 2024</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>6:00 PM - 9:00 PM PST</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>San Francisco, CA</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-6">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">RSVP</Button>
                </CardFooter>
              </Card>

              {/* Event 3 */}
              <Card className="bg-[#252530] border-0 hover:bg-[#2d2d3a] transition-colors">
                <CardContent className="p-0">
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src="/events/developer-workshop.jpg"
                      alt="Developer Workshop"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-3">
                      <Badge className="bg-amber-600">Workshop</Badge>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400">
                        Virtual
                      </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Cheers Developer Workshop</h3>
                    <p className="text-gray-400 mb-4">Learn how to build applications using the Cheers SDK and API.</p>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-400">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>May 28, 2024</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>1:00 PM - 3:00 PM UTC</span>
                      </div>
                      <div className="flex items-center text-gray-400">
                        <Users className="h-4 w-4 mr-2" />
                        <span>Limited to 500 participants</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-6">
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white">Register Now</Button>
                </CardFooter>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <Button variant="outline" className="border-[#2d2d3a] text-white hover:bg-[#252530]">
                View All Upcoming Events
              </Button>
            </div>
          </div>
        </section>

        {/* Featured Event */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-white mb-2">Featured Event</h2>
              <p className="text-gray-400">Don't miss our biggest event of the year</p>
            </div>

            <Card className="bg-gradient-to-r from-amber-950/70 to-amber-900/70 border-0 max-w-4xl mx-auto">
              <CardContent className="p-8">
                <div className="flex flex-col md:flex-row gap-6 items-center">
                  <div className="h-40 w-40 rounded-xl overflow-hidden flex-shrink-0">
                    <img
                      src="/events/cheers-conference.jpg"
                      alt="Cheers Conference"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="text-center md:text-left">
                    <Badge className="bg-amber-600 mb-3">Conference</Badge>
                    <h3 className="text-2xl font-bold text-white mb-2">Cheers Annual Conference 2024</h3>
                    <p className="text-gray-300 mb-4">
                      Join us for the inaugural Cheers Conference featuring keynotes, workshops, and networking with the
                      brightest minds in browserless technology and Web3.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>September 15-17, 2024</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>Miami, Florida</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="h-4 w-4 mr-2" />
                        <span>2,000+ attendees</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        <span>In-person & Virtual</span>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                      <Button className="bg-amber-600 hover:bg-amber-700 text-white">Register Now</Button>
                      <Button variant="outline" className="border-amber-600/50 text-amber-500 hover:bg-amber-600/10">
                        Learn More
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Past Events */}
        <section className="py-16 bg-[#1a1a24]">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <h2 className="text-2xl font-bold text-white">Past Events</h2>
              <Button variant="outline" className="mt-4 md:mt-0 border-[#2d2d3a] text-white hover:bg-[#252530]">
                View Event Archive
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Past Event 1 */}
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="/events/launch-party.jpg" alt="Launch Party" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400 mb-2">
                        March 10, 2024
                      </Badge>
                      <h3 className="text-lg font-medium text-white mb-1">Cheers Beta Launch Party</h3>
                      <p className="text-sm text-gray-400">
                        Virtual celebration of our beta release with demos and Q&A
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-4">
                  <Button variant="link" className="w-full text-amber-500 hover:text-amber-400">
                    View Recording
                  </Button>
                </CardFooter>
              </Card>

              {/* Past Event 2 */}
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="/events/ama-session.jpg" alt="AMA Session" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400 mb-2">
                        February 22, 2024
                      </Badge>
                      <h3 className="text-lg font-medium text-white mb-1">AMA with Cheers Founders</h3>
                      <p className="text-sm text-gray-400">Live Q&A session with the founding team</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-4">
                  <Button variant="link" className="w-full text-amber-500 hover:text-amber-400">
                    View Recording
                  </Button>
                </CardFooter>
              </Card>

              {/* Past Event 3 */}
              <Card className="bg-[#252530] border-0">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="h-16 w-16 rounded-lg overflow-hidden flex-shrink-0">
                      <img src="/events/solana-meetup.jpg" alt="Solana Meetup" className="h-full w-full object-cover" />
                    </div>
                    <div>
                      <Badge variant="outline" className="border-[#2d2d3a] text-gray-400 mb-2">
                        January 15, 2024
                      </Badge>
                      <h3 className="text-lg font-medium text-white mb-1">Solana Miami Meetup</h3>
                      <p className="text-sm text-gray-400">In-person networking event during Solana Miami</p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="border-t border-[#2d2d3a] p-4">
                  <Button variant="link" className="w-full text-amber-500 hover:text-amber-400">
                    View Photos
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-[#0e0e13]">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold text-white mb-4">Stay Updated on Events</h2>
              <p className="text-gray-400 mb-6">
                Subscribe to our newsletter to get notified about upcoming events and community activities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full sm:max-w-xs px-4 py-2 bg-[#252530] border border-[#2d2d3a] rounded-md text-white"
                />
                <Button className="bg-amber-600 hover:bg-amber-700 text-white">Subscribe</Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
