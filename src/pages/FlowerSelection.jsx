import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Flower } from "lucide-react";

const UNSPLASH_ACCESS_KEY = import.meta.env.VITE_UNSPLASH_ACCESS_KEY;

const flowers = [
  { id: "roses", name: "Roses", price: 29.99 },
  { id: "tulips", name: "Tulips", price: 24.99 },
  { id: "lilies", name: "Lilies", price: 27.99 },
  { id: "sunflowers", name: "Sunflowers", price: 22.99 },
];

const fetchUnsplashImage = async (query) => {
  try {
    const response = await fetch(`https://api.unsplash.com/photos/random?query=${query}&client_id=${UNSPLASH_ACCESS_KEY}`);
    if (!response.ok) {
      throw new Error('Failed to fetch image');
    }
    const data = await response.json();
    return data.urls.regular;
  } catch (error) {
    console.error('Error fetching Unsplash image:', error);
    return null;
  }
};

const FlowerSelection = () => {
  const [selectedFlower, setSelectedFlower] = useState(flowers[0].id);
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  const { data: flowerImage, isLoading: imageLoading, error: imageError } = useQuery({
    queryKey: ['flowerImage', selectedFlower],
    queryFn: () => fetchUnsplashImage(selectedFlower),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Order submitted:", { selectedFlower, quantity });
    navigate("/order-confirmation");
  };

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
              {imageLoading ? (
                <div className="w-full h-64 bg-gray-300 animate-pulse"></div>
              ) : imageError ? (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                  <p className="text-red-500">Failed to load image</p>
                </div>
              ) : flowerImage ? (
                <img src={flowerImage} alt={selectedFlower} className="w-full h-64 object-cover rounded-md" />
              ) : (
                <div className="w-full h-64 bg-gray-300 flex items-center justify-center">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default FlowerSelection;