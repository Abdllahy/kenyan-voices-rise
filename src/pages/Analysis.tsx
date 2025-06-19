
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MapPin, Clock } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 sm:py-16">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-500 to-purple-600 rounded-2xl mb-6">
              <BarChart3 className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent leading-tight">
              Data Analysis
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Comprehensive analysis of femicide cases in Kenya from 2016-2024. 
              These visualizations reveal critical patterns and insights that demand immediate action.
            </p>
          </div>
        </FadeInSection>

        {/* Key Statistics */}
        <FadeInSection delay={200}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-16">
            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-rose-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">930+</h3>
                <p className="text-sm text-gray-600">Documented cases</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">47</h3>
                <p className="text-sm text-gray-600">Counties affected</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">8+</h3>
                <p className="text-sm text-gray-600">Years analyzed</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-sm hover:shadow-md transition-all duration-300 bg-white/80 backdrop-blur">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-orange-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-1">70%</h3>
                <p className="text-sm text-gray-600">Partner violence</p>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>

        {/* Canva Embed */}
        <FadeInSection delay={300}>
          <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-500 bg-white/90 backdrop-blur overflow-hidden">
            <CardContent className="p-0">
              <div style={{
                position: 'relative',
                width: '100%',
                height: 0,
                paddingTop: '56.2500%',
                paddingBottom: 0,
                boxShadow: '0 2px 8px 0 rgba(63,69,81,0.16)',
                marginTop: '1.6em',
                marginBottom: '0.9em',
                overflow: 'hidden',
                borderRadius: '8px',
                willChange: 'transform'
              }}>
                <iframe
                  loading="lazy"
                  style={{
                    position: 'absolute',
                    width: '100%',
                    height: '100%',
                    top: 0,
                    left: 0,
                    border: 'none',
                    padding: 0,
                    margin: 0
                  }}
                  src="https://www.canva.com/design/DAGqxn3ZxJI/2-2smOJSpah8AOdpxQbEzQ/view?embed"
                  allowFullScreen
                  allow="fullscreen"
                />
              </div>
              <div className="p-4">
                <a 
                  href="https://www.canva.com/design/DAGqxn3ZxJI/2-2smOJSpah8AOdpxQbEzQ/view?utm_content=DAGqxn3ZxJI&utm_campaign=designshare&utm_medium=embeds&utm_source=link" 
                  target="_blank" 
                  rel="noopener"
                  className="text-sm text-gray-500 hover:text-gray-700 transition-colors"
                >
                  View full presentation →
                </a>
              </div>
            </CardContent>
          </Card>
        </FadeInSection>

        {/* Call to Action */}
        <FadeInSection delay={400}>
          <Card className="mt-16 border-0 shadow-sm bg-gradient-to-br from-gray-900 to-gray-800 text-white overflow-hidden">
            <CardContent className="p-8 sm:p-12 text-center relative">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-500/10 to-purple-500/10"></div>
              <div className="relative z-10">
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">Take Action</h2>
                <p className="text-gray-300 text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
                  These statistics represent real lives lost and families destroyed. 
                  Every data point is a call to action for justice, prevention, and change.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="px-8 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                    Share This Analysis
                  </button>
                  <button className="px-8 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                    Get Involved
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

export default Analysis;
