/* eslint-disable */
/* tslint:disable */
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

import {
  AplicableAEnum,
  ArchivoDTOGET,
  ArchivoDTOGETINFO,
  AutonomoDtoRequestUpdate,
  AutonomoDtoResponse,
  CategoriaRecursoMaterialDTOGET,
  CriterioEstandarDtoResponse,
  DepartamentoAreaEnum,
  Duration,
  EmpresaDtoRequestUpdate,
  EmpresaDtoResponse,
  EspecificidadEnum,
  FormatoEnum,
  IdiomaDtoResponse,
  ModuloEnum,
  PersonaDTOGET,
  PersonaDTOPOSTPUT,
  TipoDocumentoInformatizadoDtoResponse,
  TipoDocumentoPrlEnum,
  TipoDocumentoUniversalDtoRequest,
  TipoDocumentoUniversalDtoResponse,
  TipoDocumentoUniversalDtoResponseListado,
  TipoRecursoMaterialDTOGET,
  UnidadTiempoValidezEnum,
  VersionDtoResponse,
  ZonedDateTime,
} from "./data-contracts";
import { ContentType, HttpClient, RequestParams } from "./http-client";

export class Comun<SecurityDataType = unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  /**
   * No description
   *
   * @tags Autónomo
   * @name GetAutonomoPorIdEmpresa
   * @summary Devuelve los datos de un autónomo
   * @request GET:/comun/v1/autonomos/{idEmpresa}
   * @secure
   */
  getAutonomoPorIdEmpresa = (idEmpresa: number, params: RequestParams = {}) =>
    this.http.request<AutonomoDtoResponse, void>({
      path: `/comun/v1/autonomos/${idEmpresa}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Autónomo
   * @name PutAutonomoPorIdEmpresa
   * @summary Edita los datos de un autónomo
   * @request PUT:/comun/v1/autonomos/{idEmpresa}
   * @secure
   */
  putAutonomoPorIdEmpresa = (idEmpresa: number, data: AutonomoDtoRequestUpdate, params: RequestParams = {}) =>
    this.http.request<AutonomoDtoResponse, void>({
      path: `/comun/v1/autonomos/${idEmpresa}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categoría recurso-material
   * @name GetCategoriasRecursosMateriales
   * @summary Devuelve las categorías de recursos materiales filtradas
   * @request GET:/comun/v1/categorias-recursos-materiales
   * @secure
   */
  getCategoriasRecursosMateriales = (
    query?: {
      /** @format int32 */
      idPais?: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<CategoriaRecursoMaterialDTOGET[], void>({
      path: `/comun/v1/categorias-recursos-materiales`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categoría recurso-material
   * @name GetCategoriaRecursoMaterialPorIdCategoria
   * @summary Busca la entidad correspondiente al ID introducido
   * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}
   * @secure
   */
  getCategoriaRecursoMaterialPorIdCategoria = (idCategoria: number, params: RequestParams = {}) =>
    this.http.request<CategoriaRecursoMaterialDTOGET, void>({
      path: `/comun/v1/categorias-recursos-materiales/${idCategoria}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categoría recurso-material
   * @name GetTiposRecursosMaterialesPorIdCategoria
   * @summary Obtiene los TipoRecursoMaterial de una categoría
   * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales
   * @secure
   */
  getTiposRecursosMaterialesPorIdCategoria = (idCategoria: number, params: RequestParams = {}) =>
    this.http.request<TipoRecursoMaterialDTOGET[], void>({
      path: `/comun/v1/categorias-recursos-materiales/${idCategoria}/tipos-recursos-materiales`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Categoría recurso-material
   * @name GetTipoRecursoMaterialPorIdTipoRecursoMaterialPorIdCategoria
   * @summary Obtiene el TipoRecursoMaterial de una categoría por id
   * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales/{idTipoRecursoMaterial}
   * @secure
   */
  getTipoRecursoMaterialPorIdTipoRecursoMaterialPorIdCategoria = (
    idCategoria: number,
    idTipoRecursoMaterial: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TipoRecursoMaterialDTOGET, void>({
      path: `/comun/v1/categorias-recursos-materiales/${idCategoria}/tipos-recursos-materiales/${idTipoRecursoMaterial}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Configuración
   * @name GetZonasHorariasConfiguraciones
   * @summary Obtiene una lista de posibles franjas horarias a seleccionar por el usuario
   * @request GET:/comun/v1/configuraciones/zonas-horarias
   * @secure
   */
  getZonasHorariasConfiguraciones = (params: RequestParams = {}) =>
    this.http.request<string[], any>({
      path: `/comun/v1/configuraciones/zonas-horarias`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Criterio Estándar
   * @name GetCriteriosEstandar
   * @summary Devuelve un listado con todos los criterios estándar.
   * @request GET:/comun/v1/criterios-estandar
   * @secure
   */
  getCriteriosEstandar = (
    query?: {
      ids?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.http.request<CriterioEstandarDtoResponse[], void>({
      path: `/comun/v1/criterios-estandar`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description Si no se pasan parámetros, devolverá todas las empresas
   *
   * @tags Empresa
   * @name GetEmpresas
   * @summary Recupera el listado de empresas mediante unos parámetros
   * @request GET:/comun/v1/empresas
   * @secure
   */
  getEmpresas = (
    query?: {
      CIF?: string;
      filtro?: string;
      /** @default false */
      infoEntornos?: boolean;
      listaIds?: number[];
      listaIdsPais?: number[];
      listaModulos?: ModuloEnum[];
    },
    params: RequestParams = {},
  ) =>
    this.http.request<EmpresaDtoResponse[], void>({
      path: `/comun/v1/empresas`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name GetContarEmpresas
   * @summary Obtiene el numero de empresas dadas de alta en el sistema
   * @request GET:/comun/v1/empresas/contar
   * @secure
   */
  getContarEmpresas = (params: RequestParams = {}) =>
    this.http.request<number, void>({
      path: `/comun/v1/empresas/contar`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name GetEmpresaPorIdEmpresa
   * @summary Recupera una empresa por su id
   * @request GET:/comun/v1/empresas/{idEmpresa}
   * @secure
   */
  getEmpresaPorIdEmpresa = (idEmpresa: number, params: RequestParams = {}) =>
    this.http.request<EmpresaDtoResponse, void>({
      path: `/comun/v1/empresas/${idEmpresa}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name PutEmpresaPorIdEmpresa
   * @summary Actualiza una empresa existente
   * @request PUT:/comun/v1/empresas/{idEmpresa}
   * @secure
   */
  putEmpresaPorIdEmpresa = (idEmpresa: number, data: EmpresaDtoRequestUpdate, params: RequestParams = {}) =>
    this.http.request<EmpresaDtoResponse, void>({
      path: `/comun/v1/empresas/${idEmpresa}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name DeleteEmpresaPorIdEmpresa
   * @summary Borra una empresa
   * @request DELETE:/comun/v1/empresas/{idEmpresa}
   * @secure
   */
  deleteEmpresaPorIdEmpresa = (idEmpresa: number, params: RequestParams = {}) =>
    this.http.request<EmpresaDtoResponse, void>({
      path: `/comun/v1/empresas/${idEmpresa}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description *La llamada POST creará el archivo en BBDD en caso de no existir o lo actualizará en caso contrario
   *
   * @tags Empresa
   * @name PostLogotipoPorIdEmpresa
   * @summary Crea o modifica un logotipo para una empresa determinada
   * @request POST:/comun/v1/empresas/{idEmpresa}/logotipo
   * @secure
   */
  postLogotipoPorIdEmpresa = (
    idEmpresa: number,
    data: {
      /**
       * @format binary
       * @minLength 1
       */
      file: File;
      /** @minLength 1 */
      fileName: string;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<ArchivoDTOGET, void>({
      path: `/comun/v1/empresas/${idEmpresa}/logotipo`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.FormData,
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name DeleteLogotipoPorIdEmpresa
   * @summary Borra el logotipo de una empresa
   * @request DELETE:/comun/v1/empresas/{idEmpresa}/logotipo
   * @secure
   */
  deleteLogotipoPorIdEmpresa = (idEmpresa: number, params: RequestParams = {}) =>
    this.http.request<ArchivoDTOGET, void>({
      path: `/comun/v1/empresas/${idEmpresa}/logotipo`,
      method: "DELETE",
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Empresa
   * @name GetInformacionLogotipoPorIdEmpresa
   * @summary Comprueba que la empresa tiene foto, devuelve información
   * @request GET:/comun/v1/empresas/{idEmpresa}/logotipo/informacion
   * @secure
   */
  getInformacionLogotipoPorIdEmpresa = (idEmpresa: number, params: RequestParams = {}) =>
    this.http.request<ArchivoDTOGETINFO, void>({
      path: `/comun/v1/empresas/${idEmpresa}/logotipo/informacion`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * @description *Este método necesita únicamente el jwt a través de la URL
   *
   * @tags Empresa
   * @name GetLogotipoPorIdEmpresaPorUuid
   * @summary Recupera el logotipo de una empresa determinada
   * @request GET:/comun/v1/empresas/{idEmpresa}/logotipo/{uuid}
   * @secure
   */
  getLogotipoPorIdEmpresaPorUuid = (
    idEmpresa: number,
    uuid: string,
    query?: {
      /** @format int32 */
      alto?: number;
      /** @format int32 */
      ancho?: number;
      modoMiniaturizacion?: FormatoEnum;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<string[], void>({
      path: `/comun/v1/empresas/${idEmpresa}/logotipo/${uuid}`,
      method: "GET",
      query: query,
      secure: true,
      ...params,
    });
  /**
   * No description
   *
   * @tags Idioma
   * @name GetIdiomas
   * @summary Recupera todos los idiomas que hay en la aplicación
   * @request GET:/comun/v1/idiomas
   */
  getIdiomas = (params: RequestParams = {}) =>
    this.http.request<IdiomaDtoResponse[], void>({
      path: `/comun/v1/idiomas`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Idioma
   * @name GetIdiomasPorIdIdioma
   * @summary Recupera un idioma que hay en la aplicación
   * @request GET:/comun/v1/idiomas/{idIdioma}
   */
  getIdiomasPorIdIdioma = (idIdioma: number, params: RequestParams = {}) =>
    this.http.request<IdiomaDtoResponse[], void>({
      path: `/comun/v1/idiomas/${idIdioma}`,
      method: "GET",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name GetPersonas
   * @summary Recupera todas las personas o la persona por el dni de su pasaporte y país
   * @request GET:/comun/v1/personas
   * @secure
   */
  getPersonas = (
    query?: {
      dniPasaporte?: string;
      /** @format int32 */
      idPaisDni?: number;
      listaIdsPersonas?: number[];
    },
    params: RequestParams = {},
  ) =>
    this.http.request<PersonaDTOGET[], void>({
      path: `/comun/v1/personas`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name PostPersona
   * @summary Crea una nueva persona
   * @request POST:/comun/v1/personas
   * @secure
   */
  postPersona = (data: PersonaDTOPOSTPUT, params: RequestParams = {}) =>
    this.http.request<PersonaDTOGET, void>({
      path: `/comun/v1/personas`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name GetContarPersonas
   * @summary Cuento el numero de personas dadas de alta en el sistema
   * @request GET:/comun/v1/personas/contar
   * @secure
   */
  getContarPersonas = (params: RequestParams = {}) =>
    this.http.request<number, void>({
      path: `/comun/v1/personas/contar`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name GetPersonaPorIdPersona
   * @summary Recupera una persona por su id
   * @request GET:/comun/v1/personas/{idPersona}
   * @secure
   */
  getPersonaPorIdPersona = (idPersona: number, params: RequestParams = {}) =>
    this.http.request<PersonaDTOGET, void>({
      path: `/comun/v1/personas/${idPersona}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name PutPersonaPorIdPersona
   * @summary Actualiza una persona existente
   * @request PUT:/comun/v1/personas/{idPersona}
   * @secure
   */
  putPersonaPorIdPersona = (idPersona: number, data: PersonaDTOPOSTPUT, params: RequestParams = {}) =>
    this.http.request<PersonaDTOGET, void>({
      path: `/comun/v1/personas/${idPersona}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Persona
   * @name DeletePersonaPorIdPersona
   * @summary Borra una persona
   * @request DELETE:/comun/v1/personas/{idPersona}
   * @secure
   */
  deletePersonaPorIdPersona = (idPersona: number, params: RequestParams = {}) =>
    this.http.request<Duration, void>({
      path: `/comun/v1/personas/${idPersona}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Informatizado
   * @name GetTiposDocumentosInformatizados
   * @summary Devuelve todos los tipo documento informatizados del sistema
   * @request GET:/comun/v1/tipos-documentos-informatizados
   * @secure
   */
  getTiposDocumentosInformatizados = (params: RequestParams = {}) =>
    this.http.request<TipoDocumentoInformatizadoDtoResponse[], void>({
      path: `/comun/v1/tipos-documentos-informatizados`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Informatizado
   * @name GetTipoDocumentoInformatizadoPorIdTipoDocumentoInformatizado
   * @summary Devuelve tipo documento informatizado segun el id.
   * @request GET:/comun/v1/tipos-documentos-informatizados/{idTipoDocumentoInformatizado}
   * @secure
   */
  getTipoDocumentoInformatizadoPorIdTipoDocumentoInformatizado = (
    idTipoDocumentoInformatizado: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        /** @format int32 */
        idDocInformatizado?: number;
        nombre?: string;
        codigo?: string;
        observaciones?: string;
      },
      void
    >({
      path: `/comun/v1/tipos-documentos-informatizados/${idTipoDocumentoInformatizado}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name GetTipoDocumentosUniversales
   * @summary Recupera un listado tipo documentos universales pertenecientes a los ids de paises pasados.
   * @request GET:/comun/v1/tipos-documentos-universales
   * @secure
   */
  getTipoDocumentosUniversales = (
    query?: {
      /** @format int32 */
      idPais?: number;
    },
    params: RequestParams = {},
  ) =>
    this.http.request<TipoDocumentoUniversalDtoResponseListado[], void>({
      path: `/comun/v1/tipos-documentos-universales`,
      method: "GET",
      query: query,
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name PostTipoDocumentoUniversal
   * @summary Inserta un tipo de documento universal junto al listado de sus criterios de validación.
   * @request POST:/comun/v1/tipos-documentos-universales
   * @secure
   */
  postTipoDocumentoUniversal = (data: TipoDocumentoUniversalDtoRequest, params: RequestParams = {}) =>
    this.http.request<VersionDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales`,
      method: "POST",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name GetTipoDocumentoUniversalPorIdTipoDocumentoUniversal
   * @summary Recupera un tipo documento universal según el id pasado.
   * @request GET:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
   * @secure
   */
  getTipoDocumentoUniversalPorIdTipoDocumentoUniversal = (
    idTipoDocumentoUniversal: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TipoDocumentoUniversalDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name PutTipoDocumentoUniversalPorIdTipoDocumentoUniversal
   * @summary Actualiza tanto la información general de un tipo de documento universal, como sus criterios de validación.
   * @request PUT:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
   * @secure
   */
  putTipoDocumentoUniversalPorIdTipoDocumentoUniversal = (
    idTipoDocumentoUniversal: number,
    data: TipoDocumentoUniversalDtoRequest,
    params: RequestParams = {},
  ) =>
    this.http.request<TipoDocumentoUniversalDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}`,
      method: "PUT",
      body: data,
      secure: true,
      type: ContentType.Json,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name DeleteTipoDocumentoUniversalPorIdTipoDocumentoUniversal
   * @summary Elimina un tipo de documento universal.
   * @request DELETE:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
   * @secure
   */
  deleteTipoDocumentoUniversalPorIdTipoDocumentoUniversal = (
    idTipoDocumentoUniversal: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TipoDocumentoUniversalDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}`,
      method: "DELETE",
      secure: true,
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name PostAumentarUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal
   * @summary Aumenta en 1 el número de usos del tipo de documento universal.
   * @request POST:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/aumentar-usos
   */
  postAumentarUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal = (
    idTipoDocumentoUniversal: number,
    params: RequestParams = {},
  ) =>
    this.http.request<
      {
        nombre?: string;
        aplicableA?: AplicableAEnum;
        departamentoArea?: DepartamentoAreaEnum;
        tipo?: TipoDocumentoPrlEnum;
        /** @format int32 */
        validez?: number;
        unidadTiempoValidez?: UnidadTiempoValidezEnum;
        especificidad?: EspecificidadEnum;
        /** @format int32 */
        idPais?: number;
        codigoMetabuzon?: string;
        indefinido?: boolean;
        /** @format int32 */
        diasPreaviso?: number;
        firmaRequerida?: boolean;
        adjuntoObligatorio?: boolean;
        /** @format int32 */
        idTipoDocumentoInformatizado?: number;
        /** @format int32 */
        idTipoDocumentoUniversal?: number;
        criteriosValidacionUltimaVersion?: CriterioEstandarDtoResponse[];
        versiones?: number[];
        fechaUltimaVersion?: ZonedDateTime;
        usuarioUltimaVersion?: string;
        enUso?: boolean;
      },
      void
    >({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}/aumentar-usos`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name PostDisminuirUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal
   * @summary Disminuye en 1 el número de usos del tipo de documento universal hasta un mínimo de 0 usos. Si se llama al endpoint cuando el tipo de documento universal ya tiene 0 usos, no se realiza ningún cambio.
   * @request POST:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/disminuir-usos
   */
  postDisminuirUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal = (
    idTipoDocumentoUniversal: number,
    params: RequestParams = {},
  ) =>
    this.http.request<TipoDocumentoUniversalDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}/disminuir-usos`,
      method: "POST",
      format: "json",
      ...params,
    });
  /**
   * No description
   *
   * @tags Tipo Documento Universal
   * @name GetVersionPorIdTipoDocumentoUniversalPorVersion
   * @summary Devuelve la información de una versión específica de un tipo de documento universal además de sus criterios de validación.
   * @request GET:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/versiones/{version}
   * @secure
   */
  getVersionPorIdTipoDocumentoUniversalPorVersion = (
    idTipoDocumentoUniversal: number,
    version: number,
    params: RequestParams = {},
  ) =>
    this.http.request<VersionDtoResponse, void>({
      path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}/versiones/${version}`,
      method: "GET",
      secure: true,
      format: "json",
      ...params,
    });
}
