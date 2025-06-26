import React, { useState } from "react";

export default function Portfolio() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#727272] font-sans p-8" style={{ fontSize: '14px', lineHeight: '1.5', fontFamily: 'Noto Sans, Helvetica Neue, Helvetica, Arial, sans-serif', fontWeight: 400 }}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Coluna Esquerda */}
        <aside className="md:col-span-1 text-center">
          <img
            src="/perfil.jpg"
            alt="Foto de perfil"
            className="w-[270px] h-[270px] rounded-full mx-auto mb-4 object-cover border-2 border-gray-300 shadow-md"
          />
          <h1 className="text-3xl font-bold text-blue-800 mb-2">Igor Lima</h1>
          <div className="flex justify-center space-x-6 text-blue-700 text-sm mb-4">
            <a href="mailto:igorslcontact@gmail.com" className="hover:underline text-blue-700 cursor-pointer" title="Clique para entrar em contato por e-mail">📧 igorslcontact@gmail.com</a>
            <a href="https://www.linkedin.com/in/igorsantoslima/" target="_blank" rel="noopener noreferrer" className="hover:underline">LinkedIn</a>
            <a href="https://github.com/limasantoss" target="_blank" rel="noopener noreferrer" className="hover:underline">GitHub</a>
          </div>
          <p className="text-justify px-4">
            Estudante de Análise e Desenvolvimento de Sistemas (2º período), com foco em <b>desenvolvimento web e Ciência de Dados.</b> Valorizo a prática e estou sempre em busca de aprender resolvendo problemas reais com tecnologia.
          </p>
        </aside>

        {/* Coluna Direita */}
        <main className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4 border-b pb-2 text-black">Projetos</h2>
          <div className="space-y-6">
            <div className="border p-4 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-black">Conversor de Moeda</h3>
              <p className="mb-2">Aplicativo simples que converte moedas em tempo real utilizando API pública com React.</p>
              <img 
                src="/demo-conversor.gif" 
                alt="Demonstração do Conversor" 
                className="w-full rounded-lg shadow-sm border mb-2"
              />
              <p className="text-sm">Tecnologias: React, TailwindCSS, Fetch API</p>
            </div>

            <div className="border p-4 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-black">Plataforma de Análise Inteligente para E-commerce</h3>
              <p className="mb-2">
                Projeto Final – Programa Capacita Brasil / C-Jovem – Trilha Ciência de Dados
              </p>
              <p className="text-justify mb-2">
                Este projeto foi desenvolvido como atividade final do programa Capacita Brasil / C-Jovem, fruto da parceria entre a <i>Universidade Estadual do Ceará (UECE)</i> e o <i>Ministério da Ciência, Tecnologia e Inovação.</i>
              </p>
              <p className="text-justify mb-2">
                A solução consiste em uma plataforma de análise de dados voltada ao setor varejista, construída com Python e Streamlit, utilizando dados reais da empresa Olist. A proposta central é fornecer insights estratégicos sobre desempenho de vendas, comportamento do consumidor e logística regional.
              </p>
              <p className="text-justify mb-2">
                Além de dashboards interativos, a plataforma conta com um chatbot integrado, capaz de responder a perguntas em linguagem natural sobre os dados da empresa. Esse diferencial torna a análise mais acessível e facilita a tomada de decisão, mesmo para usuários sem conhecimento técnico.
              </p>
              <ul className="list-disc pl-5 text-justify mb-2">
                <li>Análise e visualização de dados</li>
                <li>Engenharia de dados e limpeza de datasets</li>
                <li>Construção de dashboards com Streamlit</li>
                <li>Implementação de chatbot com NLP</li>
                <li>Aplicação prática de fundamentos estatísticos e de machine learning</li>
              </ul>
              <p className="text-sm mb-4">
                Tecnologias: Python, Pandas, NumPy, Matplotlib, Plotly, Streamlit, Jupyter Notebook, CSV (Olist Dataset), Chatbot com NLP, requirements.txt (gerenciador de dependências).
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <a href="/bot.png" target="_blank">
                  <img 
                    src="/bot.png" 
                    alt="Botmarket Interface"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <a href="/bot2.png" target="_blank">
                  <img 
                    src="/bot2.png" 
                    alt="Dashboard da Loja"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <a href="/bot03.png" target="_blank">
                  <img 
                    src="/bot03.png" 
                    alt="Logística por Região"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>

            <div className="border p-4 rounded-xl shadow-sm">
              <h3 className="text-xl font-bold mb-1 text-black">Projeto FSM3TIC20 – Sistema de Triagem Médica Digital</h3>
              <p className="text-justify mb-2">
                Este projeto tem como objetivo principal modernizar o processo de triagem e atendimento em unidades de saúde, utilizando uma aplicação web simples e funcional. Ele foi desenvolvido por uma equipe colaborativa dentro da trilha TIC20 e foca em tornar o atendimento mais ágil, organizado e acessível.
              </p>
              <ul className="list-disc pl-5 text-justify mb-2">
                <li><strong>Cadastro do Paciente:</strong> O paciente informa nome e motivo da visita. Uma senha de atendimento é gerada automaticamente.</li>
                <li><strong>Triagem (Enfermeiro):</strong> O profissional classifica o paciente por prioridade: 🔴 Vermelho (grave), 🟡 Amarelo (moderado), 🟢 Verde (leve). O paciente é inserido em uma fila de atendimento.</li>
                <li><strong>Painel da TV – Recepção:</strong> Mostra a fila de espera e quem está sendo atendido. Simula atualização automática para informar o público.</li>
                <li><strong>Painel do Médico:</strong> Lista os pacientes por ordem de prioridade. Permite iniciar/finalizar o atendimento e atualizar a fila.</li>
              </ul>
              <p className="text-sm">Tecnologias: HTML, CSS, JavaScript, Firebase</p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <a href="/pj1.png" target="_blank">
                  <img 
                    src="/pj1.png" 
                    alt="Tela Inicial - Sistema de Atendimento"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <a href="/pj2.png" target="_blank">
                  <img 
                    src="/pj2.png" 
                    alt="Tela de Cadastro - Sistema de Atendimento"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
                <a href="/pj3.png" target="_blank">
                  <img 
                    src="/pj3.png" 
                    alt="Responsividade do Sistema"
                    className="rounded-lg shadow-sm border hover:scale-105 transition-transform duration-200"
                  />
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Chatbot Simples */}
      <div className="fixed bottom-4 left-4">
        {chatOpen ? (
          <div className="bg-white border shadow-lg p-5 rounded-xl w-80">
            <h4 className="font-bold mb-2">🤖 Olá Humano</h4>
            <p className="text-sm mb-2">Ainda estou sendo desenvolvido :)</p>
            <button className="text-blue-600 text-sm underline" onClick={() => setChatOpen(false)}>Fechar</button>
          </div>
        ) : (
          <button
            onClick={() => setChatOpen(true)}
            className="bg-blue-600 text-white rounded-full px-5 py-2.5 shadow-lg hover:bg-blue-700"
          >
            🤖 Chat
          </button>
        )}
      </div>
    </div>
  );
}
