import React, { useState } from 'react';
import { useApp } from '../App';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Label } from './ui/label';
import { Alert, AlertDescription } from './ui/alert';
import { Lock, User } from 'lucide-react';

export const AdminLoginPage: React.FC = () => {
  const { setCurrentPage, setIsAdminLoggedIn } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulate authentication delay
    setTimeout(() => {
      // Mock admin credentials
      if (username === 'admin' && password === 'admin123') {
        setIsAdminLoggedIn(true);
        setCurrentPage('admin-dashboard');
      } else {
        setError('Credenciais inválidas. Use admin/admin123 para teste.');
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 to-blue-100 flex items-center justify-center p-4">
      <Card className="w-full max-w-md shadow-xl bg-white border-sky-200">
        <CardHeader className="text-center space-y-2">
          <div className="mx-auto w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
            <Lock className="w-8 h-8 text-sky-600" />
          </div>
          <CardTitle className="text-2xl text-gray-800">Painel Administrativo</CardTitle>
          <CardDescription className="text-gray-600">
            Faça login para acessar o dashboard da loja
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="username" className="text-gray-700">Usuário</Label>
              <div className="relative">
                <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="username"
                  type="text"
                  placeholder="Digite seu usuário"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="pl-10 border-gray-300 focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password" className="text-gray-700">Senha</Label>
              <div className="relative">
                <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                <Input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-gray-300 focus:ring-sky-500 focus:border-sky-500"
                  required
                />
              </div>
            </div>

            {error && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-700">
                  {error}
                </AlertDescription>
              </Alert>
            )}

            <Button
              type="submit"
              className="w-full bg-sky-600 hover:bg-sky-700 text-white"
              disabled={isLoading}
            >
              {isLoading ? 'Fazendo login...' : 'Entrar'}
            </Button>
          </form>

          <div className="mt-6 text-center">
            <Button
              variant="ghost"
              onClick={() => setCurrentPage('home')}
              className="text-sky-600 hover:text-sky-700 hover:bg-sky-50"
            >
              Voltar à loja
            </Button>
          </div>

          <div className="mt-4 p-3 bg-sky-50 rounded-lg">
            <p className="text-sm text-sky-700 text-center">
              <strong>Credenciais de teste:</strong><br />
              Usuário: admin<br />
              Senha: admin123
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};