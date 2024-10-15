import { APIV2 } from "./API_CONSTRUCTOR_V2";
import { HttpClient } from "../../../repositories/comun-v1/http-client";
import { Comun } from "../../../repositories/comun-v1/Comun";


const url = "http://localhost:9080/comun/v1/"; // .env

/**
 * Crea la instancia de axios con la ruta del microsevicio correspondiente al servicio
 *
 * En caso de querer hacer una peticion con un JWT sobreescrito, hay que pasarlo como parametro
 *
 * @param dispatch
 * @returns Instancia de axios para hacer peticiones al servicio de común
 */
export const API_COMUN_V2 = (dispatch?: any) => {
  // const initializeAPIV2 = APIV2(url, true, dispatch);

  const httpClient = new HttpClient({ baseURL: url });
  const comunServices = new Comun(httpClient);
  return comunServices;
};

export const API_COMUN_PUBLIC_V2 = (dispatch?: any) => {
  // const initializeAPIV2 = APIV2(url, false, dispatch);

  const httpClient = new HttpClient({ baseURL: url });
  const comunServices = new Comun(httpClient);
  return comunServices;
};

export const getAPI_COMUN_URL = () => url;
