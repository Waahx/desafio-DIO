// Função para calcular o nível do jogador
function calcularNivelRankeada(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;
  
    // Estrutura de decisão para determinar o nível
    let nivel;
    if (vitorias < 10) {
      nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
      nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
      nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
      nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
      nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
      nivel = "Lendário";
    } else {
      nivel = "Imortal";
    }
  
    // Retorna um objeto com o saldo de vitórias e o nível
    return {
      saldoVitorias,
      nivel,
    };
  }
  
  // Obtém a quantidade de vitórias e derrotas do jogador
  const vitorias = parseInt(prompt("12"));
  const derrotas = parseInt(prompt("3"));
  
  // Calcula o nível do jogador
  const { saldoVitorias, nivel } = calcularNivelRankeada(vitorias, derrotas);
  
  // Exibe a mensagem final
  console.log(`O Herói tem um saldo de **${saldoVitorias}** e está no nível de **${nivel}**`);
  