
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MapPin, Clock, AlertTriangle } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { useToast } from "@/hooks/use-toast";

interface GraphData {
  id: string;
  title: string;
  description: string;
  image_url: string;
  order_index: number;
  category: string;
}

const Analysis = () => {
  const [graphs, setGraphs] = useState<GraphData[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    fetchGraphs();
  }, []);

  const fetchGraphs = async () => {
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

      setGraphs(data || []);
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
        return <Clock className="w-6 h-6" />;
      case 'demographics':
        return <Users className="w-6 h-6" />;
      case 'geography':
        return <MapPin className="w-6 h-6" />;
      case 'trends':
        return <TrendingUp className="w-6 h-6" />;
      case 'methods':
        return <AlertTriangle className="w-6 h-6" />;
      default:
        return <BarChart3 className="w-6 h-6" />;
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-600 mx-auto"></div>
            <p className="mt-4 text-lg text-gray-600">Loading analysis...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
      <Header />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-800 via-rose-700 to-purple-800 bg-clip-text text-transparent">
              Femicide Data Analysis
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive analysis of femicide cases in Kenya from 2016-2024. 
              These visualizations reveal critical patterns, trends, and insights 
              that demand immediate attention and action.
            </p>
          </div>
        </FadeInSection>

        {/* Statistics Overview */}
        <FadeInSection delay={300}>
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center border-rose-200 hover:border-rose-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-6 h-6 text-rose-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-rose-700">930+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Documented femicide cases
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700">47</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Counties affected
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-rose-200 hover:border-rose-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-6 h-6 text-rose-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-rose-700">8+</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Years of analysis
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:border-purple-300 transition-colors">
              <CardHeader className="pb-2">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-2xl font-bold text-purple-700">70%</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600">
                  Intimate partner violence
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>

        {/* Analysis Graphs */}
        <div className="space-y-16">
          {graphs.length === 0 ? (
            <FadeInSection>
              <Card className="text-center p-12">
                <CardContent>
                  <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                  <CardTitle className="text-2xl mb-4 text-gray-600">No Analysis Data Available</CardTitle>
                  <CardDescription className="text-lg">
                    The analysis graphs are being prepared. Please check back soon.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInSection>
          ) : (
            graphs.map((graph, index) => (
              <FadeInSection key={graph.id} delay={index * 200}>
                <Card className="overflow-hidden shadow-xl border-0 bg-white/80 backdrop-blur">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-rose-600 text-white">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                        {getIconForCategory(graph.category)}
                      </div>
                      <div>
                        <CardTitle className="text-2xl font-bold">
                          {String(index + 1).padStart(2, '0')} {graph.title}
                        </CardTitle>
                        <CardDescription className="text-purple-100 text-base">
                          {graph.category.charAt(0).toUpperCase() + graph.category.slice(1)} Analysis
                        </CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative">
                        <img
                          src={graph.image_url}
                          alt={graph.title}
                          className="w-full h-full object-cover"
                          onError={(e) => {
                            console.error('Error loading image:', graph.image_url);
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
                      </div>
                      <div className="p-8 flex flex-col justify-center">
                        <div className="prose prose-lg max-w-none">
                          <p className="text-gray-700 leading-relaxed text-lg">
                            {graph.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </FadeInSection>
            ))
          )}
        </div>

        {/* Call to Action */}
        <FadeInSection delay={600}>
          <Card className="mt-16 bg-gradient-to-r from-purple-700 to-rose-700 text-white border-0">
            <CardContent className="p-12 text-center">
              <CardTitle className="text-3xl mb-6">Take Action</CardTitle>
              <CardDescription className="text-purple-100 text-lg mb-8 max-w-3xl mx-auto">
                These statistics represent real lives lost, families destroyed, and a society that must do better. 
                Every data point is a call to action for justice, prevention, and change.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                  Share This Analysis
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors">
                  Get Involved
                </button>
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
