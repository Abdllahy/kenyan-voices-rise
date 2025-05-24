
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Heart, BarChart3, TrendingUp, Users, ArrowRight, Shield } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <Heart className="w-16 h-16 mx-auto text-rose-600 mb-6" />
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-rose-700 to-purple-800 bg-clip-text text-transparent leading-tight">
              Voices Unsilenced
            </h1>
            <p className="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed">
              Breaking the silence on femicide in Kenya
            </p>
          </div>
          
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
            Every woman's story matters. Every life lost demands justice. 
            Through data, awareness, and action, we honor their memory and work toward a safer future for all women and girls in Kenya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              to="/analysis" 
              className="inline-flex items-center space-x-3 bg-gradient-to-r from-rose-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:from-rose-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <BarChart3 className="w-6 h-6" />
              <span>View Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link 
              to="/resources" 
              className="inline-flex items-center space-x-3 border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-xl font-semibold text-lg hover:bg-purple-600 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              <Shield className="w-6 h-6" />
              <span>Get Support</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics Overview */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The Reality We Face</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Understanding the scope of femicide in Kenya through comprehensive data analysis from 2016-2024
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <TrendingUp className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">8 Years</h3>
            <p className="text-gray-600 text-lg">of documented femicide cases analyzed (2016-2024)</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <BarChart3 className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Data-Driven</h3>
            <p className="text-gray-600 text-lg">Comprehensive analysis revealing critical patterns and trends</p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-xl p-8 text-center transform hover:scale-105 transition-transform duration-300">
            <div className="bg-rose-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-rose-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-3">Every Life</h3>
            <p className="text-gray-600 text-lg">Matters - honoring victims while demanding justice</p>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gradient-to-r from-purple-700 via-rose-600 to-purple-700 rounded-3xl p-12 text-white text-center shadow-2xl">
          <Heart className="w-12 h-12 mx-auto mb-6 text-rose-200" />
          <h2 className="text-4xl font-bold mb-6">Together, We Can Make a Difference</h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto leading-relaxed">
            Gender-based violence thrives in silence. By raising our voices, sharing data, 
            and demanding action, we can create a Kenya where every woman and girl is safe, 
            valued, and protected.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3 text-rose-200">Raise Awareness</h3>
              <p className="text-sm opacity-90">Share this data and stories to break the silence</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3 text-rose-200">Support Survivors</h3>
              <p className="text-sm opacity-90">Connect with organizations providing crucial help</p>
            </div>
            <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
              <h3 className="text-lg font-semibold mb-3 text-rose-200">Demand Justice</h3>
              <p className="text-sm opacity-90">Advocate for policy changes and better protection</p>
            </div>
          </div>
        </div>
      </section>

      {/* Memorial Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-8">In Memory</h2>
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <p className="text-2xl text-gray-700 italic leading-relaxed mb-8">
              "We remember every woman and girl whose voice was silenced. 
              Their stories live on through our commitment to justice, 
              our dedication to change, and our promise that they will never be forgotten."
            </p>
            <div className="flex justify-center space-x-2">
              {[...Array(7)].map((_, i) => (
                <Heart key={i} className="w-6 h-6 text-rose-400" />
              ))}
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
