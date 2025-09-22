import Aluno from "./Aluno";
import * as readlineSync from "readline-sync";

class AlunoController {
  private aluno: Aluno;

  constructor(aluno: Aluno) {
    this.aluno = aluno;
  }

  iniciar(): void {
    let sair = false;

    while (!sair) {
      console.log(`\n--- MENU (${this.aluno.nome}) ---`);
      console.log("1 - Atribuir nota");
      console.log("2 - Consultar nota de um bimestre");
      console.log("3 - Consultar situação atual");
      console.log("4 - Listar todas as notas");
      console.log("5 - Alterar nome do aluno");
      console.log("0 - Sair");

      const opcao = readlineSync.questionInt("Escolha uma opção: ");

      switch (opcao) {
        case 1: {
          const totalBimestres = this.aluno['notas'].length;
          const bimestre = readlineSync.questionInt(`Digite o bimestre (1 a ${totalBimestres}): `);
          const nota = readlineSync.questionFloat("Digite a nota (0 a 10): ");
          try {
            const sucesso = this.aluno.atribuirNota(bimestre, nota);
            if (sucesso) {
              console.log("Nota atribuída com sucesso!");
            }
          } catch (e: any) {
            console.log(e.message);
          }
          break;
        }
        case 2: {
          const totalBimestres = this.aluno['notas'].length;
          const bimestreConsulta = readlineSync.questionInt(`Digite o bimestre (1 a ${totalBimestres}): `);
          console.log(this.aluno.consultarNota(bimestreConsulta));
          break;
        }
        case 3:
          console.log(this.aluno.verificarSituacao());
          break;
        case 4:
          console.log(this.aluno.listarNotas());
          break;
        case 5: {
          const novoNome = readlineSync.question("Digite o novo nome do aluno: ");
          this.aluno.nome = novoNome;
          console.log("Nome alterado com sucesso!");
          break;
        }
        case 0:
          sair = true;
          console.log("Saindo...");
          break;
        default:
          console.log("Opção inválida!");
          break;
      }
    }
  }
}

export default AlunoController;