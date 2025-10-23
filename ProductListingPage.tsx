import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Slider } from './ui/slider';
import { Checkbox } from './ui/checkbox';
import { Filter, Search, Star } from 'lucide-react';
import { useApp, Product } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ProductListingPageProps {
  products: Product[];
}

export function ProductListingPage({ products }: ProductListingPageProps) {
  const { setCurrentPage, setSelectedProduct, addToCart } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState('name');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['all', 'Suplementos', 'Equipamentos', 'Roupas'];

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
    
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Produtos</h1>
          <p className="text-black">Encontre os melhores produtos para sua jornada fitness</p>
        </div>

        {/* Search and Sort Bar */}
        <div className="mb-6 flex flex-col md:flex-row gap-4 items-center">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Buscar produtos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white border-white text-white"
            />
          </div>
          
          <Button
            variant="outline"
            onClick={() => setShowFilters(!showFilters)}
            className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black md:hidden"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filtros
          </Button>

          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[200px] bg-black border-black text-white">
              <SelectValue placeholder="Ordenar por" />
            </SelectTrigger>
            <SelectContent className="bg-black border-black">
              <SelectItem value="name">Nome (A-Z)</SelectItem>
              <SelectItem value="price-low">Menor Preço</SelectItem>
              <SelectItem value="price-high">Maior Preço</SelectItem>
              <SelectItem value="rating">Melhor Avaliação</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid md:grid-cols-4 gap-6">
          {/* Sidebar Filters */}
          <div className={`space-y-6 ${showFilters ? 'block' : 'hidden md:block'}`}>
            <Card className="bg-white border-black">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4">Filtros</h3>
                
                {/* Category Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Categoria</h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <div key={category} className="flex items-center space-x-2">
                        <Checkbox
                          checked={selectedCategory === category}
                          onCheckedChange={() => setSelectedCategory(category)}
                          className="border-white"
                        />
                        <label className="text-sm text-black cursor-pointer">
                          {category === 'all' ? 'Todas' : category}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Range Filter */}
                <div className="mb-6">
                  <h4 className="font-medium mb-3">Faixa de Preço</h4>
                  <div className="space-y-4">
                    <Slider
                      value={priceRange}
                      onValueChange={setPriceRange}
                      max={1000}
                      step={10}
                      className="w-full"
                    />
                    <div className="flex justify-between text-sm text-black">
                      <span>R$ {priceRange[0]}</span>
                      <span>R$ {priceRange[1]}</span>
                    </div>
                  </div>
                </div>

                {/* Rating Filter */}
                <div>
                  <h4 className="font-medium mb-3">Avaliação</h4>
                  <div className="space-y-2">
                    {[5, 4, 3].map((rating) => (
                      <div key={rating} className="flex items-center space-x-2">
                        <Checkbox className="border-white" />
                        <div className="flex items-center">
                          {[...Array(rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          {[...Array(5 - rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-white" />
                          ))}
                          <span className="ml-2 text-sm text-black">& acima</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Product Grid */}
          <div className="md:col-span-3">
            <div className="mb-4 flex justify-between items-center">
              <p className="text-white">
                Mostrando {sortedProducts.length} de {products.length} produtos
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {sortedProducts.map((product) => (
                <Card 
                  key={product.id} 
                  className="bg-white border-blue hover:border-green-500 transition-all duration-300 group cursor-pointer"
                >
                  <CardContent className="p-4">
                    <div className="relative mb-4" onClick={() => handleProductClick(product)}>
                      <ImageWithFallback
                        src={product.image}
                        alt={product.name}
                        className="w-full h-48 object-cover rounded-lg"
                      />
                      <Badge className="absolute top-2 right-2 bg-green-500 text-black">
                        {product.rating} ⭐
                      </Badge>
                      <Badge 
                        variant="secondary" 
                        className="absolute top-2 left-2 bg-black text-black"
                      >
                        {product.category}
                      </Badge>
                    </div>
                    
                    <div className="space-y-3">
                      <h3 
                        className="font-bold text-lg group-hover:text-green-400 transition-colors cursor-pointer"
                        onClick={() => handleProductClick(product)}
                      >
                        {product.name}
                      </h3>
                      <p className="text-black text-sm line-clamp-2">{product.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-1">
                          {[...Array(Math.floor(product.rating))].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                          <span className="text-sm text-black ml-1">
                            ({product.rating})
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold text-green-400">
                          R$ {product.price.toFixed(2)}
                        </span>
                        <Button 
                          size="sm" 
                          className="bg-green-500 hover:bg-green-600 text-black"
                          onClick={(e) => {
                            e.stopPropagation();
                            addToCart(product);
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

            {sortedProducts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">Nenhum produto encontrado com os filtros selecionados.</p>
                <Button 
                  variant="outline" 
                  className="mt-4 border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
                  onClick={() => {
                    setSearchTerm('');
                    setSelectedCategory('all');
                    setPriceRange([0, 1000]);
                  }}
                >
                  Limpar Filtros
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}