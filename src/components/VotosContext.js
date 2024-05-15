import React, { createContext, useContext, useReducer } from 'react';

const VotosContext = createContext();

const votosReducer = (state, action) => {
  switch (action.type) {
    case 'adicionarVoto':
      return { ...state, votos: [...state.votos, action.voto] };
    default:
      return state;
  }
};

const VotosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(votosReducer, { votos: [] });

  return (
    <VotosContext.Provider value={{ state, dispatch }}>
      {children}
    </VotosContext.Provider>
  );
};

const useVotos = () => {
  const context = useContext(VotosContext);
  if (!context) {
    throw new Error('useVotos deve ser usado dentro de um VotosProvider');
  }
  return context;
};

export { VotosProvider, useVotos };
