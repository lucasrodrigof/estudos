/**api.ts vai requisição com o back       api.ts ---- internt ----- back */

import axios, { AxiosInstance } from 'axios';

const api: AxiosInstance = axios.create({ /**esse create faz a conexao cm o backend */
  baseURL: "https://servicebus2.caixa.gov.br/portaldeloterias/api/megasena",
  headers: { /**json */
    'Content-Type': 'application/json',
  }
});

export default api;