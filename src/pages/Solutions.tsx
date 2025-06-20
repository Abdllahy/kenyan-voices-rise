
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Shield, Users, Scale, AlertTriangle, Heart, BookOpen } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const Solutions = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-600 rounded-2xl mb-6">
              <Shield className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Solutions & Prevention
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive strategies and actionable solutions to prevent gender-based violence 
              and create a safer society for all women in Kenya.
            </p>
          </div>
        </FadeInSection>

        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          <FadeInSection delay={200}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Scale className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Legal Reform</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Strengthen domestic violence laws</li>
                  <li>• Fast-track court processes for GBV cases</li>
                  <li>• Establish specialized GBV courts</li>
                  <li>• Improve police response protocols</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={300}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Education & Awareness</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Gender equality in schools</li>
                  <li>• Community awareness campaigns</li>
                  <li>• Male engagement programs</li>
                  <li>• Media advocacy initiatives</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={400}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Community Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Neighborhood watch programs</li>
                  <li>• Survivor support networks</li>
                  <li>• Cultural change initiatives</li>
                  <li>• Religious leader engagement</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={500}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                  <Heart className="w-6 h-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl">Survivor Services</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Safe houses and shelters</li>
                  <li>• Counseling and therapy</li>
                  <li>• Economic empowerment programs</li>
                  <li>• Medical and legal aid</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={600}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mb-4">
                  <AlertTriangle className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Early Warning Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Risk assessment tools</li>
                  <li>• Emergency response protocols</li>
                  <li>• Technology-based alerts</li>
                  <li>• Community reporting systems</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>

          <FadeInSection delay={700}>
            <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-300 bg-white/90 backdrop-blur h-full">
              <CardHeader>
                <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                  <Shield className="w-6 h-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Prevention Programs</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-gray-600">
                  <li>• Youth mentorship programs</li>
                  <li>• Conflict resolution training</li>
                  <li>• Anger management courses</li>
                  <li>• Healthy relationship education</li>
                </ul>
              </CardContent>
            </Card>
          </FadeInSection>
        </div>

        {/* Call to Action */}
        <FadeInSection delay={800}>
          <Card className="border-0 shadow-sm bg-gradient-to-br from-blue-900 to-green-800 text-white overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-green-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Be Part of the Solution</h2>
                <p className="text-blue-100 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  Every individual has a role to play in ending gender-based violence. 
                  Together, we can create lasting change and save lives.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Join Our Movement
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Donate Now
                  </button>
                </div>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
