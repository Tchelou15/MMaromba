import React, { useState } from 'react';
import { useApp } from '../App';
import { Button } from './ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { 
  Users, 
  Package, 
  DollarSign, 
  ShoppingCart, 
  TrendingUp, 
  Star,
  LogOut,
  Eye,
  Edit,
  Trash2
} from 'lucide-react';

interface DashboardStats {
  totalSales: number;
  totalOrders: number;
  totalProducts: number;
  totalCustomers: number;
  averageRating: number;
  monthlyGrowth: number;
}

interface Order {
  id: string;
  customer: string;
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  date: string;
  items: number;
}

export const AdminDashboard: React.FC = () => {
  const { setCurrentPage, setIsAdminLoggedIn, cart } = useApp();
  
  // Mock dashboard data
  const [stats] = useState<DashboardStats>({
    totalSales: 45780.50,
    totalOrders: 342,
    totalProducts: 67,
    totalCustomers: 1248,
    averageRating: 4.6,
    monthlyGrowth: 12.5
  });

  const [recentOrders] = useState<Order[]>([
    {
      id: '#2024001',
      customer: 'João Silva',
      total: 299.80,
      status: 'delivered',
      date: '2024-01-15',
      items: 3
    },
    {
      id: '#2024002',
      customer: 'Maria Santos',
      total: 149.90,
      status: 'shipped',
      date: '2024-01-14',
      items: 1
    },
    {
      id: '#2024003',
      customer: 'Pedro Costa',
      total: 589.70,
      status: 'processing',
      date: '2024-01-14',
      items: 5
    },
    {
      id: '#2024004',
      customer: 'Ana Rodrigues',
      total: 89.90,
      status: 'pending',
      date: '2024-01-13',
      items: 1
    }
  ]);

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    setCurrentPage('home');
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'delivered': return 'bg-green-100 text-green-800';
      case 'shipped': return 'bg-blue-100 text-blue-800';
      case 'processing': return 'bg-yellow-100 text-yellow-800';
      case 'pending': return 'bg-gray-100 text-gray-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'delivered': return 'Entregue';
      case 'shipped': return 'Enviado';
      case 'processing': return 'Processando';
      case 'pending': return 'Pendente';
      default: return status;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-25 to-blue-50">
      <div className="bg-white shadow-sm border-b border-sky-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Dashboard Administrativo</h1>
              <p className="text-gray-600">Mundo Maromba - Painel de Controle</p>
            </div>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="border-sky-300 text-sky-700 hover:bg-sky-50"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Sair
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-white border border-sky-200">
            <TabsTrigger value="overview" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-700">
              Visão Geral
            </TabsTrigger>
            <TabsTrigger value="orders" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-700">
              Pedidos
            </TabsTrigger>
            <TabsTrigger value="products" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-700">
              Produtos
            </TabsTrigger>
            <TabsTrigger value="customers" className="data-[state=active]:bg-sky-100 data-[state=active]:text-sky-700">
              Clientes
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="bg-white border-sky-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Vendas Totais</CardTitle>
                  <DollarSign className="h-4 w-4 text-sky-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">R$ {stats.totalSales.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</div>
                  <p className="text-xs text-green-600 flex items-center mt-1">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    +{stats.monthlyGrowth}% este mês
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white border-sky-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Pedidos</CardTitle>
                  <ShoppingCart className="h-4 w-4 text-sky-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stats.totalOrders}</div>
                  <p className="text-xs text-gray-600 mt-1">Total de pedidos</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-sky-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Produtos</CardTitle>
                  <Package className="h-4 w-4 text-sky-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stats.totalProducts}</div>
                  <p className="text-xs text-gray-600 mt-1">Produtos cadastrados</p>
                </CardContent>
              </Card>

              <Card className="bg-white border-sky-200 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium text-gray-700">Clientes</CardTitle>
                  <Users className="h-4 w-4 text-sky-600" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</div>
                  <p className="text-xs text-gray-600 mt-1">Clientes cadastrados</p>
                </CardContent>
              </Card>
            </div>

            {/* Recent Orders */}
            <Card className="bg-white border-sky-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Pedidos Recentes</CardTitle>
                <CardDescription className="text-gray-600">
                  Últimos pedidos realizados na loja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.customer}</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="font-bold text-gray-900">R$ {order.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <p className="text-sm text-gray-600">{order.items} {order.items === 1 ? 'item' : 'itens'}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="orders" className="space-y-6">
            <Card className="bg-white border-sky-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Gerenciar Pedidos</CardTitle>
                <CardDescription className="text-gray-600">
                  Visualize e gerencie todos os pedidos da loja
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentOrders.map((order) => (
                    <div key={order.id} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <p className="font-medium text-gray-900">{order.id}</p>
                            <p className="text-sm text-gray-600">{order.customer} • {order.date}</p>
                          </div>
                          <Badge className={getStatusColor(order.status)}>
                            {getStatusText(order.status)}
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <p className="font-bold text-gray-900">R$ {order.total.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</p>
                        <Button size="sm" variant="outline" className="border-sky-300 text-sky-700 hover:bg-sky-50">
                          <Eye className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="products" className="space-y-6">
            <Card className="bg-white border-sky-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Gerenciar Produtos</CardTitle>
                <CardDescription className="text-gray-600">
                  Adicione, edite ou remova produtos do catálogo
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600">Total de {stats.totalProducts} produtos cadastrados</p>
                    <Button className="bg-sky-600 hover:bg-sky-700 text-white">
                      Adicionar Produto
                    </Button>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((item) => (
                      <div key={item} className="border border-gray-200 rounded-lg p-4">
                        <div className="aspect-square bg-gray-100 rounded-lg mb-3"></div>
                        <h3 className="font-medium text-gray-900 mb-1">Produto {item}</h3>
                        <p className="text-sm text-gray-600 mb-2">Categoria exemplo</p>
                        <p className="font-bold text-gray-900 mb-3">R$ 199,90</p>
                        <div className="flex space-x-2">
                          <Button size="sm" variant="outline" className="flex-1 border-sky-300 text-sky-700 hover:bg-sky-50">
                            <Edit className="w-4 h-4 mr-1" />
                            Editar
                          </Button>
                          <Button size="sm" variant="outline" className="border-red-300 text-red-700 hover:bg-red-50">
                            <Trash2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="customers" className="space-y-6">
            <Card className="bg-white border-sky-200 shadow-sm">
              <CardHeader>
                <CardTitle className="text-gray-900">Clientes</CardTitle>
                <CardDescription className="text-gray-600">
                  Informações sobre os clientes cadastrados
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gray-900">{stats.totalCustomers}</div>
                    <p className="text-gray-600">Total de Clientes</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-sky-600 flex items-center justify-center">
                      {stats.averageRating}
                      <Star className="w-6 h-6 ml-1 fill-current" />
                    </div>
                    <p className="text-gray-600">Avaliação Média</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-600">85%</div>
                    <p className="text-gray-600">Satisfação</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  {['João Silva', 'Maria Santos', 'Pedro Costa', 'Ana Rodrigues', 'Carlos Oliveira'].map((customer, index) => (
                    <div key={customer} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-600 font-medium">{customer.split(' ').map(n => n[0]).join('')}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">{customer}</p>
                          <p className="text-sm text-gray-600">{Math.floor(Math.random() * 20) + 1} pedidos</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm text-gray-600 ml-1">{(4.0 + Math.random()).toFixed(1)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};