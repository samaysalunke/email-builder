export interface EmailBlock {
  id: string;
  type: 'header' | 'product' | 'promo' | 'text' | 'image' | 'button' | 'divider' | 'spacer';
  content: Record<string, any>;
}

export interface EmailTemplate {
  id: string;
  name: string;
  subject: string;
  blocks: EmailBlock[];
  createdAt: string;
  updatedAt: string;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  salePrice?: number;
  imageUrl: string;
}

export interface Promotion {
  id: string;
  code: string;
  description: string;
  discountPercentage?: number;
  discountAmount?: number;
  expiryDate?: string;
}

export interface IntegrationConfig {
  provider: 'klaviyo' | 'postscript';
  apiKey?: string;
  connected: boolean;
}