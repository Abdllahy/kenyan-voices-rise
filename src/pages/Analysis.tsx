
import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart3, TrendingUp, Users, MapPin, Clock, AlertTriangle, Download, Share2 } from "lucide-react";
import FadeInSection from "@/components/FadeInSection";
import { useToast } from "@/hooks/use-toast";

interface StorageFile {
  name: string;
  id: string;
  updated_at: string;
  created_at: string;
  last_accessed_at: string;
  metadata: any;
}

const Analysis = () => {
  const [images, setImages] = useState<{ name: string; url: string; description: string; category: string }[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  // Graph descriptions based on your examples
  const graphDescriptions: Record<string, { description: string; category: string }> = {
    "femicide_trends_2016_2024": {
      description: "This comprehensive trend analysis reveals the alarming trajectory of femicide cases in Kenya from 2016 to 2024. The data shows concerning patterns with notable spikes during certain periods, highlighting the urgent need for targeted interventions and policy reforms to address this crisis.",
      category: "trends"
    },
    "county_distribution": {
      description: "Geographic analysis showing the distribution of femicide cases across Kenya's 47 counties. This visualization helps identify hotspots and regions requiring immediate attention, enabling targeted resource allocation and intervention strategies.",
      category: "geography"
    },
    "age_demographics": {
      description: "Demographic breakdown revealing the age patterns of femicide victims. This analysis provides crucial insights into which age groups are most vulnerable, informing prevention programs and support services targeting specific demographics.",
      category: "demographics"
    },
    "methods_analysis": {
      description: "Analysis of the methods used in femicide cases, providing critical data for law enforcement and prevention strategies. Understanding these patterns helps in developing targeted interventions and safety measures.",
      category: "methods"
    },
    "monthly_patterns": {
      description: "Temporal analysis showing monthly patterns in femicide cases, revealing seasonal trends and peak periods. This data is essential for planning prevention campaigns and allocating resources during high-risk periods.",
      category: "timeline"
    },
    "relationship_analysis": {
      description: "Analysis of the relationship between perpetrators and victims, showing that intimate partner violence accounts for the majority of cases. This critical data informs domestic violence prevention strategies and support systems.",
      category: "demographics"
    }
  };

  useEffect(() => {
    fetchImagesFromStorage();
  }, []);

  const fetchImagesFromStorage = async () => {
    try {
      // List all files in the analysis-graphs bucket
      const { data: files, error } = await supabase.storage
        .from('analysis-graphs')
        .list('', {
          limit: 100,
          offset: 0,
        });

      if (error) {
        console.error('Error fetching files:', error);
        toast({
          title: "Error loading images",
          description: "Please try again later.",
          variant: "destructive",
        });
        return;
      }

      if (!files || files.length === 0) {
        toast({
          title: "No images found",
          description: "Please upload graph images to the analysis-graphs bucket.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Get public URLs for all images
      const imageData = files
        .filter(file => file.name.toLowerCase().includes('.png') || file.name.toLowerCase().includes('.jpg') || file.name.toLowerCase().includes('.jpeg') || file.name.toLowerCase().includes('.svg'))
        .map(file => {
          const { data } = supabase.storage
            .from('analysis-graphs')
            .getPublicUrl(file.name);
          
          const fileKey = file.name.toLowerCase().replace(/\.(png|jpg|jpeg|svg)$/, '');
          const graphInfo = graphDescriptions[fileKey] || {
            description: "Detailed analysis of femicide patterns and trends in Kenya, providing crucial insights for prevention and intervention strategies.",
            category: "general"
          };

          return {
            name: file.name,
            url: data.publicUrl,
            description: graphInfo.description,
            category: graphInfo.category
          };
        })
        .sort((a, b) => a.name.localeCompare(b.name));

      setImages(imageData);
    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Error loading images",
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

  const formatTitle = (filename: string) => {
    return filename
      .replace(/\.(png|jpg|jpeg|svg)$/i, '')
      .replace(/_/g, ' ')
      .split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-rose-50 to-purple-100">
        <Header />
        <div className="container mx-auto px-4 py-20">
          <div className="text-center">
            <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-rose-600 mx-auto mb-4"></div>
            <p className="text-lg text-gray-600">Loading analysis...</p>
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
      <section className="container mx-auto px-4 py-12 sm:py-20">
        <FadeInSection>
          <div className="text-center max-w-4xl mx-auto mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-purple-800 via-rose-700 to-purple-800 bg-clip-text text-transparent leading-tight">
              Femicide Data Analysis
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed px-4">
              Comprehensive analysis of femicide cases in Kenya from 2016-2024. 
              These visualizations reveal critical patterns, trends, and insights 
              that demand immediate attention and action.
            </p>
          </div>
        </FadeInSection>

        {/* Statistics Overview */}
        <FadeInSection delay={300}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-16">
            <Card className="text-center border-rose-200 hover:border-rose-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-rose-700">930+</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  Documented cases
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-purple-700">47</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  Counties affected
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-rose-200 hover:border-rose-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-rose-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-rose-700">8+</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  Years analyzed
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center border-purple-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg hover:scale-105">
              <CardHeader className="pb-2 px-4 sm:px-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Users className="w-5 h-5 sm:w-6 sm:h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl sm:text-2xl font-bold text-purple-700">70%</CardTitle>
              </CardHeader>
              <CardContent className="px-4 sm:px-6">
                <CardDescription className="text-gray-600 text-sm sm:text-base">
                  Partner violence
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </FadeInSection>

        {/* Analysis Graphs */}
        <div className="space-y-12 sm:space-y-16">
          {images.length === 0 ? (
            <FadeInSection>
              <Card className="text-center p-8 sm:p-12">
                <CardContent>
                  <BarChart3 className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-4" />
                  <CardTitle className="text-xl sm:text-2xl mb-4 text-gray-600">No Analysis Data Available</CardTitle>
                  <CardDescription className="text-base sm:text-lg">
                    Please upload graph images to the analysis-graphs storage bucket in Supabase.
                  </CardDescription>
                </CardContent>
              </Card>
            </FadeInSection>
          ) : (
            images.map((image, index) => (
              <FadeInSection key={image.name} delay={index * 200}>
                <Card className="overflow-hidden shadow-xl border-0 bg-white/90 backdrop-blur hover:shadow-2xl transition-all duration-500 hover:scale-[1.02]">
                  <CardHeader className="bg-gradient-to-r from-purple-600 to-rose-600 text-white">
                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                          {getIconForCategory(image.category)}
                        </div>
                        <div>
                          <CardTitle className="text-xl sm:text-2xl font-bold">
                            {String(index + 1).padStart(2, '0')} {formatTitle(image.name)}
                          </CardTitle>
                          <CardDescription className="text-purple-100 text-sm sm:text-base">
                            {image.category.charAt(0).toUpperCase() + image.category.slice(1)} Analysis
                          </CardDescription>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                          <Download className="w-4 h-4" />
                        </button>
                        <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                          <Share2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <div className="grid lg:grid-cols-2 gap-0">
                      <div className="relative order-2 lg:order-1">
                        <div className="p-6 sm:p-8 flex flex-col justify-center h-full">
                          <div className="prose prose-lg max-w-none">
                            <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                              {image.description}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="relative order-1 lg:order-2">
                        <img
                          src={image.url}
                          alt={formatTitle(image.name)}
                          className="w-full h-64 sm:h-80 lg:h-full object-cover hover:scale-105 transition-transform duration-500"
                          onError={(e) => {
                            console.error('Error loading image:', image.url);
                            e.currentTarget.src = '/placeholder.svg';
                          }}
                        />
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
          <Card className="mt-12 sm:mt-16 bg-gradient-to-r from-purple-700 to-rose-700 text-white border-0 hover:shadow-2xl transition-all duration-500">
            <CardContent className="p-8 sm:p-12 text-center">
              <CardTitle className="text-2xl sm:text-3xl mb-4 sm:mb-6">Take Action</CardTitle>
              <CardDescription className="text-purple-100 text-lg mb-6 sm:mb-8 max-w-3xl mx-auto leading-relaxed">
                These statistics represent real lives lost, families destroyed, and a society that must do better. 
                Every data point is a call to action for justice, prevention, and change.
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-700 px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 hover:scale-105">
                  Share This Analysis
                </button>
                <button className="border-2 border-white text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:scale-105">
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
