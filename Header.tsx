import React from 'react';
import { ShoppingCart, User, Menu, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useApp } from '../App';

export function Header() {
  const { currentPage, setCurrentPage, cart, isLoggedIn, setIsLoggedIn } = useApp();

  const navigationItems = [
    { label: 'Início', page: 'home' },
    { label: 'Produtos', page: 'products' },
    { label: 'Sobre', page: 'about' },
    { label: 'Contato', page: 'contact' },
    { label: 'Avaliações', page: 'reviews' }
  ];

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="bg-white border-b border-sky-200 sticky top-0 z-50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Brand */}
          <div 
            className="flex items-center space-x-3 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={() => setCurrentPage('home')}
          >
            <div className="w-10 h-10 bg-gradient-to-br from-sky-400 to-sky-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">MM</span>
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">
              Mundo Maromba
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-3 py-2 rounded-md transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-sky-600 bg-sky-100'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Right Side Icons */}
          <div className="flex items-center space-x-4">
            {/* Admin Access */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage('admin-login')}
              className="text-gray-600 hover:text-sky-600 hover:bg-sky-50"
            >
              <Shield className="w-4 h-4 mr-2" />
              Admin
            </Button>

            {/* User Menu */}
            <div className="flex items-center space-x-2">
              {isLoggedIn ? (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsLoggedIn(false)}
                  className="text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                >
                  <User className="w-5 h-5 mr-2" />
                  Sair
                </Button>
              ) : (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setCurrentPage('login')}
                  className="text-gray-600 hover:text-sky-600 hover:bg-sky-50"
                >
                  <User className="w-5 h-5 mr-2" />
                  Entrar
                </Button>
              )}
            </div>

            {/* Shopping Cart */}
            <button
              onClick={() => setCurrentPage('checkout')}
              className="relative p-2 text-gray-600 hover:text-sky-600 transition-colors duration-200"
            >
              <ShoppingCart className="w-6 h-6" />
              {totalItems > 0 && (
                <Badge 
                  variant="default" 
                  className="absolute -top-1 -right-1 bg-sky-500 text-white min-w-[20px] h-5 flex items-center justify-center text-xs"
                >
                  {totalItems}
                </Badge>
              )}
            </button>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 text-gray-600 hover:text-sky-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <nav className="md:hidden py-4 border-t border-sky-200">
          <div className="flex flex-wrap gap-2">
            {navigationItems.map((item) => (
              <button
                key={item.page}
                onClick={() => setCurrentPage(item.page)}
                className={`px-3 py-2 rounded-md text-sm transition-colors duration-200 ${
                  currentPage === item.page
                    ? 'text-sky-600 bg-sky-100'
                    : 'text-gray-700 hover:text-sky-600 hover:bg-sky-50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </nav>
      </div>
    </header>
  );
}