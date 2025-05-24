
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, MapPin, ExternalLink, AlertTriangle, Heart } from 'lucide-react';

const Resources = () => {
  const emergencyContacts = [
    {
      name: "National Police Emergency",
      number: "999",
      description: "Immediate emergency response"
    },
    {
      name: "Gender Violence Recovery Centre",
      number: "0719 999 999",
      description: "24/7 GBV crisis helpline"
    },
    {
      name: "Coalition on Violence Against Women (COVAW)",
      number: "0720 374 258",
      description: "Support and counseling services"
    },
    {
      name: "Kenya Women's Rights Association (KEWRA)",
      number: "0722 828 332",
      description: "Legal aid and advocacy"
    }
  ];

  const supportOrganizations = [
    {
      name: "Federation of Women Lawyers (FIDA Kenya)",
      contact: "info@fidakenya.org",
      website: "https://fidakenya.org",
      services: "Legal aid, counseling, and advocacy for women's rights"
    },
    {
      name: "Wangu Kanja Foundation",
      contact: "info@wangukanja.org", 
      website: "https://wangukanja.org",
      services: "Crime prevention and victim support"
    },
    {
      name: "Centre for Rights Education and Awareness (CREAW)",
      contact: "creaw@creawkenya.org",
      website: "https://creawkenya.org", 
      services: "Women's rights advocacy and education"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
      <Header />
      
      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-3 mb-6">
            <Heart className="w-10 h-10 text-rose-600" />
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-800 to-rose-700 bg-clip-text text-transparent">
              Support & Resources
            </h1>
          </div>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            If you or someone you know is experiencing gender-based violence, help is available. 
            You are not alone, and support is just a call away.
          </p>
        </div>

        {/* Emergency Alert */}
        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-lg mb-12">
          <div className="flex items-center space-x-3 mb-3">
            <AlertTriangle className="w-6 h-6 text-red-600" />
            <h2 className="text-xl font-bold text-red-800">Emergency Situation?</h2>
          </div>
          <p className="text-red-700 mb-4">
            If you are in immediate danger, call <strong>999</strong> (National Police) or 
            <strong> 0719 999 999</strong> (Gender Violence Recovery Centre) right away.
          </p>
          <p className="text-red-600 text-sm">
            Your safety is the top priority. Trust your instincts and seek help immediately.
          </p>
        </div>

        {/* Emergency Contacts */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Emergency Contacts</h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {emergencyContacts.map((contact, index) => (
              <div key={index} className="bg-rose-50 rounded-lg p-6 border border-rose-200">
                <div className="flex items-center space-x-3 mb-3">
                  <Phone className="w-6 h-6 text-rose-600" />
                  <h3 className="text-lg font-semibold text-gray-800">{contact.name}</h3>
                </div>
                <p className="text-2xl font-bold text-rose-600 mb-2">{contact.number}</p>
                <p className="text-gray-600">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Support Organizations */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Support Organizations</h2>
          
          <div className="space-y-6">
            {supportOrganizations.map((org, index) => (
              <div key={index} className="bg-purple-50 rounded-lg p-6 border border-purple-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{org.name}</h3>
                <div className="grid md:grid-cols-2 gap-4 mb-3">
                  <div className="flex items-center space-x-2">
                    <Mail className="w-4 h-4 text-purple-600" />
                    <span className="text-gray-700">{org.contact}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4 text-purple-600" />
                    <a href={org.website} target="_blank" rel="noopener noreferrer" 
                       className="text-purple-600 hover:text-purple-800 transition-colors">
                      Visit Website
                    </a>
                  </div>
                </div>
                <p className="text-gray-600">{org.services}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Tips */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Safety Planning</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-purple-800 mb-4">If You're in Danger</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Trust your instincts about your safety</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Have an emergency bag ready with essentials</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Memorize important phone numbers</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Identify safe places you can go quickly</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-purple-600 font-bold">•</span>
                  <span>Tell trusted friends or family about your situation</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold text-rose-800 mb-4">Supporting Others</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Listen without judgment</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Believe their story and validate their feelings</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Help them connect with professional support</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Respect their decisions and timeline</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-rose-600 font-bold">•</span>
                  <span>Continue to check in and offer support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-purple-600 to-rose-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-4">Remember: Help is Available</h3>
          <p className="text-lg mb-6 opacity-90">
            You deserve to be safe, respected, and free from violence. 
            Reaching out for help is a sign of strength, not weakness.
          </p>
          <div className="bg-white/10 rounded-lg p-4 max-w-2xl mx-auto">
            <p className="text-rose-200 font-medium">
              Crisis Helpline: 0719 999 999 (Available 24/7)
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Resources;
