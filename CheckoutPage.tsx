import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Separator } from './ui/separator';
import { Trash2, Plus, Minus, CreditCard, Smartphone, DollarSign } from 'lucide-react';
import { useApp } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function CheckoutPage() {
  const { cart, updateCartQuantity, removeFromCart, setCurrentPage } = useApp();
  const [paymentMethod, setPaymentMethod] = useState('credit');
  const [shippingAddress, setShippingAddress] = useState({
    name: '',
    email: '',
    phone: '',
    street: '',
    number: '',
    complement: '',
    neighborhood: '',
    city: '',
    state: '',
    zipCode: ''
  });

  const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal >= 150 ? 0 : 15.90;
  const total = subtotal + shipping;

  const handleInputChange = (field: string, value: string) => {
    setShippingAddress(prev => ({ ...prev, [field]: value }));
  };

  const handlePlaceOrder = () => {
    // In a real app, this would process the order
    alert('Pedido realizado com sucesso! Você receberá um email de confirmação.');
    // Clear cart and redirect to home
    cart.forEach(item => removeFromCart(item.id));
    setCurrentPage('home');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-sky-25 to-blue-50 py-8">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center py-16">
            <h1 className="text-3xl font-bold mb-4 text-gray-900">Seu carrinho está vazio</h1>
            <p className="text-gray-600 mb-8">Adicione alguns produtos incríveis para continuar</p>
            <Button 
              size="lg" 
              className="bg-sky-600 hover:bg-sky-700 text-white"
              onClick={() => setCurrentPage('products')}
            >
              Continuar Comprando
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-25 to-blue-50 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-gray-900">Finalizar Compra</h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-2 space-y-6">
            {/* Cart Items */}
            <Card className="bg-white border-sky-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Itens do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {cart.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-sky-200 rounded-lg">
                    <ImageWithFallback
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-600">{item.category}</p>
                      <p className="text-sky-600 font-bold">R$ {item.price.toFixed(2)}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                        className="w-8 h-8 p-0 border-sky-200 text-gray-700"
                      >
                        <Minus className="w-4 h-4" />
                      </Button>
                      <span className="w-8 text-center text-gray-900">{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => updateCartQuantity(item.id, item.quantity + 1)}
                        className="w-8 h-8 p-0 border-sky-200 text-gray-700"
                      >
                        <Plus className="w-4 h-4" />
                      </Button>
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-600 hover:text-red-700 border-red-200 hover:border-red-300"
                    >
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Shipping Address */}
            <Card className="bg-white border-sky-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Endereço de Entrega</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-gray-700">Nome Completo</Label>
                    <Input
                      id="name"
                      value={shippingAddress.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-gray-700">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={shippingAddress.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="phone" className="text-gray-700">Telefone</Label>
                  <Input
                    id="phone"
                    value={shippingAddress.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="bg-white border-sky-200 text-gray-900"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div className="md:col-span-2">
                    <Label htmlFor="street" className="text-gray-700">Rua</Label>
                    <Input
                      id="street"
                      value={shippingAddress.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="number" className="text-gray-700">Número</Label>
                    <Input
                      id="number"
                      value={shippingAddress.number}
                      onChange={(e) => handleInputChange('number', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="complement" className="text-gray-700">Complemento (opcional)</Label>
                  <Input
                    id="complement"
                    value={shippingAddress.complement}
                    onChange={(e) => handleInputChange('complement', e.target.value)}
                    className="bg-white border-sky-200 text-gray-900"
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <Label htmlFor="neighborhood" className="text-gray-700">Bairro</Label>
                    <Input
                      id="neighborhood"
                      value={shippingAddress.neighborhood}
                      onChange={(e) => handleInputChange('neighborhood', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="city" className="text-gray-700">Cidade</Label>
                    <Input
                      id="city"
                      value={shippingAddress.city}
                      onChange={(e) => handleInputChange('city', e.target.value)}
                      className="bg-white border-sky-200 text-gray-900"
                    />
                  </div>
                  <div>
                    <Label htmlFor="state" className="text-gray-700">Estado</Label>
                    <Select onValueChange={(value) => handleInputChange('state', value)}>
                      <SelectTrigger className="bg-white border-sky-200 text-gray-900">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent className="bg-white border-sky-200">
                        <SelectItem value="SP">São Paulo</SelectItem>
                        <SelectItem value="RJ">Rio de Janeiro</SelectItem>
                        <SelectItem value="MG">Minas Gerais</SelectItem>
                        {/* Add more states as needed */}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="zipCode" className="text-gray-700">CEP</Label>
                  <Input
                    id="zipCode"
                    value={shippingAddress.zipCode}
                    onChange={(e) => handleInputChange('zipCode', e.target.value)}
                    className="bg-white border-sky-200 text-gray-900"
                    placeholder="00000-000"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Payment Method */}
            <Card className="bg-white border-sky-200">
              <CardHeader>
                <CardTitle className="text-gray-900">Forma de Pagamento</CardTitle>
              </CardHeader>
              <CardContent>
                <RadioGroup value={paymentMethod} onValueChange={setPaymentMethod} className="space-y-4">
                  <div className="flex items-center space-x-3 p-4 border border-sky-200 rounded-lg">
                    <RadioGroupItem value="credit" id="credit" />
                    <Label htmlFor="credit" className="flex items-center space-x-3 cursor-pointer flex-1 text-gray-900">
                      <CreditCard className="w-5 h-5 text-sky-600" />
                      <span>Cartão de Crédito</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border border-sky-200 rounded-lg">
                    <RadioGroupItem value="pix" id="pix" />
                    <Label htmlFor="pix" className="flex items-center space-x-3 cursor-pointer flex-1 text-gray-900">
                      <Smartphone className="w-5 h-5 text-sky-600" />
                      <span>PIX (5% de desconto)</span>
                    </Label>
                  </div>
                  <div className="flex items-center space-x-3 p-4 border border-sky-200 rounded-lg">
                    <RadioGroupItem value="paypal" id="paypal" />
                    <Label htmlFor="paypal" className="flex items-center space-x-3 cursor-pointer flex-1 text-gray-900">
                      <DollarSign className="w-5 h-5 text-sky-600" />
                      <span>PayPal</span>
                    </Label>
                  </div>
                </RadioGroup>

                {paymentMethod === 'credit' && (
                  <div className="mt-6 space-y-4">
                    <div>
                      <Label htmlFor="cardNumber" className="text-gray-700">Número do Cartão</Label>
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        className="bg-white border-sky-200 text-gray-900"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="expiry" className="text-gray-700">Validade</Label>
                        <Input
                          id="expiry"
                          placeholder="MM/AA"
                          className="bg-white border-sky-200 text-gray-900"
                        />
                      </div>
                      <div>
                        <Label htmlFor="cvv" className="text-gray-700">CVV</Label>
                        <Input
                          id="cvv"
                          placeholder="123"
                          className="bg-white border-sky-200 text-gray-900"
                        />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="cardName" className="text-gray-700">Nome no Cartão</Label>
                      <Input
                        id="cardName"
                        placeholder="Nome como está no cartão"
                        className="bg-gray-800 border-gray-700"
                      />
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-white border-sky-200 sticky top-4">
              <CardHeader>
                <CardTitle className="text-gray-900">Resumo do Pedido</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-700">
                    <span>Subtotal</span>
                    <span>R$ {subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700">
                    <span>Frete</span>
                    <span className={shipping === 0 ? 'text-green-600' : ''}>
                      {shipping === 0 ? 'Grátis' : `R$ ${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  {paymentMethod === 'pix' && (
                    <div className="flex justify-between text-green-600">
                      <span>Desconto PIX (5%)</span>
                      <span>-R$ {(subtotal * 0.05).toFixed(2)}</span>
                    </div>
                  )}
                </div>

                <Separator className="bg-sky-200" />

                <div className="flex justify-between font-bold text-lg">
                  <span className="text-gray-900">Total</span>
                  <span className="text-sky-600">
                    R$ {paymentMethod === 'pix' ? (total * 0.95).toFixed(2) : total.toFixed(2)}
                  </span>
                </div>

                {shipping > 0 && (
                  <p className="text-sm text-gray-600">
                    Adicione R$ {(150 - subtotal).toFixed(2)} para frete grátis
                  </p>
                )}

                <Button 
                  size="lg" 
                  className="w-full bg-sky-600 hover:bg-sky-700 text-white py-3"
                  onClick={handlePlaceOrder}
                >
                  Finalizar Pedido
                </Button>

                <div className="text-xs text-gray-600 space-y-1">
                  <p>✓ Compra 100% segura</p>
                  <p>✓ Garantia de 30 dias</p>
                  <p>✓ Suporte 24/7</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}