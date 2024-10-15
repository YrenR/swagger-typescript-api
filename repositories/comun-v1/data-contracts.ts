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
