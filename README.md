#  Marketplace Data Dashboard

Dashboard completo para análise de dados de um marketplace, desenvolvido em Python com **Streamlit** e **Plotly**.  
Inclui painel de performance, análises logísticas, filtros dinâmicos e um chatbot integrado para respostas rápidas sobre vendas, clientes e logística.

## Funcionalidades

- **Dashboard Interativo:** Visualize vendas, clientes, logística e indicadores de satisfação.
- **Filtros Avançados:** Filtre por data, região, cidade, lojas (sellers) e mais.
- **Gráficos Dinâmicos:** Gráficos em barra, linha, choropleth (mapas) e KPIs.
- **Chatbot Analítico:** Tire dúvidas sobre performance do marketplace, rankings, atrasos e desempenho dos vendedores.
- **Análise Logística:** KPIs e gráficos para Norte/Nordeste, frete, atrasos, tempo médio de entrega.
- **Visual Clean:** Layout responsivo, temas claros e escuros.

## Como rodar o projeto

1. **Clone este repositório:**
    ```bash
    git clone https://github.com/seu-usuario/seu-repo.git
    cd seu-repo
    ```
2. **Instale as dependências:**
    ```bash
    pip install -r requirements.txt
    ```
3. **Coloque o dataset na pasta do projeto:**
    - Nome esperado: `dataset_olist_final_limpo.csv`

4. **Execute o dashboard principal:**
    ```bash
    streamlit run dashboard_marketplace.py
    ```
    - Para abrir o bot:  
      ```bash
      streamlit run marketplace_bot.py
      ```

5. **Acesse no navegador:**  
    - [http://localhost:8501](http://localhost:8501)

---

## Estrutura de Pastas

