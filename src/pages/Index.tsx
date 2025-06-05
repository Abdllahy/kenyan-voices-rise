
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import {
  BarChart3,
  TrendingUp,
  Users,
  ArrowRight,
  Shield,
  Heart,
  Eye,
  Megaphone,
} from "lucide-react";
import { useEffect, useState } from "react";
import FadeInSection from "@/components/FadeInSection";
import ParallaxBackground from "@/components/ParallaxBackground";
import HeartBeatIcon from "@/components/HeartBeatIcon";
import AnimatedCounter from "@/components/AnimatedCounter";

const Index = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ParallaxBackground>
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
        <Header />

        {/* Hero Section */}
        <section className="container mx-auto px-4 py-12 sm:py-20 relative overflow-hidden">
          {/* Simplified animated background elements */}
          <div className="absolute top-10 sm:top-20 left-5 sm:left-10 w-32 sm:w-64 h-32 sm:h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-20 sm:top-40 right-5 sm:right-10 w-32 sm:w-64 h-32 sm:h-64 bg-rose-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-10 sm:bottom-20 left-1/3 w-24 sm:w-64 h-24 sm:h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>

          <div className="text-center max-w-5xl mx-auto relative z-10">
            <div className="mb-6 sm:mb-8">
              <div className="relative inline-block">
                <HeartBeatIcon
                  size={48}
                  className="mx-auto mb-4 sm:mb-6 sm:w-16 sm:h-16"
                  interval={1500}
                />
                <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 animate-ping rounded-full h-3 w-3 sm:h-4 sm:w-4 bg-rose-400 opacity-75"></div>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-800 via-rose-700 to-purple-800 bg-clip-text text-transparent leading-tight animate-fade-in">
                Voices Unsilenced
              </h1>
              <p className="text-lg sm:text-2xl md:text-3xl text-gray-700 font-light leading-relaxed animate-slide-up">
                Breaking the silence on femicide in Kenya
              </p>
            </div>

            <FadeInSection delay={300}>
              <p className="text-base sm:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-8 sm:mb-12 px-4">
                Every woman's story matters. Every life lost demands justice.
                Through data, awareness, and action, we honor their memory and
                work toward a safer future for all women and girls in Kenya.
              </p>
            </FadeInSection>

            <FadeInSection delay={600}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center px-4">
                <Link
                  to="/analysis"
                  className="inline-flex items-center justify-center space-x-3 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:from-rose-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>View Analysis</span>
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center space-x-3 border-2 border-purple-600 text-purple-600 px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  <Shield className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span>Get Support</span>
                </Link>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Statistics Overview */}
        <section className="container mx-auto px-4 py-12 sm:py-16">
          <FadeInSection>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-4">
                The Reality We Face
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
                Understanding the scope of femicide in Kenya through
                comprehensive data analysis from 2016-2024
              </p>
            </div>
          </FadeInSection>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <FadeInSection direction="up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 border border-rose-100 hover:border-rose-200 hover:shadow-2xl">
                <div className="bg-rose-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:bg-rose-200 transition-colors">
                  <TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  {mounted && <AnimatedCounter end={8} suffix=" Years" />}
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  of documented femicide cases analyzed (2016-2024)
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={300}>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 border border-purple-100 hover:border-purple-200 hover:shadow-2xl">
                <div className="bg-purple-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Data-Driven
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Comprehensive analysis revealing critical patterns and trends
                </p>
              </div>
            </FadeInSection>

            <FadeInSection direction="up" delay={500}>
              <div className="bg-white rounded-2xl shadow-xl p-6 sm:p-8 text-center transform hover:scale-105 transition-all duration-300 border border-rose-100 hover:border-rose-200 hover:shadow-2xl sm:col-span-2 lg:col-span-1">
                <div className="bg-rose-100 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                  <Users className="w-6 h-6 sm:w-8 sm:h-8 text-rose-600" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Every Life
                </h3>
                <p className="text-gray-600 text-base sm:text-lg">
                  Matters - honoring victims while demanding justice
                </p>
              </div>
            </FadeInSection>
          </div>
        </section>

        {/* Mission Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16">
          <FadeInSection>
            <div className="bg-gradient-to-r from-purple-700 via-rose-600 to-purple-700 rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white text-center shadow-2xl relative overflow-hidden">
              <HeartBeatIcon
                size={32}
                className="mx-auto mb-4 sm:mb-6 text-rose-200 sm:w-12 sm:h-12"
                interval={2000}
              />
              <h2 className="text-2xl sm:text-4xl font-bold mb-4 sm:mb-6">
                Together, We Can Make a Difference
              </h2>
              <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
                Gender-based violence thrives in silence. By raising our voices,
                sharing data, and demanding action, we can create a Kenya where
                every woman and girl is safe, valued, and protected.
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
                <FadeInSection direction="up" delay={100}>
                  <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/30">
                    <Eye className="w-6 h-6 sm:w-8 sm:h-8 text-rose-200 mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-rose-200">
                      Raise Awareness
                    </h3>
                    <p className="text-sm opacity-90">
                      Share this data and stories to break the silence
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection direction="up" delay={300}>
                  <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/30">
                    <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-rose-200 mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-rose-200">
                      Support Survivors
                    </h3>
                    <p className="text-sm opacity-90">
                      Connect with organizations providing crucial help
                    </p>
                  </div>
                </FadeInSection>

                <FadeInSection direction="up" delay={500}>
                  <div className="bg-white/10 rounded-xl p-4 sm:p-6 backdrop-blur hover:bg-white/20 transition-all duration-300 transform hover:scale-105 border border-white/10 hover:border-white/30 sm:col-span-2 lg:col-span-1">
                    <Megaphone className="w-6 h-6 sm:w-8 sm:h-8 text-rose-200 mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-3 text-rose-200">
                      Demand Justice
                    </h3>
                    <p className="text-sm opacity-90">
                      Advocate for policy changes and better protection
                    </p>
                  </div>
                </FadeInSection>
              </div>
            </div>
          </FadeInSection>
        </section>

        {/* Memorial Section */}
        <section className="container mx-auto px-4 py-12 sm:py-16">
          <FadeInSection>
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 mb-6 sm:mb-8">
                In Memory
              </h2>
              <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12 relative overflow-hidden">
                <p className="text-lg sm:text-2xl text-gray-700 italic leading-relaxed mb-6 sm:mb-8 relative z-10">
                  "We remember every woman and girl whose voice was silenced.
                  Their stories live on through our commitment to justice, our
                  dedication to change, and our promise that they will never be
                  forgotten."
                </p>
                <div className="flex justify-center space-x-2">
                  {[...Array(7)].map((_, i) => (
                    <HeartBeatIcon
                      key={i}
                      size={20}
                      className="text-rose-400 sm:w-6 sm:h-6"
                      interval={1000 + i * 300}
                    />
                  ))}
                </div>
              </div>
            </div>
          </FadeInSection>
        </section>

        <Footer />
      </div>
    </ParallaxBackground>
  );
};

export default Index;
