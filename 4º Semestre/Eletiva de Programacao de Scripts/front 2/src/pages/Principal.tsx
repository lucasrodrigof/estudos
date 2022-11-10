import { useEffect, useState } from "react";
import { Props } from "../types";

/**importar o objeto da classe Sena */
import service from "../services"; /*coloco o nome q eu quiser na variavel para importar o objeto da classe, no caso aqui usei 'service'*/
import { Header } from "../components/Header/header";
import { Acumulado } from "../components/Acumulado";
import { Local } from "../components/Local";
import { Concurso } from "../Concurso";
import { Valor } from "../components/Dezenas";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../styles/theme";
import { TestSld } from "./styles";





export default function Principal() {
  const [concurso, setConcurso] = useState({} as Props);
  const [tema, setTema] = useState(dark);

  useEffect( /*qualquer mudança despara o userEffect*/
    function () { /* 1° parâmetro, função callback*/
      (async function () {
        const numero = Math.floor(Math.random() * 2533);
        const concurso: Props = await service.get(numero);
        console.log(concurso);
        setConcurso(concurso);
        setTema(parseInt(concurso.listaDezenas[0]) % 2 === 0 ? light : dark)

      })() /**essa função n tem nome, então crio ela e a chamo logo em seguida, como ela n tem nome ela só pode ser chamada uma única vez. */

    },
    [] /*2° parâmetro, uma array vazia.*/

  )
  return (


    <>
      <ThemeProvider theme={tema}>

        <TestSld>
          <Header numero={concurso.numero} dataApuracao={concurso.dataApuracao} />
          {concurso.acumulado && <Acumulado />}
          <Local localSorteio={concurso.localSorteio} nomeMunicipioUFSorteio={concurso.nomeMunicipioUFSorteio} />
          <Valor listaDezenas={concurso.listaDezenas} />
          <Concurso dataProximoConcurso={concurso.dataProximoConcurso} valorEstimadoProximoConcurso={concurso.valorEstimadoProximoConcurso} />
        </TestSld>

      </ThemeProvider>
    </>


  );
}