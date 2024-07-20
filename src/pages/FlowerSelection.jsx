import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flower } from "lucide-react";

const flowers = [
  { id: "roses", name: "Roses", price: 29.99 },
  { id: "tulips", name: "Tulips", price: 24.99 },
  { id: "lilies", name: "Lilies", price: 27.99 },
  { id: "sunflowers", name: "Sunflowers", price: 22.99 },
];

const FlowerSelection = () => {
  const [selectedFlower, setSelectedFlower] = useState(flowers[0].id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the order submission
    // For now, we'll just log the order details
    console.log("Order submitted:", { selectedFlower, quantity });
    // Navigate to a confirmation page (to be implemented later)
    navigate("/order-confirmation");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Select Your Flowers</h1>
      <form onSubmit={handleSubmit}>
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
          <Button type="submit" size="lg">
            Continue to Checkout
          </Button>
        </CardFooter>
      </form>
    </div>
  );
};

export default FlowerSelection;