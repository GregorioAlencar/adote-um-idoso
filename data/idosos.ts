export type Idoso = { id: string; nome: string; foto: string; precisa: string[]; gostaria: string[]; observacao?: string; adotado: boolean };

// Para marcar uma adoção, altere adotado para true e publique a atualização.
export const idosos: Idoso[] = [
  { id: "antonio", nome: "Antônio Feitosa", foto: "/idosos/antonio.jpeg", precisa: ["Blusa de frio GG aberta"], gostaria: ["Uma carteira"], adotado: false },
  { id: "sebastiao", nome: "Sebastião", foto: "/idosos/sebastiao.jpeg", precisa: ["Creme hidratante e desodorante"], gostaria: ["Um ursinho ou chocolate"], observacao: "Desodorante não pode ser roll-on.", adotado: false },
  { id: "eliana", nome: "Eliana", foto: "/idosos/eliana.jpeg", precisa: ["Hidratante e desodorante"], gostaria: ["Vestido comprido, de manga curta e vermelho"], adotado: false },
  { id: "ana-maria", nome: "Ana Maria", foto: "/idosos/ana-maria.jpeg", precisa: ["Hidratante e desodorante"], gostaria: ["Uma boneca com cabelo"], adotado: false },
  { id: "ivete", nome: "Ivete", foto: "/idosos/ivete.jpeg", precisa: ["Hidratante e desodorante"], gostaria: ["Manta para o bebê", "Crocs em cor clara ou colorida", "Pulseiras e colares"], observacao: "Ivete não gosta de cores escuras.", adotado: false },
];
