import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Star, ThumbsUp, MessageCircle, Filter } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function ReviewsPage() {
  const [filterRating, setFilterRating] = useState('all');
  const [sortBy, setSortBy] = useState('recent');
  const [showReviewForm, setShowReviewForm] = useState(false);

  const reviews = [
    {
      id: 1,
      name: 'Carlos Silva',
      avatar: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      date: '2024-01-15',
      product: 'Whey Protein Premium',
      comment: 'Produto excelente! Uso há 3 meses e já vejo resultados incríveis. O sabor chocolate é delicioso e dissolve muito bem. Recomendo para quem quer ganhar massa muscular de forma saudável.',
      helpful: 24,
      verified: true,
      images: []
    },
    {
      id: 2,
      name: 'Ana Oliveira',
      avatar: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc1NzUzNTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      date: '2024-01-12',
      product: 'Kit Halteres Ajustáveis',
      comment: 'Melhor compra que fiz! Os halteres são de ótima qualidade, super resistentes e o sistema de ajuste é muito prático. Agora posso treinar em casa com equipamento profissional.',
      helpful: 18,
      verified: true,
      images: []
    },
    {
      id: 3,
      name: 'Rafael Santos',
      avatar: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      date: '2024-01-10',
      product: 'Camiseta Dry Fit',
      comment: 'Camiseta muito boa para treinar. O tecido é confortável e não esquenta. Única coisa é que poderia ter mais opções de cores, mas no geral estou satisfeito.',
      helpful: 12,
      verified: true,
      images: []
    },
    {
      id: 4,
      name: 'Mariana Costa',
      avatar: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc1NzUzNTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      date: '2024-01-08',
      product: 'Creatina Monohidratada',
      comment: 'Creatina de excelente qualidade! Sem sabor, como prometido, e dissolve perfeitamente na água. Senti melhora na força e resistência após 2 semanas de uso.',
      helpful: 15,
      verified: true,
      images: []
    },
    {
      id: 5,
      name: 'João Pedro',
      avatar: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 5,
      date: '2024-01-05',
      product: 'Whey Protein Premium',
      comment: 'Fiquei impressionado com a qualidade! O produto chegou muito bem embalado e dentro do prazo. O atendimento ao cliente é excepcional. Já virei cliente fiel!',
      helpful: 21,
      verified: true,
      images: []
    },
    {
      id: 6,
      name: 'Fernanda Lima',
      avatar: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc1NzUzNTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      rating: 4,
      date: '2024-01-03',
      product: 'Kit Completo Fitness',
      comment: 'Kit muito completo e com ótimo custo-benefício. Todos os produtos são de qualidade e chegaram conforme anunciado. Só acho que poderiam incluir mais acessórios.',
      helpful: 9,
      verified: true,
      images: []
    }
  ];

  const filteredReviews = reviews.filter(review => {
    if (filterRating === 'all') return true;
    return review.rating === parseInt(filterRating);
  });

  const sortedReviews = [...filteredReviews].sort((a, b) => {
    switch (sortBy) {
      case 'rating-high':
        return b.rating - a.rating;
      case 'rating-low':
        return a.rating - b.rating;
      case 'helpful':
        return b.helpful - a.helpful;
      default:
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    }
  });

  const averageRating = reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;
  const ratingDistribution = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(review => review.rating === rating).length,
    percentage: (reviews.filter(review => review.rating === rating).length / reviews.length) * 100
  }));

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('pt-BR');
  };

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Avaliações dos Clientes</h1>
          <p className="text-black">Veja o que nossos clientes estão dizendo sobre nossos produtos</p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar with Rating Summary */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-black mb-6">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <div className="text-4xl font-bold text-green-400 mb-2">
                    {averageRating.toFixed(1)}
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-5 h-5 ${
                          i < Math.floor(averageRating) 
                            ? 'fill-yellow-400 text-yellow-400' 
                            : 'text-black'
                        }`} 
                      />
                    ))}
                  </div>
                  <p className="text-white">Baseado em {reviews.length} avaliações</p>
                </div>

                <div className="space-y-2">
                  {ratingDistribution.map(({ rating, count, percentage }) => (
                    <div key={rating} className="flex items-center space-x-3">
                      <span className="text-sm w-8">{rating}★</span>
                      <div className="flex-1 bg-white rounded-full h-2">
                        <div 
                          className="bg-green-500 h-2 rounded-full" 
                          style={{ width: `${percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-black w-8">{count}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Filters */}
            <Card className="bg-white border-black">
              <CardContent className="p-6">
                <h3 className="font-bold mb-4 flex items-center">
                  <Filter className="w-5 h-5 mr-2" />
                  Filtros
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Avaliação</label>
                    <Select value={filterRating} onValueChange={setFilterRating}>
                      <SelectTrigger className="bg-white border-black">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-white">
                        <SelectItem value="all">Todas</SelectItem>
                        <SelectItem value="5">5 estrelas</SelectItem>
                        <SelectItem value="4">4 estrelas</SelectItem>
                        <SelectItem value="3">3 estrelas</SelectItem>
                        <SelectItem value="2">2 estrelas</SelectItem>
                        <SelectItem value="1">1 estrela</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Ordenar por</label>
                    <Select value={sortBy} onValueChange={setSortBy}>
                      <SelectTrigger className="bg-white border-black">
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-black">
                        <SelectItem value="recent">Mais recentes</SelectItem>
                        <SelectItem value="rating-high">Maior avaliação</SelectItem>
                        <SelectItem value="rating-low">Menor avaliação</SelectItem>
                        <SelectItem value="helpful">Mais úteis</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Reviews List */}
          <div className="lg:col-span-3">
            <div className="flex justify-between items-center mb-6">
              <p className="text-black">
                Mostrando {sortedReviews.length} de {reviews.length} avaliações
              </p>
              <Button 
                className="bg-green-500 hover:bg-green-600 text-black"
                onClick={() => setShowReviewForm(!showReviewForm)}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Escrever Avaliação
              </Button>
            </div>

            {/* Review Form */}
            {showReviewForm && (
              <Card className="bg-white border-white mb-6">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Escreva sua avaliação</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Produto</label>
                      <Select>
                        <SelectTrigger className="bg-white border-gray-700">
                          <SelectValue placeholder="Selecione o produto" />
                        </SelectTrigger>
                        <SelectContent className="bg-white border-white">
                          <SelectItem value="whey">Whey Protein Premium</SelectItem>
                          <SelectItem value="creatina">Creatina Monohidratada</SelectItem>
                          <SelectItem value="halteres">Kit Halteres Ajustáveis</SelectItem>
                          <SelectItem value="camiseta">Camiseta Dry Fit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Avaliação</label>
                      <div className="flex space-x-2">
                        {[1, 2, 3, 4, 5].map((rating) => (
                          <button key={rating} className="p-1">
                            <Star className="w-8 h-8 text-white hover:text-yellow-400 transition-colors" />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Título da avaliação</label>
                      <Input 
                        placeholder="Resumo da sua experiência"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">Comentário</label>
                      <Textarea 
                        placeholder="Conte sua experiência com o produto..."
                        className="bg-gray-800 border-gray-700 min-h-[120px]"
                      />
                    </div>

                    <div className="flex gap-4">
                      <Button className="bg-green-500 hover:bg-green-600 text-black">
                        Publicar Avaliação
                      </Button>
                      <Button 
                        variant="outline" 
                        className="border-gray-700"
                        onClick={() => setShowReviewForm(false)}
                      >
                        Cancelar
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Reviews */}
            <div className="space-y-6">
              {sortedReviews.map((review) => (
                <Card key={review.id} className="bg-white border-black">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <ImageWithFallback
                        src={review.avatar}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-3">
                            <h4 className="font-bold">{review.name}</h4>
                            {review.verified && (
                              <Badge variant="secondary" className="text-xs">
                                ✓ Compra verificada
                              </Badge>
                            )}
                          </div>
                          <span className="text-sm text-black">
                            {formatDate(review.date)}
                          </span>
                        </div>

                        <div className="flex items-center space-x-2 mb-2">
                          <div className="flex">
                            {[...Array(review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                            {[...Array(5 - review.rating)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 text-gray-600" />
                            ))}
                          </div>
                          <Badge variant="outline" className="text-xs border-gray-700">
                            {review.product}
                          </Badge>
                        </div>

                        <p className="text-gray-300 mb-4 leading-relaxed">
                          {review.comment}
                        </p>

                        <div className="flex items-center space-x-4">
                          <button className="flex items-center space-x-2 text-gray-400 hover:text-green-400 transition-colors">
                            <ThumbsUp className="w-4 h-4" />
                            <span className="text-sm">Útil ({review.helpful})</span>
                          </button>
                          <button className="text-gray-400 hover:text-green-400 transition-colors text-sm">
                            Responder
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="text-center mt-8">
              <Button 
                variant="outline" 
                className="border-green-500 text-green-400 hover:bg-green-500 hover:text-black"
              >
                Carregar Mais Avaliações
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}