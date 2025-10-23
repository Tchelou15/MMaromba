import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Star, ArrowRight, Instagram, Facebook, Twitter, Mail, Gift, Clock } from 'lucide-react';
import { Input } from './ui/input';
import { useApp, Product } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import statueImage from 'figma:asset/a8f1ef318e42a46b15fa23612d01c0127ffb80e2.png';

interface HomePageProps {
  products: Product[];
}

export function HomePage({ products }: HomePageProps) {
  const { setCurrentPage, setSelectedProduct, addToCart } = useApp();

  const featuredProducts = products.slice(0, 3);
  const categories = [
    {
      name: 'Suplementos',
      image: 'https://images.unsplash.com/photo-1693996045346-d0a9b9470909?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm90ZWluJTIwcG93ZGVyJTIwZml0bmVzcyUyMHN1cHBsZW1lbnR8ZW58MXx8fHwxNzU3NTkxODAyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '50+ produtos'
    },
    {
      name: 'Equipamentos',
      image: 'https://images.unsplash.com/photo-1652492041264-efba848755d6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxneW0lMjBlcXVpcG1lbnQlMjBkdW1iYmVsbHxlbnwxfHx8fDE3NTc1NjMzMDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '30+ produtos'
    },
    {
      name: 'Roupas',
      image: 'https://images.unsplash.com/photo-1645207803533-e2cfe1382f2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwY2xvdGhpbmclMjB3b3Jrb3V0JTIwZ2VhcnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      count: '40+ produtos'
    }
  ];

  const testimonials = [
    {
      name: 'Carlos Silva',
      rating: 5,
      comment: 'Produtos de excelente qualidade! Meus resultados melhoraram muito desde que comecei a usar os suplementos da Mundo Maromba.',
      avatar: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Ana Oliveira',
      rating: 5,
      comment: 'Entrega rápida e produtos autênticos. Recomendo para todos que levam o treino a sério!',
      avatar: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc1NzUzNTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Rafael Santos',
      rating: 4,
      comment: 'Ótimo atendimento e preços justos. A loja é confiável e sempre tem novidades.',
      avatar: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setCurrentPage('product-detail');
  };

  return (
    <div className="min-h-screen">
      {/* Promotional Banner */}
      <section className="bg-gradient-to-r from-sky-600 to-blue-600 py-3">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-white">
            <Gift className="w-5 h-5 mr-2" />
            <span className="text-sm md:text-base font-medium">
              🔥 PROMOÇÃO DE VERÃO: 20% OFF em todos os suplementos + frete grátis acima de R$ 200
            </span>
            <Clock className="w-4 h-4 ml-2" />
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-sky-50 via-white to-blue-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
                Construa Seu
                <span className="block bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Corpo Ideal
                </span>
              </h1>
              <p className="text-xl text-gray-600">
                Os melhores suplementos, equipamentos e roupas para sua jornada fitness. 
                Qualidade garantida e resultados comprovados.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  className="bg-sky-600 hover:bg-sky-700 text-white px-8 py-3"
                  onClick={() => setCurrentPage('products')}
                >
                  Comprar Agora
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white px-8 py-3"
                  onClick={() => setCurrentPage('about')}
                >
                  Sobre Nós
                </Button>
              </div>
            </div>
            <div className="relative flex items-center gap-8">
              <div className="flex-1">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Homem musculoso treinando"
                  className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/20 to-transparent rounded-lg"></div>
              </div>
              <div className="hidden lg:block">
                <ImageWithFallback
                  src={statueImage}
                  alt="Estátua representando força e determinação"
                  className="h-[500px] w-auto object-cover rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Categorias em Destaque</h2>
            <p className="text-gray-600 text-lg">Explore nossa seleção de produtos premium</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Card 
                key={index} 
                className="bg-white border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300 cursor-pointer group"
                onClick={() => setCurrentPage('products')}
              >
                <CardContent className="p-0">
                  <div className="relative">
                    <ImageWithFallback
                      src={category.image}
                      alt={category.name}
                      className="w-full h-48 object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-sky-900/20 group-hover:bg-sky-900/10 transition-all duration-300 rounded-t-lg"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">{category.name}</h3>
                    <p className="text-gray-600">{category.count}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gradient-to-br from-sky-25 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Produtos em Destaque</h2>
            <p className="text-gray-600 text-lg">Os mais vendidos da nossa loja</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card 
                key={product.id} 
                className="bg-white border-sky-200 hover:border-sky-400 hover:shadow-lg transition-all duration-300 group cursor-pointer"
              >
                <CardContent className="p-4">
                  <div className="relative mb-4" onClick={() => handleProductClick(product)}>
                    <ImageWithFallback
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-sky-500 text-white">
                      {product.rating} ⭐
                    </Badge>
                  </div>
                  <div className="space-y-3">
                    <h3 className="font-bold text-lg group-hover:text-sky-600 transition-colors text-gray-900">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-sky-600">
                        R$ {product.price.toFixed(2)}
                      </span>
                      <Button 
                        size="sm" 
                        className="bg-sky-600 hover:bg-sky-700 text-white"
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
          <div className="text-center mt-8">
            <Button 
              variant="outline" 
              size="lg" 
              className="border-sky-600 text-sky-600 hover:bg-sky-600 hover:text-white"
              onClick={() => setCurrentPage('products')}
            >
              Ver Todos os Produtos
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">O Que Nossos Clientes Dizem</h2>
            <p className="text-gray-600 text-lg">Depoimentos reais de quem já transformou sua vida</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-white border-sky-200 shadow-sm">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <ImageWithFallback
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover mr-4"
                    />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <div className="flex">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 italic">"{testimonial.comment}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-sky-100 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Fique Por Dentro das Novidades</h2>
          <p className="text-gray-700 mb-8">Receba ofertas exclusivas e dicas de treino diretamente no seu email</p>
          <div className="max-w-md mx-auto flex gap-4">
            <Input 
              type="email" 
              placeholder="Seu e-mail" 
              className="bg-white border-sky-300 text-gray-900"
            />
            <Button className="bg-sky-600 hover:bg-sky-700 text-white px-6">
              Inscrever
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-12 border-t border-sky-200">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">MM</span>
                </div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
                  Mundo Maromba
                </h3>
              </div>
              <p className="text-gray-600">
                Sua loja especializada em fitness e bodybuilding. Qualidade e resultados garantidos.
              </p>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Links Rápidos</h4>
              <ul className="space-y-2 text-gray-600">
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-sky-600">Produtos</button></li>
                <li><button onClick={() => setCurrentPage('about')} className="hover:text-sky-600">Sobre</button></li>
                <li><button onClick={() => setCurrentPage('reviews')} className="hover:text-sky-600">Avaliações</button></li>
                <li><a href="#" className="hover:text-sky-600">Contato</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Contato</h4>
              <ul className="space-y-2 text-gray-600">
                <li>📧 contato@mundomaromba.com</li>
                <li>📱 (11) 99999-9999</li>
                <li>📍 São Paulo, SP</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold mb-4 text-gray-900">Redes Sociais</h4>
              <div className="flex space-x-4">
                <button className="p-2 bg-white border border-sky-200 rounded-lg hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Instagram className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white border border-sky-200 rounded-lg hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Facebook className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white border border-sky-200 rounded-lg hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Twitter className="w-5 h-5" />
                </button>
                <button className="p-2 bg-white border border-sky-200 rounded-lg hover:bg-sky-500 hover:text-white hover:border-sky-500 transition-colors">
                  <Mail className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-sky-200 mt-8 pt-8 text-center text-gray-600">
            <p>&copy; 2024 Mundo Maromba. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}