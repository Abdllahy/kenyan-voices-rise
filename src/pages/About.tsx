
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, Target, Users, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Heart className="w-10 h-10 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-rose-700 bg-clip-text text-transparent">
              About Our Mission
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Voices Unsilenced is dedicated to raising awareness about femicide in Kenya, 
            honoring the memory of victims, and advocating for systemic change to protect women and girls.
          </p>
        </div>

        {/* Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Target className="w-8 h-8 text-rose-600" />
              <h2 className="text-2xl font-bold text-gray-800">Our Purpose</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We believe that data tells a story - a story of lives lost, families shattered, 
              and communities affected by gender-based violence. Our mission is to transform 
              statistics into actionable awareness.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through comprehensive analysis and compelling storytelling, we aim to break 
              the silence surrounding femicide and mobilize communities toward prevention and justice.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-purple-600" />
              <h2 className="text-2xl font-bold text-gray-800">Our Vision</h2>
            </div>
            <p className="text-gray-700 leading-relaxed mb-4">
              We envision a Kenya where every woman and girl lives free from the fear of 
              gender-based violence. A society where their voices are heard, their rights 
              are protected, and their safety is guaranteed.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Through education, advocacy, and community engagement, we work toward systemic 
              change that addresses the root causes of femicide and creates lasting protection.
            </p>
          </div>
        </div>

        {/* Key Focus Areas */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Our Focus Areas</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Data Analysis</h3>
              <p className="text-gray-600">
                Comprehensive analysis of femicide trends, patterns, and statistics 
                to understand the scope and nature of the crisis.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Community Awareness</h3>
              <p className="text-gray-600">
                Raising public awareness about gender-based violence and mobilizing 
                communities to take action for prevention and support.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-rose-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Advocacy</h3>
              <p className="text-gray-600">
                Advocating for policy changes, improved legal frameworks, and better 
                protection systems for women and girls at risk.
              </p>
            </div>
          </div>
        </div>

        {/* Memorial Section */}
        <div className="bg-gradient-to-r from-purple-800 to-rose-800 rounded-2xl p-12 text-white text-center">
          <Heart className="w-12 h-12 mx-auto mb-6 text-rose-300" />
          <h2 className="text-3xl font-bold mb-6">In Memory of Every Voice Silenced</h2>
          <p className="text-lg mb-8 opacity-90 max-w-3xl mx-auto">
            We honor the memory of every woman and girl whose life was taken by gender-based violence. 
            Their stories fuel our determination to create a safer world for future generations.
          </p>
          <div className="bg-white/10 rounded-lg p-6 max-w-2xl mx-auto">
            <p className="text-rose-200 italic text-lg">
              "We cannot change the past, but we can shape the future. 
              Every voice raised in awareness brings us closer to justice and prevention."
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
