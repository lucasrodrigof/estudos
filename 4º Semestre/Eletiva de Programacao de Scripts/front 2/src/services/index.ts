import { Props } from "../types";
import api from "./api";

class Service{
  async get(numero:number):Promise <Props>{
   
    /**quando uso axios, ele me retorna uma variavel data. Entao vou desestruturar ele. Ou seja, posso pegar só uma parte desse dado. Estou desestruturando. Preciso saber o nome da propriedade, mas o axios sempre devolve a propriedade data entao ta safe.*/

    const {data} = await api.get(`/${numero}`); /**normalmente a api.get é executada antes da const data, e n termina antes de começar o rturn. Entao coloco await */
    return data;
  }
}

/**exportando a copia da classe, ou seja o objeto. */
export default new Service();

