
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MapPin, Clock, AlertTriangle, Download, Share2, ExternalLink } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { useToast } from "@/hooks/use-toast";

interface AnalysisGraph {
  id: string;
  title: string;
  description: string;
  image_url: string;
  category: string;
  order_index: number;
}

const Analysis = () => {
  const [graphs, setGraphs] = useState<AnalysisGraph[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchGraphsFromDatabase();
  }, []);

  const fetchGraphsFromDatabase = async () => {
    try {
      const { data, error } = await supabase
        .from('analysis_graphs')
        .select('*')
        .order('order_index', { ascending: true });

      if (error) {
        console.error('Error fetching graphs:', error);
        toast({
          title: "Error loading graphs",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      if (!data || data.length === 0) {
        toast({
          title: "No graphs found",
          description: "Please upload graph images to the analysis-graphs bucket.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Get public URLs for the images from storage
      const graphsWithUrls = data.map(graph => {
        const { data: urlData } = supabase.storage
          .from('analysis-graphs')
          .getPublicUrl(graph.image_url);
        
        return {
          ...graph,
          image_url: urlData.publicUrl
        };
      });

      setGraphs(graphsWithUrls);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error loading graphs",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const getIconForCategory = (category: string) => {
    switch (category.toLowerCase()) {
      case 'timeline':
        return <Clock className="w-5 h-5" />;
      case 'demographics':
        return <Users className="w-5 h-5" />;
      case 'geography':
        return <MapPin className="w-5 h-5" />;
      case 'trends':
        return <TrendingUp className="w-5 h-5" />;
      case 'methods':
        return <AlertTriangle className="w-5 h-5" />;
      default:
        return <BarChart3 className="w-5 h-5" />;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'timeline':
        return 'from-blue-500 to-cyan-500';
      case 'demographics':
        return 'from-purple-500 to-pink-500';
      case 'geography':
        return 'from-green-500 to-emerald-500';
      case 'trends':
        return 'from-rose-500 to-orange-500';
      case 'methods':
        return 'from-red-500 to-rose-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-rose-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading analysis...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

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

        {/* Analysis Graphs */}
        <div className="space-y-12">
          {graphs.length === 0 ? (
            <FadeInSection>
              <Card className="border-0 shadow-sm bg-white/80 backdrop-blur">
                <CardContent className="p-12 text-center">
                  <div className="w-16 h-16 bg-gray-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <BarChart3 className="w-8 h-8 text-gray-400" />
                  </div>
                  <CardTitle className="text-2xl mb-4 text-gray-600">No Analysis Data Available</CardTitle>
                  <CardDescription className="text-lg max-w-md mx-auto">
                    Please upload graph images to the analysis-graphs storage bucket in Supabase to display the analysis.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInSection>
          ) : (
            graphs.map((graph, index) => (
              <FadeInSection key={graph.id} delay={index * 100}>
                <Card className="border-0 shadow-sm hover:shadow-lg transition-all duration-500 bg-white/90 backdrop-blur overflow-hidden group">
                  <div className="grid lg:grid-cols-5 gap-0">
                    {/* Content Section */}
                    <div className="lg:col-span-3 p-8 sm:p-12 flex flex-col justify-center">
                      <div className="mb-6">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-br ${getCategoryColor(graph.category)} rounded-xl flex items-center justify-center`}>
                            {getIconForCategory(graph.category)}
                          </div>
                          <div>
                            <span className="text-sm font-medium text-gray-500 uppercase tracking-wider">
                              {graph.category}
                            </span>
                            <div className="text-xs text-gray-400">
                              Analysis {String(index + 1).padStart(2, '0')}
                            </div>
                          </div>
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                          {graph.title}
                        </h2>
                      </div>
                      
                      <p className="text-gray-700 text-lg leading-relaxed mb-8">
                        {graph.description}
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <button className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors text-sm font-medium">
                          <Download className="w-4 h-4" />
                          <span>Download</span>
                        </button>
                        <button className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <Share2 className="w-4 h-4" />
                          <span>Share</span>
                        </button>
                        <button className="inline-flex items-center space-x-2 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium">
                          <ExternalLink className="w-4 h-4" />
                          <span>Full View</span>
                        </button>
                      </div>
                    </div>

                    {/* Image Section */}
                    <div className="lg:col-span-2 relative overflow-hidden bg-gray-50">
                      <img
                        src={graph.image_url}
                        alt={graph.title}
                        className="w-full h-64 sm:h-80 lg:h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        onError={(e) => {
                          console.error('Error loading image:', graph.image_url);
                          e.currentTarget.src = '/placeholder.svg';
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    </div>
                  </div>
                </Card>
              </FadeInSection>
            ))
          )}
        </div>

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
