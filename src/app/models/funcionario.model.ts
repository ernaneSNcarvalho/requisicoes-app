import {Departamento} from './departamento.model';
import {Model} from '../core/model';

export class Funcionario {
  nome: string;
  funcao: string;
  email: string;
  ultimoAcesso: Date;
  departamento: Departamento;
}

