import React from 'react';
import ProductCard from './ProductCard';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';

const produtosGerais = ({ onAddToCart, onShowDetails }) => {
  const products = [
    {
      image: product1,
      icon: '⚡',
      title: 'produto1',
      description: 'O sistema definitivo de Kanban e Sprints para equipes de alta performance. Sincronize tarefas...',
      fullDescription: 'Simplifique seu fluxo de trabalho com o sistema de Kanban mais avançado do mercado. Projetado para equipes que buscam velocidade sem sacrificar a qualidade. Inclui ferramentas de estimativa de esforço, automação de movimentação de cards e integração nativa com Sprints ágeis.',
      tags: ['Kanban', 'Automação', 'Sprints'],
      price: '49'
    },
    {
      image: product2,
      icon: '👥',
      title: 'produto2',
      description: 'Reuniões diárias guiadas por IA. Identifique bloqueios automaticamente e mantenha sua...',
      fullDescription: 'Elimine reuniões improdutivas. Nossa IA analisa o progresso diário e gera sumários executivos, identifica gargalos antes que virem problemas e sugere pautas para dailies ultra-rápidas. Focado em comunicação assíncrona para times remotos.',
      tags: ['IA', 'Comunicação', 'Async'],
      price: '79'
    },
    {
      image: product3,
      icon: '📈',
      title: 'produto3',
      description: 'Gestão inteligente de capacidade e alocação. Visualize o esforço da equipe com relatórios preditivos e evite o...',
      fullDescription: 'Visibilidade total sobre quem está fazendo o quê. Com análise preditiva de capacidade, você consegue prever atrasos e redistribuir carga de trabalho de forma justa e eficiente. Previna o burnout cuidando da saúde do seu time através de dados reais.',
      tags: ['Analytics', 'Alocação', 'Saúde'],
      price: '99'
    },
    {
      image: product4,
      icon: '🛡️',
      title: 'produto4',
      description: 'Portal externo white-label premium. Dê aos seus clientes visibilidade total do progresso do projeto de forma...',
      fullDescription: 'Fortaleça a confiança dos seus clientes. Ofereça um portal exclusivo e seguro onde eles podem acompanhar o progresso em tempo real, sem acesso ao seu workspace interno. Totalmente customizável com sua marca (White-label).',
      tags: ['White-label', 'B2B', 'Seguro'],
      price: '129'
    }
  ];

  return (
    <div className="product-grid">
      {products.map((p, i) => (
        <ProductCard 
          key={i} 
          {...p} 
          onAddToCart={() => onAddToCart(p)} 
          onShowDetails={() => onShowDetails(p)}
        />
      ))}
    </div>
  );
};

export default produtosGerais;
