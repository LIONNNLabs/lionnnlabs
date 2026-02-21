import { X, Trash2 } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CartSidebarProps {
  onCheckout: () => void;
}

export function CartSidebar({ onCheckout }: CartSidebarProps) {
  const { items, isCartOpen, setIsCartOpen, removeFromCart, updateQuantity, totalPrice } = useCart();

  if (!isCartOpen) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/50 z-50"
        onClick={() => setIsCartOpen(false)}
      />
      
      {/* Sidebar */}
      <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white z-50 shadow-2xl flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-blue-600">Your cart</h2>
          <button 
            onClick={() => setIsCartOpen(false)}
            className="text-gray-400 hover:text-gray-600 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-auto p-6">
          {items.length === 0 ? (
            <div className="text-center text-gray-500 py-12">
              <p className="text-lg">Your cart is empty</p>
              <p className="text-sm mt-2">Add some products to get started</p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Column Headers */}
              <div className="flex text-xs text-gray-500 uppercase tracking-wider border-b pb-2">
                <span className="flex-1">Product</span>
                <span className="w-20 text-right">Total</span>
              </div>

              {items.map((item) => (
                <div key={item.product.id} className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-medium text-gray-900">{item.product.name}</h3>
                        <p className="text-sm text-gray-500">{item.product.category.toUpperCase()}</p>
                      </div>
                      <span className="font-medium">${item.product.price.toFixed(2)}</span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-gray-500 uppercase">Quantity</span>
                        <div className="flex items-center bg-blue-600 rounded">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="px-3 py-1 text-white hover:bg-blue-700 transition-colors"
                          >
                            -
                          </button>
                          <span className="px-3 py-1 text-white font-medium min-w-[2rem] text-center">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="px-3 py-1 text-white hover:bg-blue-700 transition-colors"
                          >
                            +
                          </button>
                        </div>
                      </div>

                      <button
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="w-5 h-5" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t p-6 space-y-4">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">Estimated total</span>
              <span className="text-xl font-bold text-blue-600">${totalPrice.toFixed(2)} USD</span>
            </div>
            <p className="text-xs text-gray-500">
              Taxes, discounts and <span className="underline">shipping</span> calculated at checkout.
            </p>
            <button
              onClick={onCheckout}
              className="w-full bg-blue-600 text-white py-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
            >
              CHECK OUT
            </button>
          </div>
        )}
      </div>
    </>
  );
}
