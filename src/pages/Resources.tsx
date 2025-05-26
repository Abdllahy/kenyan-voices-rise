import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  Phone,
  Mail,
  ExternalLink,
  AlertTriangle,
  Shield,
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import HeartBeatIcon from "@/components/HeartBeatIcon";

const Resources = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const emergencyContacts = [
    {
      name: "National Police Emergency",
      number: "999",
      description: "Immediate emergency response",
    },
    {
      name: "Gender Violence Recovery Centre",
      number: "0719 999 999",
      description: "24/7 GBV crisis helpline",
    },
    {
      name: "Coalition on Violence Against Women (COVAW)",
      number: "0720 374 258",
      description: "Support and counseling services",
    },
    {
      name: "Kenya Women's Rights Association (KEWRA)",
      number: "0722 828 332",
      description: "Legal aid and advocacy",
    },
  ];

  const supportOrganizations = [
    {
      name: "Federation of Women Lawyers (FIDA Kenya)",
      contact: "info@fidakenya.org",
      website: "https://fidakenya.org",
      services: "Legal aid, counseling, and advocacy for women's rights",
    },
    {
      name: "Wangu Kanja Foundation",
      contact: "info@wangukanja.org",
      website: "https://wangukanja.org",
      services: "Crime prevention and victim support",
    },
    {
      name: "Centre for Rights Education and Awareness (CREAW)",
      contact: "creaw@creawkenya.org",
      website: "https://creawkenya.org",
      services: "Women's rights advocacy and education",
    },
  ];

  return (
    <ParallaxBackground>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
        <Header />

        <main className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <FadeInSection>
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-3 mb-6">
                <HeartBeatIcon
                  size={40}
                  className="text-rose-600"
                  interval={1800}
                />
                <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-rose-700 bg-clip-text text-transparent">
                  Support & Resources
                </h1>
              </div>
              <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
                If you or someone you know is experiencing gender-based
                violence, help is available. You are not alone, and support is
                just a call away.
              </p>
            </div>
          </FadeInSection>

          {/* Emergency Alert */}
          <FadeInSection delay={200}>
            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12 shadow-md hover:shadow-lg transition-shadow duration-300 relative overflow-hidden">
              {/* Pulsing background */}
              <div className="absolute -right-16 -bottom-16 w-64 h-64 bg-red-100 rounded-full opacity-30 animate-pulse-slow"></div>

              <div className="relative z-10">
                <div className="flex items-center space-x-3 mb-3">
                  <AlertTriangle className="w-6 h-6 text-red-600 animate-bounce-gentle" />
                  <h2 className="text-xl font-bold text-red-800">
                    Emergency Situation?
                  </h2>
                </div>
                <p className="text-red-700 mb-4">
                  If you are in immediate danger, call <strong>999</strong>{" "}
                  (National Police) or
                  <strong> 0719 999 999</strong> (Gender Violence Recovery
                  Centre) right away.
                </p>
                <p className="text-red-600 text-sm">
                  Your safety is the top priority. Trust your instincts and seek
                  help immediately.
                </p>
              </div>
            </div>
          </FadeInSection>

          {/* Emergency Contacts */}
          <FadeInSection delay={300}>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-rose-100 hover:border-rose-200 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Emergency Contacts
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {emergencyContacts.map((contact, index) => (
                  <div
                    key={index}
                    className="bg-rose-50 rounded-lg p-6 border border-rose-200 hover:border-rose-300 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-md"
                    onMouseEnter={() => setHoveredCard(index)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="relative">
                        <Phone className="w-6 h-6 text-rose-600" />
                        {hoveredCard === index && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 bg-rose-400 rounded-full animate-ping opacity-75"></div>
                        )}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-800">
                        {contact.name}
                      </h3>
                    </div>
                    <p className="text-2xl font-bold text-rose-600 mb-2 transition-all duration-300 transform hover:scale-105">
                      {contact.number}
                    </p>
                    <p className="text-gray-600">{contact.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Support Organizations */}
          <FadeInSection delay={400}>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-purple-100 hover:border-purple-200 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Support Organizations
              </h2>

              <div className="space-y-6">
                {supportOrganizations.map((org, index) => (
                  <div
                    key={index}
                    className="bg-purple-50 rounded-lg p-6 border border-purple-200 hover:border-purple-300 transition-all duration-300 transform hover:scale-[1.01] hover:shadow-md"
                  >
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">
                      {org.name}
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4 mb-3">
                      <div className="flex items-center space-x-2 group">
                        <Mail className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                        <span className="text-gray-700">{org.contact}</span>
                      </div>
                      <div className="flex items-center space-x-2 group">
                        <ExternalLink className="w-4 h-4 text-purple-600 group-hover:scale-110 transition-transform" />
                        <a
                          href={org.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 hover:text-purple-800 transition-colors relative inline-block"
                        >
                          Visit Website
                          <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-purple-600 group-hover:w-full transition-all duration-300"></span>
                        </a>
                      </div>
                    </div>
                    <p className="text-gray-600">{org.services}</p>
                  </div>
                ))}
              </div>
            </div>
          </FadeInSection>

          {/* Safety Tips */}
          <FadeInSection delay={500}>
            <div className="bg-white rounded-2xl shadow-xl p-8 mb-12 border border-purple-100 hover:border-purple-200 transition-colors duration-300">
              <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
                Safety Planning
              </h2>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-purple-800 mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-purple-600" />
                    If You're in Danger
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Trust your instincts about your safety",
                      "Have an emergency bag ready with essentials",
                      "Memorize important phone numbers",
                      "Identify safe places you can go quickly",
                      "Tell trusted friends or family about your situation",
                    ].map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 group hover:bg-purple-50 p-2 rounded-md transition-colors duration-200"
                      >
                        <span className="text-purple-600 font-bold group-hover:scale-125 transition-transform">
                          •
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="transform hover:scale-[1.01] transition-transform duration-300">
                  <h3 className="text-xl font-semibold text-rose-800 mb-4 flex items-center">
                    <HeartBeatIcon
                      size={20}
                      className="mr-2 text-rose-600"
                      interval={2000}
                    />
                    Supporting Others
                  </h3>
                  <ul className="space-y-3 text-gray-700">
                    {[
                      "Listen without judgment",
                      "Believe their story and validate their feelings",
                      "Help them connect with professional support",
                      "Respect their decisions and timeline",
                      "Continue to check in and offer support",
                    ].map((tip, index) => (
                      <li
                        key={index}
                        className="flex items-start space-x-2 group hover:bg-rose-50 p-2 rounded-md transition-colors duration-200"
                      >
                        <span className="text-rose-600 font-bold group-hover:scale-125 transition-transform">
                          •
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </FadeInSection>

          {/* Call to Action */}
          <FadeInSection delay={600}>
            <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl p-8 text-white text-center relative overflow-hidden">
              {/* Animated sparkles */}
              <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute animate-float"
                    style={{
                      top: `${Math.random() * 100}%`,
                      left: `${Math.random() * 100}%`,
                      animationDuration: `${3 + Math.random() * 7}s`,
                      animationDelay: `${Math.random() * 5}s`,
                    }}
                  >
                    <Sparkles className="text-white/20 w-4 h-4" />
                  </div>
                ))}
              </div>

              <h3 className="text-2xl font-bold mb-4 relative z-10">
                Remember: Help is Available
              </h3>
              <p className="text-lg mb-6 opacity-90 relative z-10">
                You deserve to be safe, respected, and free from violence.
                Reaching out for help is a sign of strength, not weakness.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 max-w-2xl mx-auto border border-white/10 hover:border-white/30 hover:bg-white/20 transition-all duration-300 transform hover:scale-105 relative z-10">
                <p className="text-rose-200 font-medium flex items-center justify-center">
                  <Phone className="w-5 h-5 mr-2 animate-pulse-slow" />
                  Crisis Helpline: 0719 999 999 (Available 24/7)
                </p>
              </div>
            </div>
          </FadeInSection>
        </main>

        <Footer />
      </div>
    </ParallaxBackground>
  );
};

export default Resources;
