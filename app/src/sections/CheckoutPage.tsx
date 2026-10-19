import { useState } from 'react';
import { Lock, HelpCircle } from 'lucide-react';
import { useCart } from '@/context/CartContext';

interface CheckoutPageProps {
  onNavigate: (page: string) => void;
}

export function CheckoutPage({ onNavigate }: CheckoutPageProps) {
  const { items, totalPrice } = useCart();
  const [email, setEmail] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [nameOnCard, setNameOnCard] = useState('');
  const [country, setCountry] = useState('Peru');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [address, setAddress] = useState('');
  const [apartment, setApartment] = useState('');
  const [city, setCity] = useState('');
  const [region, setRegion] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [emailOffers, setEmailOffers] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your purchase! This is a demo checkout.');
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-white pt-24 pb-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <button onClick={() => onNavigate('home')} className="flex flex-col items-center">
            <div className="flex items-end gap-0.5">
              <div className="w-2 h-4 bg-lion-red rounded-full" />
              <div className="w-3 h-6 bg-lion-red rounded-full" />
              <div className="w-2 h-4 bg-lion-red rounded-full" />
            </div>
            <span className="text-neutral-950 text-xs font-medium tracking-wider">Lionnn Labs</span>
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold">Contact</h3>
                  <button type="button" className="text-lion-red text-sm">Sign in</button>
                </div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                  required
                />
                <label className="flex items-center gap-2 mt-3 text-sm">
                  <input
                    type="checkbox"
                    checked={emailOffers}
                    onChange={(e) => setEmailOffers(e.target.checked)}
                    className="w-4 h-4 text-lion-red rounded focus:ring-lion-red"
                  />
                  <span>Email me with news and offers</span>
                </label>
              </div>

              {/* Payment Section */}
              <div>
                <h3 className="text-lg font-semibold mb-1">Payment</h3>
                <p className="text-sm text-neutral-500 mb-4">All transactions are secure and encrypted.</p>
                
                <div className="border border-neutral-300 rounded-lg overflow-hidden">
                  {/* Payment Method Header */}
                  <div className="bg-neutral-50 px-4 py-3 flex items-center justify-between border-b border-neutral-300">
                    <span className="font-medium">Credit card</span>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-neutral-500 italic">VISA</span>
                      <div className="w-8 h-5 bg-gradient-to-r from-red-500 to-yellow-500 rounded" />
                    </div>
                  </div>

                  {/* Card Fields */}
                  <div className="p-4 space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="Card number"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent pr-10"
                        required
                      />
                      <Lock className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="Expiration date (MM / YY)"
                        className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                        required
                      />
                      <div className="relative">
                        <input
                          type="text"
                          value={cvc}
                          onChange={(e) => setCvc(e.target.value)}
                          placeholder="Security code"
                          className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent pr-10"
                          required
                        />
                        <HelpCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-400" />
                      </div>
                    </div>
                    <input
                      type="text"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                      placeholder="Name on card"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                      required
                    />
                  </div>
                </div>
              </div>

              {/* Billing Address */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Billing address</h3>
                <div className="space-y-4">
                  <select
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                  >
                    <option>Peru</option>
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Canada</option>
                    <option>Australia</option>
                  </select>
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      type="text"
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      placeholder="First name"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                      required
                    />
                    <input
                      type="text"
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      placeholder="Last name"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    placeholder="Address"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                    required
                  />
                  <input
                    type="text"
                    value={apartment}
                    onChange={(e) => setApartment(e.target.value)}
                    placeholder="Apartment, suite, etc. (optional)"
                    className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                  />
                  <div className="grid grid-cols-3 gap-4">
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="City"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                      required
                    />
                    <select
                      value={region}
                      onChange={(e) => setRegion(e.target.value)}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                    >
                      <option value="">Region</option>
                      <option>Lima</option>
                      <option>Cusco</option>
                      <option>Arequipa</option>
                    </select>
                    <input
                      type="text"
                      value={postalCode}
                      onChange={(e) => setPostalCode(e.target.value)}
                      placeholder="Postal code (optional)"
                      className="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-lion-red text-white py-4 rounded-lg font-medium hover:bg-lion-red-dark transition-colors"
              >
                Pay now
              </button>

              {/* Footer Links */}
              <div className="flex justify-center gap-4 text-sm text-lion-red">
                <button type="button" className="hover:underline">Refund policy</button>
                <button type="button" className="hover:underline">Shipping</button>
                <button type="button" className="hover:underline">Terms of service</button>
                <button type="button" className="hover:underline">Cancellations</button>
              </div>
            </form>
          </div>

          {/* Right Column - Order Summary */}
          <div className="bg-neutral-50 p-6 rounded-lg h-fit">
            {items.map((item) => (
              <div key={item.product.id} className="flex gap-4 mb-4">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                  <img 
                    src={item.product.image} 
                    alt={item.product.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute -top-1 -right-1 w-5 h-5 bg-lion-red text-white text-xs rounded-full flex items-center justify-center">
                    {item.quantity}
                  </div>
                </div>
                <div className="flex-1">
                  <h4 className="font-medium">{item.product.name}</h4>
                  <p className="text-sm text-neutral-500">Lionnn Labs {item.product.category.toUpperCase()}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${(item.product.price * item.quantity).toFixed(2)}</p>
                </div>
              </div>
            ))}

            <div className="border-t border-neutral-200 pt-4 mt-4">
              <div className="flex gap-2 mb-4">
                <input
                  type="text"
                  placeholder="Discount code"
                  className="flex-1 px-4 py-2 border border-neutral-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lion-red focus:border-transparent"
                />
                <button className="px-4 py-2 bg-neutral-200 text-neutral-600 rounded-lg font-medium hover:bg-neutral-300 transition-colors">
                  Apply
                </button>
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-4 mt-4">
              <div className="flex justify-between items-center">
                <span className="font-semibold">Total</span>
                <div className="text-right">
                  <span className="text-sm text-neutral-500">USD</span>
                  <span className="text-2xl font-bold ml-2">${totalPrice.toFixed(2)}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
