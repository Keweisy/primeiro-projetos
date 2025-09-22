class Aluno {
  public nome: string;
  private notas: number[];

  constructor(nome: string, totalBimestres: number = 4) {
    // Valida 
    if (typeof nome !== "string" || nome.trim() === "") {
      throw new Error("Erro: O nome do aluno deve ser uma string não vazia.");
    }
    if (nome.length > 50) {
      throw new Error("Erro: O nome não pode ter mais de 50 caracteres.");
    }
    if (!Number.isInteger(totalBimestres) || totalBimestres < 1) {
      throw new Error("Erro: O número de bimestres deve ser um inteiro positivo.");
    }

    this.nome = nome.trim();
    this.notas = Array(totalBimestres).fill(0); // inicializa notas com 0
  }

  atribuirNota(bimestre: number, nota: number): boolean {
    // Valida bimestre
    if (
      !Number.isInteger(bimestre) ||
      bimestre < 1 ||
      bimestre > this.notas.length
    ) {
      throw new Error("Erro: O bimestre deve ser um número inteiro válido.");
    }

    // Valida nota
    if (typeof nota !== "number" || nota < 0 || nota > 10) {
      throw new Error("Erro: A nota deve ser um número entre 0 e 10.");
    }

    this.notas[bimestre - 1] = nota;
    return true;
  }

  consultarNota(bimestre: number): string {
    if (
      !Number.isInteger(bimestre) ||
      bimestre < 1 ||
      bimestre > this.notas.length
    ) {
      return "Erro: O bimestre deve ser um número inteiro válido.";
    }

    return `Nota do ${bimestre}º bimestre: ${this.notas[bimestre - 1]}`;
  }

  listarNotas(): string {
    return this.notas
      .map((nota, idx) => `${idx + 1}º bimestre: ${nota}`)
      .join(", ");
  }

  calcularMedia(): number {
    const soma = this.notas.reduce((acc, n) => acc + n, 0);
    return soma / this.notas.length;
  }

  verificarSituacao(): string {
    const media = this.calcularMedia();
    return media >= 6
      ? `Média: ${media.toFixed(2)} → Aprovado ✅`
      : `Média: ${media.toFixed(2)} → Reprovado ❌`;
  }
}

export default Aluno;
