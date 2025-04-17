
import React from 'react';

interface StructuredDataProps {
  type: 'Product' | 'Organization' | 'LocalBusiness';
  data: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data }) => {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': type,
    ...data,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

// Usage example for product
export const ProductStructuredData: React.FC = () => {
  const productData = {
    name: 'Map of Us - Custom Relationship Map',
    image: '/lovable-uploads/logo_with_bg.jpg',
    description: 'Transform your relationship journey into a beautiful, customized map.',
    brand: {
      '@type': 'Brand',
      name: 'Map of Us',
    },
    offers: {
      '@type': 'AggregateOffer',
      lowPrice: '75',
      highPrice: '175',
      priceCurrency: 'USD',
      availability: 'https://schema.org/InStock',
    },
  };

  return <StructuredData type="Product" data={productData} />;
};

// Usage example for organization
export const OrganizationStructuredData: React.FC = () => {
  const orgData = {
    name: 'Map of Us',
    url: 'https://mapofus.com',
    logo: '/lovable-uploads/logo_with_bg.jpg',
    sameAs: ['https://www.instagram.com/ish.map/'],
  };

  return <StructuredData type="Organization" data={orgData} />;
};
