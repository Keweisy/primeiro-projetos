import Aluno from "./Aluno";
import AlunoController from "./AlunoController";

const aluno = new Aluno("Lucas");
const controller = new AlunoController(aluno);

controller.iniciar();
