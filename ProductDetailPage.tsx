import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Star, Plus, Minus, ShoppingCart, ArrowLeft, ZoomIn } from 'lucide-react';
import { useApp, Product } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductDetailPageProps {
  product: Product | null;
  products: Product[];
}

export function ProductDetailPage({ product, products }: ProductDetailPageProps) {
  const { setCurrentPage, addToCart } = useApp();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  if (!product) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Produto não encontrado</h2>
          <Button onClick={() => setCurrentPage('products')}>
            Voltar aos Produtos
          </Button>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  const handleAddToCart = () => {
    addToCart(product, quantity);
    setQuantity(1);
  };

  const adjustQuantity = (change: number) => {
    const newQuantity = quantity + change;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  // Mock additional images for demonstration
  const productImages = [
    product.image,
    product.image, // In a real app, these would be different angles/views
    product.image
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          className="mb-6 text-green-400 hover:text-green-300"
          onClick={() => setCurrentPage('products')}
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Voltar aos Produtos
        </Button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="relative">
              <ImageWithFallback
                src={productImages[selectedImage]}
                alt={product.name}
                className={`w-full h-96 object-cover rounded-lg cursor-zoom-in transition-transform duration-300 ${
                  isZoomed ? 'scale-110' : 'scale-100'
                }`}
                onClick={() => setIsZoomed(!isZoomed)}
              />
              <Button
                variant="outline"
                size="sm"
                className="absolute top-4 right-4 bg-black/50 border-white/20 text-white hover:bg-black/70"
                onClick={() => setIsZoomed(!isZoomed)}
              >
                <ZoomIn className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Thumbnail Images */}
            <div className="flex space-x-4">
              {productImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-colors ${
                    selectedImage === index ? 'border-green-500' : 'border-gray-700'
                  }`}
                >
                  <ImageWithFallback
                    src={image}
                    alt={`${product.name} - Imagem ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <Badge variant="secondary" className="mb-2">
                {product.category}
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center">
                  {[...Array(Math.floor(product.rating))].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-gray-400">({product.rating})</span>
                </div>
                <span className="text-green-400">Em estoque</span>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-6">
              <div className="text-4xl font-bold text-green-400 mb-4">
                R$ {product.price.toFixed(2)}
              </div>
              <p className="text-white text-lg leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Specifications */}
            {product.specifications && (
              <div className="border-t border-white pt-6">
                <h3 className="text-xl font-bold mb-4">Especificações</h3>
                <ul className="space-y-2">
                  {product.specifications.map((spec, index) => (
                    <li key={index} className="text-gray-300 flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      {spec}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Quantity and Add to Cart */}
            <div className="border-t border-white pt-6">
              <h3 className="text-lg font-bold mb-4">Quantidade</h3>
              <div className="flex items-center space-x-4 mb-6">
                <div className="flex items-center border border-white rounded-lg">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustQuantity(-1)}
                    disabled={quantity <= 1}
                    className="px-3 py-2 text-white hover:text-white"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <Input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                    className="w-16 text-center border-0 bg-transparent text-white"
                    min="1"
                  />
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => adjustQuantity(1)}
                    className="px-3 py-2 text-white hover:text-white"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
                <span className="text-white">
                  Subtotal: R$ {(product.price * quantity).toFixed(2)}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="flex-1 bg-green-500 hover:bg-green-600 text-black py-3"
                  onClick={handleAddToCart}
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Adicionar ao Carrinho
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black py-3"
                  onClick={() => {
                    handleAddToCart();
                    setCurrentPage('checkout');
                  }}
                >
                  Comprar Agora
                </Button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="border-t border-gray-800 pt-6 space-y-3 text-sm text-gray-400">
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Frete grátis para compras acima de R$ 150
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Entrega em até 5 dias úteis
              </div>
              <div className="flex items-center">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                Garantia de 30 dias
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="mt-16">
            <h2 className="text-2xl font-bold mb-8">Produtos Relacionados</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Card 
                  key={relatedProduct.id} 
                  className="bg-gray-900 border-gray-800 hover:border-green-500 transition-all duration-300 group cursor-pointer"
                  onClick={() => {
                    setSelectedImage(0);
                    setQuantity(1);
                    setIsZoomed(false);
                  }}
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4">
                      <ImageWithFallback
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500 text-black">
                        {relatedProduct.rating} ⭐
                      </Badge>
                    </div>
                    <div className="space-y-3">
                      <h3 className="font-bold text-lg group-hover:text-green-400 transition-colors">
                        {relatedProduct.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{relatedProduct.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-green-400">
                          R$ {relatedProduct.price.toFixed(2)}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-green-500 hover:bg-green-600 text-black"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(relatedProduct);
                          }}
                        >
                          Adicionar
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}