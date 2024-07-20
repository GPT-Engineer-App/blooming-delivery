import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flower } from "lucide-react";

const flowers = [
  { id: "roses", name: "Roses", price: 29.99, image: "https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?auto=format&fit=crop&w=600&q=80" },
  { id: "tulips", name: "Tulips", price: 24.99, image: "https://images.unsplash.com/photo-1520763185298-1b434c919102?auto=format&fit=crop&w=600&q=80" },
  { id: "lilies", name: "Lilies", price: 27.99, image: "https://images.unsplash.com/photo-1588701107566-af76b932e2e8?auto=format&fit=crop&w=600&q=80" },
  { id: "sunflowers", name: "Sunflowers", price: 22.99, image: "https://images.unsplash.com/photo-1597848212624-a19eb35e2651?auto=format&fit=crop&w=600&q=80" },
];

const FlowerSelection = () => {
  const [selectedFlower, setSelectedFlower] = useState(flowers[0].id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { selectedFlower, quantity });
    navigate("/order-confirmation");
  };

  const selectedFlowerData = flowers.find(flower => flower.id === selectedFlower);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Flowers</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Choose a Flower Type</CardTitle>
            </CardHeader>
            <CardContent>
              <RadioGroup value={selectedFlower} onValueChange={setSelectedFlower}>
                {flowers.map((flower) => (
                  <div key={flower.id} className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value={flower.id} id={flower.id} />
                    <Label htmlFor={flower.id} className="flex items-center">
                      <Flower className="mr-2 h-4 w-4" />
                      {flower.name} - ${flower.price}
                    </Label>
                  </div>
                ))}
              </RadioGroup>
            </CardContent>
          </Card>

          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Quantity</CardTitle>
            </CardHeader>
            <CardContent>
              <Label htmlFor="quantity">Number of bouquets</Label>
              <Input
                id="quantity"
                type="number"
                min="1"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="mt-1"
              />
            </CardContent>
          </Card>

          <CardFooter className="flex justify-end">
            <Button type="submit" size="lg" onClick={handleSubmit}>
              Continue to Checkout
            </Button>
          </CardFooter>
        </div>

        <div>
          <Card>
            <CardHeader>
              <CardTitle>Selected Flower</CardTitle>
            </CardHeader>
            <CardContent>
              {selectedFlowerData && (
                <img 
                  src={selectedFlowerData.image} 
                  alt={selectedFlowerData.name} 
                  className="w-full h-64 object-cover rounded-md"
                />
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlowerSelection;