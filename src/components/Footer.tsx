
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-900 to-rose-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-rose-300" />
              <span className="text-xl font-bold">Voices Unsilenced</span>
            </div>
            <p className="text-purple-200 leading-relaxed">
              Dedicated to raising awareness about femicide in Kenya and supporting survivors. 
              Together, we amplify voices and demand justice.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-300">Emergency Contacts</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>National Police: 999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-rose-400" />
                <span>Gender Violence Recovery Centre: 0719 999 999</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-rose-400" />
                <span>support@voicesunsilenced.org</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-rose-300">Remember</h3>
            <blockquote className="text-purple-200 italic leading-relaxed">
              "Every woman's voice matters. Every story deserves to be heard. 
              Every life lost will not be forgotten."
            </blockquote>
          </div>
        </div>
        
        <div className="border-t border-purple-700 mt-8 pt-6 text-center">
          <p className="text-purple-300">
            © 2024 Voices Unsilenced. Created with love to honor and remember.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
