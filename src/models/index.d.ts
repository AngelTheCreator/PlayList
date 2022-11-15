import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled } from "@aws-amplify/datastore";

type GamesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EjemploMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerGames = {
  readonly id: string;
  readonly name?: string | null;
  readonly Release_date?: string | null;
  readonly Description?: string | null;
  readonly Image?: string | null;
  readonly Developer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyGames = {
  readonly id: string;
  readonly name?: string | null;
  readonly Release_date?: string | null;
  readonly Description?: string | null;
  readonly Image?: string | null;
  readonly Developer?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Games = LazyLoading extends LazyLoadingDisabled ? EagerGames : LazyGames

export declare const Games: (new (init: ModelInit<Games, GamesMetaData>) => Games) & {
  copyOf(source: Games, mutator: (draft: MutableModel<Games, GamesMetaData>) => MutableModel<Games, GamesMetaData> | void): Games;
}

type EagerEjemplo = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyEjemplo = {
  readonly id: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type Ejemplo = LazyLoading extends LazyLoadingDisabled ? EagerEjemplo : LazyEjemplo

export declare const Ejemplo: (new (init: ModelInit<Ejemplo, EjemploMetaData>) => Ejemplo) & {
  copyOf(source: Ejemplo, mutator: (draft: MutableModel<Ejemplo, EjemploMetaData>) => MutableModel<Ejemplo, EjemploMetaData> | void): Ejemplo;
}