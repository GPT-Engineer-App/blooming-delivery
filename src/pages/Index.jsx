import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Clock, Gift, Star } from "lucide-react";
import { useQuery } from "@tanstack/react-query";

const fetchUnsplashImage = async (query) => {
  const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=YOUR_UNSPLASH_ACCESS_KEY`);
  if (!response.ok) {
    throw new Error('Failed to fetch image');
  }
  const data = await response.json();
  return data.urls.regular;
};

const Index = () => {
  const { data: heroImage, isLoading: heroImageLoading } = useQuery({
    queryKey: ['heroImage'],
    queryFn: () => fetchUnsplashImage('flower bouquet'),
  });

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        {heroImageLoading ? (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        ) : (
          <img src={heroImage} alt="Flower bouquet" className="absolute inset-0 w-full h-full object-cover" />
        )}
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Bloom Express</h1>
          <p className="text-xl mb-8">We deliver flowers to your doorstep in 30 minutes</p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600">Order Now</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ServiceCard
              icon={<Clock className="h-10 w-10 text-pink-500" />}
              title="Same Day Delivery"
              description="Get your flowers delivered within hours of ordering."
            />
            <ServiceCard
              icon={<Flower className="h-10 w-10 text-pink-500" />}
              title="Custom Bouquets"
              description="Create your own unique floral arrangements."
            />
            <ServiceCard
              icon={<Gift className="h-10 w-10 text-pink-500" />}
              title="Subscription Plans"
              description="Regular flower deliveries to brighten your space."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <TestimonialCard
              name="Alice Johnson"
              comment="The flowers arrived so quickly and were absolutely beautiful!"
            />
            <TestimonialCard
              name="Bob Smith"
              comment="I love the subscription service. My office always looks fresh and vibrant."
            />
            <TestimonialCard
              name="Carol White"
              comment="The custom bouquet I ordered exceeded my expectations. Will definitely order again!"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-4 text-2xl">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, comment }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300">
    <CardHeader>
      <CardTitle className="flex items-center gap-2 text-xl">
        <Star className="h-6 w-6 text-yellow-400" />
        <span>{name}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="italic text-gray-600">"{comment}"</p>
    </CardContent>
  </Card>
);

export default Index;