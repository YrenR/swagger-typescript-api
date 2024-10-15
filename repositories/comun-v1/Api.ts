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

export enum AplicableAEnum {
  EMPRESA = "EMPRESA",
  EMPLEADO = "EMPLEADO",
  RECURSO = "RECURSO",
}

export interface ArchivoDTOGET {
  /**
   * @format int32
   * @pattern ^\d{1,11}$
   */
  idTipoEntidad: number;
  /**
   * @format int32
   * @pattern ^\d{1,11}$
   */
  idEntidad: number;
  /**
   * @format int32
   * @pattern ^\d{1,11}$
   */
  idTipoEntidadSecundaria?: number;
  /**
   * @format int32
   * @pattern ^\d{1,11}$
   */
  idEntidadSecundaria?: number;
  /** @maxLength 4096 */
  observaciones: string;
  /** @maxLength 64 */
  nombre: string;
  /** @format binary */
  binario: File;
  esCreacion?: boolean;
  extension?: string;
  /** @format int32 */
  numeroPaginas?: number;
  /** @format int32 */
  idArchivo?: number;
  uuid?: string;
  /** @format int32 */
  idEntorno?: number;
  fechaInsercion?: ZonedDateTime;
  fechaModificacion?: ZonedDateTime;
  /** @format int32 */
  tamano?: number;
}

export interface ArchivoDTOGETINFO {
  existe?: boolean;
  uuid?: string;
  fechaInsercion?: ZonedDateTime;
  fechaModificacion?: ZonedDateTime;
  /** @format int32 */
  tamano?: number;
  extension?: string;
  nombre?: string;
  observaciones?: string;
  /** @format int32 */
  idArchivo?: number;
  /** @format int32 */
  numeroPaginas?: number;
}

export interface AutonomoDtoRequestUpdate {
  /** @maxLength 255 */
  nombre?: string;
  apellido1: string;
  apellido2: string;
  nombreComercial?: string;
  /** @maxLength 4096 */
  observaciones?: string;
}

export interface AutonomoDtoResponse {
  /** @format int32 */
  idEmpresa?: number;
  nombre?: string;
  apellido1?: string;
  apellido2?: string;
  cif: string;
  /** @format int32 */
  paisCif: number;
  fechaCreacion?: string;
  fechaUltimoAcceso?: string;
  observaciones: string;
  nombreComercial?: string;
}

export interface CategoriaRecursoMaterialDTOGET {
  /** @maxLength 45 */
  nombre: string;
  /** @maxLength 4096 */
  observaciones: string;
  /** @format int32 */
  idPais: number;
  /** @format int32 */
  idCategoria: number;
}

export interface CriterioEstandarDtoResponse {
  /** @format int32 */
  idCriterioEstandar?: number;
  nombre?: string;
  criterio?: string;
  mensajeRechazo?: string;
  soloUsuariosInternos?: boolean;
}

export enum DayOfWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY",
}

export enum DepartamentoAreaEnum {
  PRL = "PRL",
  ADMINISTRACION = "ADMINISTRACION",
  OTROS = "OTROS",
}

/**
 * @format duration
 * @example "P1D"
 */
export type Duration = string;

export interface EmpresaDtoRequestUpdate {
  /** @maxLength 255 */
  nombre?: string;
  /** @maxLength 4096 */
  observaciones?: string;
}

export interface EmpresaDtoResponse {
  /**
   * @minLength 3
   * @maxLength 25
   */
  cif: string;
  /**
   * @minLength 3
   * @maxLength 255
   */
  nombre: string;
  /**
   * @format int32
   * @min 0
   * @max 1000
   */
  paisCif: number;
  /** @maxLength 4096 */
  observaciones: string;
  /** @format int32 */
  idEmpresa?: number;
  nombreUsuario?: string;
  apellidosUsuario?: string;
  emailUsuario?: string;
  tipoEmpresa?: TipoSolicitudAltaEnum;
  entornos?: EntornoDtoResponse[];
  fechaCreacion?: ZonedDateTime;
  fechaUltimoAcceso?: ZonedDateTime;
  razonSocial?: string;
  zonaHoraria?: ZoneId;
}

export interface EntornoDtoResponse {
  /** @format int32 */
  idEntorno?: number;
  /** @format int32 */
  idModulo?: number;
  activo?: boolean;
  estado?: EntornoEstadoEnum;
}

export enum EntornoEstadoEnum {
  CREADO = "CREADO",
  PENDIENTE = "PENDIENTE",
  BORRANDO = "BORRANDO",
}

export enum EspecificidadEnum {
  GENERICO = "GENERICO",
  ESPECIFICO = "ESPECIFICO",
}

export enum FormatoEnum {
  CROP_CENTRADO = "CROP_CENTRADO",
  REESCALADO = "REESCALADO",
  REESCALADO_ALTO = "REESCALADO_ALTO",
  REESCALADO_ANCHO = "REESCALADO_ANCHO",
}

export interface IdiomaDtoResponse {
  /** @format int32 */
  idIdioma?: number;
  nombre?: string;
  codigo?: string;
}

/**
 * @format date-time
 * @example "2022-03-10T16:15:50.000Z"
 */
export type Instant = string;

/**
 * @format date-time
 * @example "2022-03-10T12:15:50.000Z"
 */
export type LocalDateTime = string;

/**
 * @format local-time
 * @example "13:45:30.123456789"
 */
export type LocalTime = string;

export enum ModuloEnum {
  ESTRUCTURA = "ESTRUCTURA",
  CAE = "CAE",
  CA = "CA",
  FORMULARIOS = "FORMULARIOS",
  METAMARKET = "METAMARKET",
  MQL = "MQL",
  TAREAS = "TAREAS",
  PROVEEDORES = "PROVEEDORES",
}

export enum Month {
  JANUARY = "JANUARY",
  FEBRUARY = "FEBRUARY",
  MARCH = "MARCH",
  APRIL = "APRIL",
  MAY = "MAY",
  JUNE = "JUNE",
  JULY = "JULY",
  AUGUST = "AUGUST",
  SEPTEMBER = "SEPTEMBER",
  OCTOBER = "OCTOBER",
  NOVEMBER = "NOVEMBER",
  DECEMBER = "DECEMBER",
}

export interface PersonaDTOGET {
  /**
   * @minLength 3
   * @maxLength 45
   */
  dni: string;
  /**
   * @minLength 3
   * @maxLength 128
   */
  nombre: string;
  /**
   * @minLength 3
   * @maxLength 128
   */
  apellido1: string;
  /** @maxLength 128 */
  apellido2: string;
  /**
   * @minLength 3
   * @maxLength 45
   */
  tipoDocId: string;
  /** @format int32 */
  idPaisDni: number;
  /** @format int32 */
  idPersona?: number;
}

export interface PersonaDTOPOSTPUT {
  /**
   * @minLength 3
   * @maxLength 45
   */
  dni: string;
  /**
   * @minLength 3
   * @maxLength 128
   */
  nombre: string;
  /**
   * @minLength 3
   * @maxLength 128
   */
  apellido1: string;
  /** @maxLength 128 */
  apellido2: string;
  /**
   * @minLength 3
   * @maxLength 45
   */
  tipoDocId: string;
  /** @format int32 */
  idPaisDni: number;
}

export enum TimeDefinition {
  UTC = "UTC",
  WALL = "WALL",
  STANDARD = "STANDARD",
}

export interface TipoDocumentoInformatizadoDtoResponse {
  /** @format int32 */
  idDocInformatizado?: number;
  nombre?: string;
  codigo?: string;
  observaciones?: string;
}

export enum TipoDocumentoPrlEnum {
  FORMACIONES = "FORMACIONES",
  INFORMACIONES = "INFORMACIONES",
  EPI = "EPI",
  RECONOCIMIENTO_MEDICO = "RECONOCIMIENTO_MEDICO",
  OTROS = "OTROS",
}

export interface TipoDocumentoUniversalDtoRequest {
  /** @maxLength 255 */
  nombre: string;
  aplicableA: AplicableAEnum;
  departamentoArea: DepartamentoAreaEnum;
  especificidad: EspecificidadEnum;
  /** @format int32 */
  idPais: number;
  tipo?: TipoDocumentoPrlEnum;
  /** @format int32 */
  validez?: number;
  unidadTiempoValidez?: UnidadTiempoValidezEnum;
  /** @maxLength 32 */
  codigoMetabuzon?: string;
  indefinido?: boolean;
  /** @format int32 */
  diasPreaviso?: number;
  firmaRequerida?: boolean;
  adjuntoObligatorio?: boolean;
  criteriosValidacion?: number[];
  /** @format int32 */
  idTipoDocumentoInformatizado?: number;
}

export interface TipoDocumentoUniversalDtoResponse {
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
}

export interface TipoDocumentoUniversalDtoResponseListado {
  /** @format int32 */
  idTipoDocumentoUniversal?: number;
  nombre?: string;
  aplicableA?: AplicableAEnum;
  departamentoArea?: DepartamentoAreaEnum;
  tipo?: TipoDocumentoPrlEnum;
  /** @format int32 */
  validez?: number;
  unidadTiempoValidez?: UnidadTiempoValidezEnum;
  especificidad?: EspecificidadEnum;
  enUso?: boolean;
  /** @format int32 */
  idPais?: number;
  indefinido?: boolean;
}

export interface TipoRecursoMaterialDTOGET {
  /** @maxLength 256 */
  nombre: string;
  /** @maxLength 4096 */
  observaciones: string;
  /** @format int32 */
  idTipoRecursoMaterial: number;
}

export enum TipoSolicitudAltaEnum {
  EMPRESA = "EMPRESA",
  AUTONOMO = "AUTONOMO",
}

export enum UnidadTiempoValidezEnum {
  ANOS = "ANOS",
  MESES = "MESES",
  DIAS = "DIAS",
}

export interface VersionDtoResponse {
  /** @format int32 */
  idVersionCriterios?: number;
  /** @format int32 */
  version?: number;
  criteriosValidacion?: CriterioEstandarDtoResponse[];
  fechaEdicion?: string;
  usuarioEdicion?: string;
}

export interface ZoneId {
  id?: string;
  rules?: ZoneRules;
}

export interface ZoneOffset {
  /** @format int32 */
  totalSeconds?: number;
  rules?: ZoneRules;
}

export interface ZoneOffsetTransition {
  /** @format int64 */
  epochSecond?: number;
  transition?: LocalDateTime;
  offsetBefore?: ZoneOffset;
  offsetAfter?: ZoneOffset;
  instant?: Instant;
  dateTimeBefore?: LocalDateTime;
  dateTimeAfter?: LocalDateTime;
  duration?: Duration;
  /** @format int32 */
  durationSeconds?: number;
  gap?: boolean;
  overlap?: boolean;
  validOffsets?: ZoneOffset[];
}

export interface ZoneOffsetTransitionRule {
  month?: Month;
  /** @format byte */
  dom?: string;
  dow?: DayOfWeek;
  time?: LocalTime;
  timeEndOfDay?: boolean;
  timeDefinition?: TimeDefinition;
  standardOffset?: ZoneOffset;
  offsetBefore?: ZoneOffset;
  offsetAfter?: ZoneOffset;
  /** @format int32 */
  dayOfMonthIndicator?: number;
  dayOfWeek?: DayOfWeek;
  localTime?: LocalTime;
  midnightEndOfDay?: boolean;
}

export interface ZoneRules {
  standardTransitions?: number[];
  standardOffsets?: ZoneOffset[];
  savingsInstantTransitions?: number[];
  savingsLocalTransitions?: LocalDateTime[];
  wallOffsets?: ZoneOffset[];
  lastRules?: ZoneOffsetTransitionRule[];
  fixedOffset?: boolean;
  transitions?: ZoneOffsetTransition[];
  transitionRules?: ZoneOffsetTransitionRule[];
}

/**
 * @format date-time
 * @example "2022-03-10T16:15:50.000Z"
 */
export type ZonedDateTime = string;

import type { AxiosInstance, AxiosRequestConfig, AxiosResponse, HeadersDefaults, ResponseType } from "axios";
import axios from "axios";

export type QueryParamsType = Record<string | number, any>;

export interface FullRequestParams extends Omit<AxiosRequestConfig, "data" | "params" | "url" | "responseType"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseType;
  /** request body */
  body?: unknown;
}

export type RequestParams = Omit<FullRequestParams, "body" | "method" | "query" | "path">;

export interface ApiConfig<SecurityDataType = unknown> extends Omit<AxiosRequestConfig, "data" | "cancelToken"> {
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<AxiosRequestConfig | void> | AxiosRequestConfig | void;
  secure?: boolean;
  format?: ResponseType;
}

export enum ContentType {
  Json = "application/json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public instance: AxiosInstance;
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private secure?: boolean;
  private format?: ResponseType;

  constructor({ securityWorker, secure, format, ...axiosConfig }: ApiConfig<SecurityDataType> = {}) {
    this.instance = axios.create({ ...axiosConfig, baseURL: axiosConfig.baseURL || "" });
    this.secure = secure;
    this.format = format;
    this.securityWorker = securityWorker;
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected mergeRequestParams(params1: AxiosRequestConfig, params2?: AxiosRequestConfig): AxiosRequestConfig {
    const method = params1.method || (params2 && params2.method);

    return {
      ...this.instance.defaults,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...((method && this.instance.defaults.headers[method.toLowerCase() as keyof HeadersDefaults]) || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected stringifyFormItem(formItem: unknown) {
    if (typeof formItem === "object" && formItem !== null) {
      return JSON.stringify(formItem);
    } else {
      return `${formItem}`;
    }
  }

  protected createFormData(input: Record<string, unknown>): FormData {
    if (input instanceof FormData) {
      return input;
    }
    return Object.keys(input || {}).reduce((formData, key) => {
      const property = input[key];
      const propertyContent: any[] = property instanceof Array ? property : [property];

      for (const formItem of propertyContent) {
        const isFileType = formItem instanceof Blob || formItem instanceof File;
        formData.append(key, isFileType ? formItem : this.stringifyFormItem(formItem));
      }

      return formData;
    }, new FormData());
  }

  public request = async <T = any, _E = any>({
    secure,
    path,
    type,
    query,
    format,
    body,
    ...params
  }: FullRequestParams): Promise<AxiosResponse<T>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const responseFormat = format || this.format || undefined;

    if (type === ContentType.FormData && body && body !== null && typeof body === "object") {
      body = this.createFormData(body as Record<string, unknown>);
    }

    if (type === ContentType.Text && body && body !== null && typeof body !== "string") {
      body = JSON.stringify(body);
    }

    return this.instance.request({
      ...requestParams,
      headers: {
        ...(requestParams.headers || {}),
        ...(type ? { "Content-Type": type } : {}),
      },
      params: query,
      responseType: responseFormat,
      data: body,
      url: path,
    });
  };
}

/**
 * @title comun API
 * @version 1.0-SNAPSHOT
 */
export class Api<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  comun = {
    /**
     * No description
     *
     * @tags Autónomo
     * @name GetAutonomoPorIdEmpresa
     * @summary Devuelve los datos de un autónomo
     * @request GET:/comun/v1/autonomos/{idEmpresa}
     * @secure
     */
    getAutonomoPorIdEmpresa: (idEmpresa: number, params: RequestParams = {}) =>
      this.http.request<AutonomoDtoResponse, void>({
        path: `/comun/v1/autonomos/${idEmpresa}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Autónomo
     * @name PutAutonomoPorIdEmpresa
     * @summary Edita los datos de un autónomo
     * @request PUT:/comun/v1/autonomos/{idEmpresa}
     * @secure
     */
    putAutonomoPorIdEmpresa: (idEmpresa: number, data: AutonomoDtoRequestUpdate, params: RequestParams = {}) =>
      this.http.request<AutonomoDtoResponse, void>({
        path: `/comun/v1/autonomos/${idEmpresa}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categoría recurso-material
     * @name GetCategoriasRecursosMateriales
     * @summary Devuelve las categorías de recursos materiales filtradas
     * @request GET:/comun/v1/categorias-recursos-materiales
     * @secure
     */
    getCategoriasRecursosMateriales: (
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
      }),

    /**
     * No description
     *
     * @tags Categoría recurso-material
     * @name GetCategoriaRecursoMaterialPorIdCategoria
     * @summary Busca la entidad correspondiente al ID introducido
     * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}
     * @secure
     */
    getCategoriaRecursoMaterialPorIdCategoria: (idCategoria: number, params: RequestParams = {}) =>
      this.http.request<CategoriaRecursoMaterialDTOGET, void>({
        path: `/comun/v1/categorias-recursos-materiales/${idCategoria}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categoría recurso-material
     * @name GetTiposRecursosMaterialesPorIdCategoria
     * @summary Obtiene los TipoRecursoMaterial de una categoría
     * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales
     * @secure
     */
    getTiposRecursosMaterialesPorIdCategoria: (idCategoria: number, params: RequestParams = {}) =>
      this.http.request<TipoRecursoMaterialDTOGET[], void>({
        path: `/comun/v1/categorias-recursos-materiales/${idCategoria}/tipos-recursos-materiales`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Categoría recurso-material
     * @name GetTipoRecursoMaterialPorIdTipoRecursoMaterialPorIdCategoria
     * @summary Obtiene el TipoRecursoMaterial de una categoría por id
     * @request GET:/comun/v1/categorias-recursos-materiales/{idCategoria}/tipos-recursos-materiales/{idTipoRecursoMaterial}
     * @secure
     */
    getTipoRecursoMaterialPorIdTipoRecursoMaterialPorIdCategoria: (
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
      }),

    /**
     * No description
     *
     * @tags Configuración
     * @name GetZonasHorariasConfiguraciones
     * @summary Obtiene una lista de posibles franjas horarias a seleccionar por el usuario
     * @request GET:/comun/v1/configuraciones/zonas-horarias
     * @secure
     */
    getZonasHorariasConfiguraciones: (params: RequestParams = {}) =>
      this.http.request<string[], any>({
        path: `/comun/v1/configuraciones/zonas-horarias`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Criterio Estándar
     * @name GetCriteriosEstandar
     * @summary Devuelve un listado con todos los criterios estándar.
     * @request GET:/comun/v1/criterios-estandar
     * @secure
     */
    getCriteriosEstandar: (
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
      }),

    /**
     * @description Si no se pasan parámetros, devolverá todas las empresas
     *
     * @tags Empresa
     * @name GetEmpresas
     * @summary Recupera el listado de empresas mediante unos parámetros
     * @request GET:/comun/v1/empresas
     * @secure
     */
    getEmpresas: (
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
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name GetContarEmpresas
     * @summary Obtiene el numero de empresas dadas de alta en el sistema
     * @request GET:/comun/v1/empresas/contar
     * @secure
     */
    getContarEmpresas: (params: RequestParams = {}) =>
      this.http.request<number, void>({
        path: `/comun/v1/empresas/contar`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name GetEmpresaPorIdEmpresa
     * @summary Recupera una empresa por su id
     * @request GET:/comun/v1/empresas/{idEmpresa}
     * @secure
     */
    getEmpresaPorIdEmpresa: (idEmpresa: number, params: RequestParams = {}) =>
      this.http.request<EmpresaDtoResponse, void>({
        path: `/comun/v1/empresas/${idEmpresa}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name PutEmpresaPorIdEmpresa
     * @summary Actualiza una empresa existente
     * @request PUT:/comun/v1/empresas/{idEmpresa}
     * @secure
     */
    putEmpresaPorIdEmpresa: (idEmpresa: number, data: EmpresaDtoRequestUpdate, params: RequestParams = {}) =>
      this.http.request<EmpresaDtoResponse, void>({
        path: `/comun/v1/empresas/${idEmpresa}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name DeleteEmpresaPorIdEmpresa
     * @summary Borra una empresa
     * @request DELETE:/comun/v1/empresas/{idEmpresa}
     * @secure
     */
    deleteEmpresaPorIdEmpresa: (idEmpresa: number, params: RequestParams = {}) =>
      this.http.request<EmpresaDtoResponse, void>({
        path: `/comun/v1/empresas/${idEmpresa}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description *La llamada POST creará el archivo en BBDD en caso de no existir o lo actualizará en caso contrario
     *
     * @tags Empresa
     * @name PostLogotipoPorIdEmpresa
     * @summary Crea o modifica un logotipo para una empresa determinada
     * @request POST:/comun/v1/empresas/{idEmpresa}/logotipo
     * @secure
     */
    postLogotipoPorIdEmpresa: (
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
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name DeleteLogotipoPorIdEmpresa
     * @summary Borra el logotipo de una empresa
     * @request DELETE:/comun/v1/empresas/{idEmpresa}/logotipo
     * @secure
     */
    deleteLogotipoPorIdEmpresa: (idEmpresa: number, params: RequestParams = {}) =>
      this.http.request<ArchivoDTOGET, void>({
        path: `/comun/v1/empresas/${idEmpresa}/logotipo`,
        method: "DELETE",
        secure: true,
        ...params,
      }),

    /**
     * No description
     *
     * @tags Empresa
     * @name GetInformacionLogotipoPorIdEmpresa
     * @summary Comprueba que la empresa tiene foto, devuelve información
     * @request GET:/comun/v1/empresas/{idEmpresa}/logotipo/informacion
     * @secure
     */
    getInformacionLogotipoPorIdEmpresa: (idEmpresa: number, params: RequestParams = {}) =>
      this.http.request<ArchivoDTOGETINFO, void>({
        path: `/comun/v1/empresas/${idEmpresa}/logotipo/informacion`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * @description *Este método necesita únicamente el jwt a través de la URL
     *
     * @tags Empresa
     * @name GetLogotipoPorIdEmpresaPorUuid
     * @summary Recupera el logotipo de una empresa determinada
     * @request GET:/comun/v1/empresas/{idEmpresa}/logotipo/{uuid}
     * @secure
     */
    getLogotipoPorIdEmpresaPorUuid: (
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
      }),

    /**
     * No description
     *
     * @tags Idioma
     * @name GetIdiomas
     * @summary Recupera todos los idiomas que hay en la aplicación
     * @request GET:/comun/v1/idiomas
     */
    getIdiomas: (params: RequestParams = {}) =>
      this.http.request<IdiomaDtoResponse[], void>({
        path: `/comun/v1/idiomas`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Idioma
     * @name GetIdiomasPorIdIdioma
     * @summary Recupera un idioma que hay en la aplicación
     * @request GET:/comun/v1/idiomas/{idIdioma}
     */
    getIdiomasPorIdIdioma: (idIdioma: number, params: RequestParams = {}) =>
      this.http.request<IdiomaDtoResponse[], void>({
        path: `/comun/v1/idiomas/${idIdioma}`,
        method: "GET",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name GetPersonas
     * @summary Recupera todas las personas o la persona por el dni de su pasaporte y país
     * @request GET:/comun/v1/personas
     * @secure
     */
    getPersonas: (
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
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name PostPersona
     * @summary Crea una nueva persona
     * @request POST:/comun/v1/personas
     * @secure
     */
    postPersona: (data: PersonaDTOPOSTPUT, params: RequestParams = {}) =>
      this.http.request<PersonaDTOGET, void>({
        path: `/comun/v1/personas`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name GetContarPersonas
     * @summary Cuento el numero de personas dadas de alta en el sistema
     * @request GET:/comun/v1/personas/contar
     * @secure
     */
    getContarPersonas: (params: RequestParams = {}) =>
      this.http.request<number, void>({
        path: `/comun/v1/personas/contar`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name GetPersonaPorIdPersona
     * @summary Recupera una persona por su id
     * @request GET:/comun/v1/personas/{idPersona}
     * @secure
     */
    getPersonaPorIdPersona: (idPersona: number, params: RequestParams = {}) =>
      this.http.request<PersonaDTOGET, void>({
        path: `/comun/v1/personas/${idPersona}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name PutPersonaPorIdPersona
     * @summary Actualiza una persona existente
     * @request PUT:/comun/v1/personas/{idPersona}
     * @secure
     */
    putPersonaPorIdPersona: (idPersona: number, data: PersonaDTOPOSTPUT, params: RequestParams = {}) =>
      this.http.request<PersonaDTOGET, void>({
        path: `/comun/v1/personas/${idPersona}`,
        method: "PUT",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Persona
     * @name DeletePersonaPorIdPersona
     * @summary Borra una persona
     * @request DELETE:/comun/v1/personas/{idPersona}
     * @secure
     */
    deletePersonaPorIdPersona: (idPersona: number, params: RequestParams = {}) =>
      this.http.request<Duration, void>({
        path: `/comun/v1/personas/${idPersona}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Informatizado
     * @name GetTiposDocumentosInformatizados
     * @summary Devuelve todos los tipo documento informatizados del sistema
     * @request GET:/comun/v1/tipos-documentos-informatizados
     * @secure
     */
    getTiposDocumentosInformatizados: (params: RequestParams = {}) =>
      this.http.request<TipoDocumentoInformatizadoDtoResponse[], void>({
        path: `/comun/v1/tipos-documentos-informatizados`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Informatizado
     * @name GetTipoDocumentoInformatizadoPorIdTipoDocumentoInformatizado
     * @summary Devuelve tipo documento informatizado segun el id.
     * @request GET:/comun/v1/tipos-documentos-informatizados/{idTipoDocumentoInformatizado}
     * @secure
     */
    getTipoDocumentoInformatizadoPorIdTipoDocumentoInformatizado: (
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
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name GetTipoDocumentosUniversales
     * @summary Recupera un listado tipo documentos universales pertenecientes a los ids de paises pasados.
     * @request GET:/comun/v1/tipos-documentos-universales
     * @secure
     */
    getTipoDocumentosUniversales: (
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
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name PostTipoDocumentoUniversal
     * @summary Inserta un tipo de documento universal junto al listado de sus criterios de validación.
     * @request POST:/comun/v1/tipos-documentos-universales
     * @secure
     */
    postTipoDocumentoUniversal: (data: TipoDocumentoUniversalDtoRequest, params: RequestParams = {}) =>
      this.http.request<VersionDtoResponse, void>({
        path: `/comun/v1/tipos-documentos-universales`,
        method: "POST",
        body: data,
        secure: true,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name GetTipoDocumentoUniversalPorIdTipoDocumentoUniversal
     * @summary Recupera un tipo documento universal según el id pasado.
     * @request GET:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
     * @secure
     */
    getTipoDocumentoUniversalPorIdTipoDocumentoUniversal: (
      idTipoDocumentoUniversal: number,
      params: RequestParams = {},
    ) =>
      this.http.request<TipoDocumentoUniversalDtoResponse, void>({
        path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}`,
        method: "GET",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name PutTipoDocumentoUniversalPorIdTipoDocumentoUniversal
     * @summary Actualiza tanto la información general de un tipo de documento universal, como sus criterios de validación.
     * @request PUT:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
     * @secure
     */
    putTipoDocumentoUniversalPorIdTipoDocumentoUniversal: (
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
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name DeleteTipoDocumentoUniversalPorIdTipoDocumentoUniversal
     * @summary Elimina un tipo de documento universal.
     * @request DELETE:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}
     * @secure
     */
    deleteTipoDocumentoUniversalPorIdTipoDocumentoUniversal: (
      idTipoDocumentoUniversal: number,
      params: RequestParams = {},
    ) =>
      this.http.request<TipoDocumentoUniversalDtoResponse, void>({
        path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}`,
        method: "DELETE",
        secure: true,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name PostAumentarUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal
     * @summary Aumenta en 1 el número de usos del tipo de documento universal.
     * @request POST:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/aumentar-usos
     */
    postAumentarUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal: (
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
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name PostDisminuirUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal
     * @summary Disminuye en 1 el número de usos del tipo de documento universal hasta un mínimo de 0 usos. Si se llama al endpoint cuando el tipo de documento universal ya tiene 0 usos, no se realiza ningún cambio.
     * @request POST:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/disminuir-usos
     */
    postDisminuirUsosTipoDocumentoUniversalPorIdTipoDocumentoUniversal: (
      idTipoDocumentoUniversal: number,
      params: RequestParams = {},
    ) =>
      this.http.request<TipoDocumentoUniversalDtoResponse, void>({
        path: `/comun/v1/tipos-documentos-universales/${idTipoDocumentoUniversal}/disminuir-usos`,
        method: "POST",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags Tipo Documento Universal
     * @name GetVersionPorIdTipoDocumentoUniversalPorVersion
     * @summary Devuelve la información de una versión específica de un tipo de documento universal además de sus criterios de validación.
     * @request GET:/comun/v1/tipos-documentos-universales/{idTipoDocumentoUniversal}/versiones/{version}
     * @secure
     */
    getVersionPorIdTipoDocumentoUniversalPorVersion: (
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
      }),
  };
}
