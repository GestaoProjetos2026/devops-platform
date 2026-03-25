# PRD — DevOps & Platform Engineering

---

## 1. Visão Geral

O Squad 5 – DevOps & Platform Engineering é responsável por prover a base operacional da plataforma, garantindo que os serviços desenvolvidos pelos demais squads possam ser **executados, integrados, automatizados e mantidos de forma consistente e previsível**.

A atuação do squad foca na padronização dos ambientes, automação dos fluxos de entrega e redução de fricção operacional entre equipes.

---

## 2. Problema

No cenário atual, a ausência de uma camada operacional padronizada gera:

- inconsistência na execução dos serviços entre ambientes;
- dependência de configurações manuais;
- falhas recorrentes em processos de build e deploy;
- baixa rastreabilidade das mudanças;
- dificuldade de integração entre módulos;
- alto tempo de resolução de problemas de ambiente.

Esses fatores impactam diretamente a **confiabilidade da plataforma** e a **produtividade dos squads**.

---

## 3. Objetivos

A plataforma deve fornecer uma base comum que permita:

- execução previsível e padronizada dos serviços;
- automação completa (ou majoritária) de build e deploy;
- redução significativa de intervenção manual;
- centralização de informações e dependências dos módulos;
- suporte à integração contínua em ambiente acadêmico.

---

## 4. Escopo

### 4.1 Dentro do escopo

- provisionamento do ambiente base;
- containerização dos serviços;
- definição e automação de pipelines de CI/CD;
- automação do processo de entrega (deploy);
- versionamento e atualização de containers;
- catálogo central de módulos da plataforma.

### 4.2 Fora do escopo

- operação de ambiente produtivo comercial;
- definição de SLA formal;
- implementação de alta disponibilidade avançada;
- soluções completas de observabilidade enterprise (podendo evoluir futuramente).

---

## 5. Entregas Principais

### 5.1 Ambiente Padronizado  
Disponibilização de um ambiente comum, reproduzível e documentado para execução dos serviços.

### 5.2 Containerização dos Serviços  
Empacotamento dos serviços com comportamento previsível e independente de ambiente.

### 5.3 Pipeline de CI/CD  
Fluxo automatizado para build, validação e atualização dos serviços.

### 5.4 Catálogo de Módulos (Marketplace)  
Repositório central com informações e dependências dos módulos da plataforma.

---

## 6. Requisitos Funcionais

- A plataforma deve permitir inicialização dos serviços com baixo esforço.
- Cada módulo deve possuir definição de container padronizada.
- O pipeline deve ser acionado automaticamente a cada alteração no repositório.
- O pipeline deve executar etapas mínimas de build e validação.
- O ambiente deve permitir atualização controlada dos containers.
- Deve existir um catálogo acessível com os módulos disponíveis.
- Cada módulo deve conter metadados mínimos para integração.

---

## 7. Requisitos Não Funcionais

- **Confiabilidade:** redução de falhas causadas por processos manuais.
- **Rastreabilidade:** visibilidade completa do status dos pipelines.
- **Reprodutibilidade:** capacidade de replicar o ambiente em máquinas compatíveis.
- **Manutenibilidade:** solução simples, documentada e de fácil evolução.
- **Consistência:** comportamento uniforme entre serviços e ambientes.
- **Eficiência Operacional:** redução de retrabalho e tempo de setup.

---

## 8. Stack Tecnológica

- Containerização: Docker  
- Orquestração local: Docker Compose  
- Versionamento: GitHub  
- CI/CD: GitHub Actions (ou equivalente)  
- Gestão de projetos: OpenProject / Plane  
- Ambiente: Linux  

---

## 9. Fluxo de CI/CD

1. Desenvolvedor realiza commit no repositório  
2. Pipeline é acionado automaticamente  
3. Execução de build e validações básicas  
4. Geração ou atualização dos containers  
5. Deploy no ambiente configurado  
6. Disponibilização do status para acompanhamento  

---

## 10. Catálogo de Módulos

O catálogo deve funcionar como um ponto central de visibilidade e integração da plataforma.

### Objetivos

- centralizar a visão dos módulos do ERP;
- facilitar o entendimento funcional e técnico;
- apoiar a integração entre squads;
- servir como referência do ecossistema.

### Estrutura mínima por módulo

- nome do módulo  
- descrição  
- responsável  
- dependências  
- endpoints (quando aplicável)  
- status  

### Exemplos

- Core Engine & Authentication  
- Financeiro & Fiscal  
- CRM & Growth  
- Service Desk  
- Plataforma DevOps  

---

## 11. MVP

O MVP deve contemplar:

- execução padronizada via Docker;
- ambiente integrado com Docker Compose;
- pipeline inicial de integração contínua;
- atualização automatizada ou semi-automatizada de containers;
- catálogo inicial de módulos.

---

## 12. Critérios de Aceitação

- Serviços executam corretamente no ambiente padronizado;
- Pipeline realiza ao menos um fluxo automatizado completo;
- Containers podem ser gerados e atualizados com sucesso;
- Catálogo de módulos disponível e acessível;
- Ambiente pode ser reproduzido seguindo a documentação.

---

## 13. Métricas

- tempo de provisionamento do ambiente;
- tempo médio de execução do pipeline;
- taxa de sucesso dos pipelines;
- redução de erros manuais;
- número de módulos integrados.

---

## 14. Riscos

- desalinhamento técnico entre squads;
- baixa adesão aos padrões definidos;
- complexidade excessiva da automação;
- documentação insuficiente;
- incompatibilidade entre módulos.

---

## 15. Dependências

- alinhamento técnico entre squads;
- adoção dos padrões definidos;
- ambiente Linux compatível;
- organização mínima dos repositórios.

---

## 16. Contexto

Este projeto possui caráter acadêmico e educacional, com foco em promover aprendizado prático em:

- automação de infraestrutura;
- integração contínua;
- padronização de ambientes;
- colaboração entre squads.
