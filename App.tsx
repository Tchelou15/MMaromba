import React, { useState, createContext, useContext } from 'react';
import { Header } from './components/Header';
import { HomePage } from './components/HomePage';
import { ProductListingPage } from './components/ProductListingPage';
import { ProductDetailPage } from './components/ProductDetailPage';
import { CheckoutPage } from './components/CheckoutPage';
import { LoginPage } from './components/LoginPage';
import { SignUpPage } from './components/SignUpPage';
import { AboutPage } from './components/AboutPage';
import { ReviewsPage } from './components/ReviewsPage';
import { AdminLoginPage } from './components/AdminLoginPage';
import { AdminDashboard } from './components/AdminDashboard';

// Import product images
import wheyProteinImage from 'figma:asset/865af70aa24866d0ffded247eb957e3d3574d27d.png';
import creatineImage from 'figma:asset/92649c1441f686221bca238252d1e66efdcbbcd3.png';
import preWorkoutImage from 'figma:asset/f6d4b1917d1fc1e187c9e286ca49da1a8e7854ac.png';
import bcaaImage from 'figma:asset/9815f05ad0b304def4325f90ab2198b95b28d203.png';
import dumbbellsImage from 'figma:asset/feaca9eb58e47ec4b211c1ff6d6e9addeac92027.png';
import resistanceBandsImage from 'figma:asset/802bffa545d9b130d8f2aac52382b0faadffe4ff.png';
import blackTshirtsImage from 'figma:asset/93c5af79e0efed6b5fcd1de742b559b39f673ae9.png';
import colorfulShortsImage from 'figma:asset/0cf66339094e988fdefccf62e2cf1ff61a5aaf41.png';

// Types
export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  rating: number;
  specifications?: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export interface AppContextType {
  currentPage: string;
  setCurrentPage: (page: string) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  cart: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  isLoggedIn: boolean;
  setIsLoggedIn: (loggedIn: boolean) => void;
  isAdminLoggedIn: boolean;
  setIsAdminLoggedIn: (loggedIn: boolean) => void;
}

const AppContext = createContext<AppContextType | null>(null);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp deve ser usado dentro de um AppProvider');
  }
  return context;
};

// Mock product data
const mockProducts: Product[] = [
  {
    id: '1',
    name: 'Whey Protein Premium',
    price: 149.90,
    image: wheyProteinImage,
    description: 'Proteína de alta qualidade para ganho de massa muscular',
    category: 'Suplementos',
    rating: 4.8,
    specifications: ['25g de proteína por dose', 'Sem lactose', 'Sabor chocolate']
  },
  {
    id: '2',
    name: 'Kit Halteres Ajustáveis',
    price: 899.90,
    image: dumbbellsImage,
    description: 'Conjunto de halteres ajustáveis para treino em casa',
    category: 'Equipamentos',
    rating: 4.5,
    specifications: ['Peso ajustável de 5kg a 40kg', 'Material ferro fundido', 'Base antiderrapante']
  },
  {
    id: '3',
    name: 'Camiseta Dry Fit',
    price: 59.90,
    image: blackTshirtsImage,
    description: 'Camiseta tecnológica para treinos intensos',
    category: 'Roupas',
    rating: 4.3,
    specifications: ['Material dry fit', 'Proteção UV', 'Várias cores disponíveis']
  },
  {
    id: '4',
    name: 'Creatina Monohidratada',
    price: 89.90,
    image: creatineImage,
    description: 'Creatina pura para aumento de força e potência',
    category: 'Suplementos',
    rating: 4.7,
    specifications: ['100% pura', '3g por dose', 'Sem sabor']
  },
  {
    id: '5',
    name: 'BCAA 2:1:1',
    price: 79.90,
    image: bcaaImage,
    description: 'Aminoácidos de cadeia ramificada para recuperação muscular',
    category: 'Suplementos',
    rating: 4.6,
    specifications: ['Proporção 2:1:1', '5g por dose', 'Sabor frutas vermelhas']
  },
  {
    id: '6',
    name: 'Pré-Treino Psychotic',
    price: 119.90,
    image: preWorkoutImage,
    description: 'Pré-treino intenso para máximo rendimento e energia',
    category: 'Suplementos',
    rating: 4.9,
    specifications: ['300mg cafeína', 'Beta-alanina', 'Creatina monohidratada', 'Sabor uva']
  },
  {
    id: '7',
    name: 'Shorts Dry Fit Premium',
    price: 79.90,
    image: colorfulShortsImage,
    description: 'Shorts esportivos com tecnologia de secagem rápida',
    category: 'Roupas',
    rating: 4.4,
    specifications: ['Material dry fit', 'Elástico na cintura', 'Bolsos laterais', 'Várias cores']
  },
  {
    id: '8',
    name: 'Kit Elásticos de Resistência',
    price: 149.90,
    image: resistanceBandsImage,
    description: 'Kit completo de elásticos para treino funcional',
    category: 'Equipamentos',
    rating: 4.5,
    specifications: ['5 níveis de resistência', 'Alças ergonômicas', 'Âncora para porta', 'Bolsa para transporte']
  }
];

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const contextValue: AppContextType = {
    currentPage,
    setCurrentPage,
    selectedProduct,
    setSelectedProduct,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    isLoggedIn,
    setIsLoggedIn,
    isAdminLoggedIn,
    setIsAdminLoggedIn
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage products={mockProducts} />;
      case 'products':
        return <ProductListingPage products={mockProducts} />;
      case 'product-detail':
        return <ProductDetailPage product={selectedProduct} products={mockProducts} />;
      case 'checkout':
        return <CheckoutPage />;
      case 'login':
        return <LoginPage />;
      case 'signup':
        return <SignUpPage />;
      case 'about':
        return <AboutPage />;
      case 'reviews':
        return <ReviewsPage />;
      case 'admin-login':
        return <AdminLoginPage />;
      case 'admin-dashboard':
        return <AdminDashboard />;
      default:
        return <HomePage products={mockProducts} />;
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      <div className="min-h-screen bg-gradient-to-br from-sky-25 to-blue-50">
        {currentPage !== 'admin-login' && currentPage !== 'admin-dashboard' && <Header />}
        <main>
          {renderPage()}
        </main>
      </div>
    </AppContext.Provider>
  );
}