import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Clock, Gift, Star } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  const handleOrderNow = () => {
    navigate('/order');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <img 
          src="https://images.unsplash.com/photo-1490750967868-88aa4486c946?auto=format&fit=crop&w=1200&q=80" 
          alt="Flower bouquet" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-bold mb-6">Bloom Express</h1>
          <p className="text-xl mb-8">We deliver flowers to your doorstep in 30 minutes</p>
          <Button size="lg" className="bg-pink-500 hover:bg-pink-600" onClick={handleOrderNow}>Order Now</Button>
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
              image="https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=600&q=80"
            />
            <ServiceCard
              icon={<Flower className="h-10 w-10 text-pink-500" />}
              title="Custom Bouquets"
              description="Create your own unique floral arrangements."
              image="https://images.unsplash.com/photo-1561181286-d3fee7d55364?auto=format&fit=crop&w=600&q=80"
            />
            <ServiceCard
              icon={<Gift className="h-10 w-10 text-pink-500" />}
              title="Subscription Plans"
              description="Regular flower deliveries to brighten your space."
              image="https://images.unsplash.com/photo-1595536595137-e9b1e8b7d3f8?auto=format&fit=crop&w=600&q=80"
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

const ServiceCard = ({ icon, title, description, image }) => (
  <Card className="hover:shadow-lg transition-shadow duration-300 overflow-hidden">
    <div className="h-48 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover" />
    </div>
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