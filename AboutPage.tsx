import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { Award, Shield, Truck, Users, Heart, Trophy } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function AboutPage() {
  const values = [
    {
      icon: <Award className="w-8 h-8 text-green-400" />,
      title: 'Qualidade Premium',
      description: 'Trabalhamos apenas com produtos de alta qualidade, testados e aprovados.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Confiança',
      description: 'Milhares de clientes confiam em nossos produtos para seus objetivos fitness.'
    },
    {
      icon: <Truck className="w-8 h-8 text-green-400" />,
      title: 'Entrega Rápida',
      description: 'Entregamos seus produtos com rapidez e segurança em todo o Brasil.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Comunidade',
      description: 'Fazemos parte de uma grande comunidade de pessoas apaixonadas por fitness.'
    }
  ];

  const achievements = [
    { number: '50k+', label: 'Clientes Satisfeitos' },
    { number: '100+', label: 'Produtos Premium' },
    { number: '5 Anos', label: 'No Mercado' },
    { number: '99%', label: 'Satisfação' }
  ];

  const team = [
    {
      name: 'Marcello Rodrigues',
      role: 'CEO & Fundador',
      bio: 'Ex-atleta profissional, apaixonado por fitness há mais de 15 anos.',
      image: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Gustavo Faro',
      role: 'Nutricionista Esportivo',
      bio: 'Especialista em nutrição esportiva, ajuda nossos clientes a escolher os melhores suplementos.',
      image: 'https://images.unsplash.com/photo-1648863397001-cd77a7e98bd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXRuZXNzJTIwd29tYW4lMjB3b3Jrb3V0fGVufDF8fHx8MTc1NzUzNTkzN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    },
    {
      name: 'Roberto Santos',
      role: 'Personal Trainer',
      bio: 'Personal trainer certificado, especialista em musculação e treinamento funcional.',
      image: 'https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sobre o{' '}
            <span className="bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Mundo Maromba
            </span>
          </h1>
          <p className="text-xl text-gray-800 max-w-3xl mx-auto leading-relaxed">
            Somos apaixonados por fitness e acreditamos que todos merecem ter acesso aos melhores 
            produtos para alcançar seus objetivos. Nossa missão é democratizar o acesso a suplementos, 
            equipamentos e roupas de alta qualidade.
          </p>
        </section>

        {/* Story Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-800">
                <p>
                  O Mundo Maromba nasceu em 2019 com uma visão simples: tornar os melhores produtos 
                  de fitness acessíveis para todos os brasileiros. Tudo começou quando nosso fundador, 
                  Carlos Mendes, percebeu a dificuldade que muitas pessoas tinham para encontrar 
                  suplementos de qualidade a preços justos.
                </p>
                <p>
                  Como ex-atleta profissional,Marcello sabia a importância de usar produtos confiáveis 
                  e de alta qualidade. Assim, decidiu criar uma loja que oferecesse não apenas produtos 
                  premium, mas também orientação especializada para ajudar cada cliente a atingir 
                  seus objetivos.
                </p>
                <p>
                  Hoje, cinco anos depois, somos uma das principais lojas de fitness do país, 
                  atendendo milhares de clientes e fazendo parte da jornada de transformação de 
                  cada um deles.
                </p>
              </div>
            </div>
            <div className="relative">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1671355174341-54fdb4596326?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib2R5YnVpbGRpbmclMjBtdXNjdWxhciUyMG1hbnxlbnwxfHx8fDE3NTc1OTE4MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Equipe Mundo Maromba"
                className="w-full h-96 object-cover rounded-lg"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Valores</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="bg-white border-gray-300 text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Achievements Section */}
        <section className="mb-16 bg-gradient-to-r from-green-900/20 to-green-800/20 rounded-lg p-8">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Números</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-green-400 mb-2">
                  {achievement.number}
                </div>
                <div className="text-gray-800">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="bg-white border-gray-300">
                <CardContent className="p-6 text-center">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                  <Badge variant="secondary" className="mb-4">
                    {member.role}
                  </Badge>
                  <p className="text-gray-700">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="bg-white rounded-lg p-8 md:p-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div>
                <Trophy className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Missão</h3>
                <p className="text-gray-700">
                  Democratizar o acesso a produtos de fitness de alta qualidade, 
                  ajudando pessoas a transformarem suas vidas através do esporte.
                </p>
              </div>
              <div>
                <Heart className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Visão</h3>
                <p className="text-gray-700">
                  Ser a principal referência em produtos fitness no Brasil, 
                  reconhecida pela qualidade e pelo atendimento excepcional.
                </p>
              </div>
              <div>
                <Users className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold mb-3">Valores</h3>
                <p className="text-gray-700">
                  Qualidade, transparência, compromisso com o cliente e paixão 
                  pelo mundo fitness são nossos pilares fundamentais.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Fale Conosco</h2>
          <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
            Tem alguma dúvida ou sugestão? Nossa equipe está sempre pronta para ajudar 
            você a alcançar seus objetivos fitness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Card className="bg-white border-gray-300">
              <CardContent className="p-4">
                <p className="text-green-400 font-bold">📧 Email</p>
                <p className="text-gray-800">contato@mundomaromba.com</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <p className="text-green-400 font-bold">📱 WhatsApp</p>
                <p className="text-gray-800">(11) 99999-9999</p>
              </CardContent>
            </Card>
            <Card className="bg-gray-900 border-gray-800">
              <CardContent className="p-4">
                <p className="text-green-400 font-bold">🕒 Horário</p>
                <p className="text-gray-800">Seg-Sex: 8h às 18h</p>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  );
}