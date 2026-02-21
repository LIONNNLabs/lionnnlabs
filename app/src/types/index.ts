export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'sfx' | 'color' | 'scribble' | 'vhs';
  image: string;
  previewUrl?: string;
  features?: string[];
  includes?: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface AudioSample {
  id: string;
  name: string;
  pack: string;
  duration: string;
  waveform: number[];
}

export interface Testimonial {
  id: string;
  name: string;
  handle: string;
  role: string;
  avatar: string;
  content: string;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export interface BeforeAfterImage {
  id: string;
  before: string;
  after: string;
  alt: string;
}
