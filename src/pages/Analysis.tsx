
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BarChart3, TrendingUp, AlertTriangle, Users } from 'lucide-react';

const Analysis = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center space-x-3 mb-6">
            <BarChart3 className="w-10 h-10 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-rose-700 bg-clip-text text-transparent">
              Femicide in Kenya: Data Analysis
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Comprehensive analysis of femicide cases in Kenya from 2016-2024. 
            These numbers represent real women, real lives, and real stories that demand our attention and action.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-500">
            <div className="flex items-center space-x-3 mb-3">
              <TrendingUp className="w-6 h-6 text-rose-600" />
              <h3 className="text-lg font-semibold text-gray-800">Data Period</h3>
            </div>
            <p className="text-3xl font-bold text-rose-600 mb-2">2016-2024</p>
            <p className="text-gray-600">8 years of documented cases</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div className="flex items-center space-x-3 mb-3">
              <AlertTriangle className="w-6 h-6 text-purple-600" />
              <h3 className="text-lg font-semibold text-gray-800">Critical Issue</h3>
            </div>
            <p className="text-lg font-bold text-purple-600 mb-2">Gender-Based Violence</p>
            <p className="text-gray-600">Systematic analysis of femicide patterns</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-rose-400">
            <div className="flex items-center space-x-3 mb-3">
              <Users className="w-6 h-6 text-rose-500" />
              <h3 className="text-lg font-semibold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-lg font-bold text-rose-500 mb-2">Raise Awareness</p>
            <p className="text-gray-600">Amplify voices, demand justice</p>
          </div>
        </div>

        {/* Main Analysis Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Detailed Analysis Report
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              This comprehensive analysis examines trends, patterns, and critical insights 
              into femicide cases across Kenya. The data reveals urgent need for systemic change 
              and increased protection for women and girls.
            </p>
          </div>

          {/* Updated Canva Report */}
          <div className="relative rounded-xl overflow-hidden shadow-lg">
            <div style={{
              position: 'relative', 
              width: '100%', 
              height: '0', 
              paddingTop: '281.1127%',
              paddingBottom: '0', 
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
                  top: '0', 
                  left: '0', 
                  border: 'none', 
                  padding: '0',
                  margin: '0'
                }}
                src="https://www.canva.com/design/DAGoAOvigA4/VCN4O9VEE1DeKJ-RUYD3jg/watch?embed" 
                allowFullScreen 
                allow="fullscreen"
              />
            </div>
          </div>

          <div className="text-center mt-6">
            <a 
              href="https://www.canva.com/design/DAGoAOvigA4/VCN4O9VEE1DeKJ-RUYD3jg/watch" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-rose-600 hover:text-rose-800 font-medium transition-colors"
            >
              <span>View Full Report by abyogia</span>
              <TrendingUp className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Every Data Point Represents a Life</h3>
          <p className="text-lg mb-6 opacity-90">
            Behind every statistic is a woman whose voice was silenced. 
            We must act to prevent future tragedies and support survivors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors">
              Share This Report
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
              Get Involved
            </button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Analysis;
