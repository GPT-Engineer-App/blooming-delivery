import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower, Clock, Gift, Star } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] flex items-center justify-center">
        <img src="/placeholder.svg" alt="Flower bouquet" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">We deliver flowers to your doorstep in 30 minutes</h1>
          <Button size="lg">Order Now</Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ServiceCard
              icon={<Clock className="h-8 w-8" />}
              title="Same Day Delivery"
              description="Get your flowers delivered within hours of ordering."
            />
            <ServiceCard
              icon={<Flower className="h-8 w-8" />}
              title="Custom Bouquets"
              description="Create your own unique floral arrangements."
            />
            <ServiceCard
              icon={<Gift className="h-8 w-8" />}
              title="Subscription Plans"
              description="Regular flower deliveries to brighten your space."
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        {icon}
        <span>{title}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p>{description}</p>
    </CardContent>
  </Card>
);

const TestimonialCard = ({ name, comment }) => (
  <Card>
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Star className="h-5 w-5 text-yellow-400" />
        <span>{name}</span>
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="italic">"{comment}"</p>
    </CardContent>
  </Card>
);

export default Index;