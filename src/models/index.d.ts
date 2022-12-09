import { ModelInit, MutableModel } from "@aws-amplify/datastore";
// @ts-ignore
import { LazyLoading, LazyLoadingDisabled, AsyncCollection } from "@aws-amplify/datastore";

type PlaylistGamesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PersonalPlaylistMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type GamesMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type EagerPlaylistGames = {
  readonly id: string;
  readonly GameID?: string | null;
  readonly GameTitle?: string | null;
  readonly GameImg?: string | null;
  readonly personalplaylistID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPlaylistGames = {
  readonly id: string;
  readonly GameID?: string | null;
  readonly GameTitle?: string | null;
  readonly GameImg?: string | null;
  readonly personalplaylistID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PlaylistGames = LazyLoading extends LazyLoadingDisabled ? EagerPlaylistGames : LazyPlaylistGames

export declare const PlaylistGames: (new (init: ModelInit<PlaylistGames, PlaylistGamesMetaData>) => PlaylistGames) & {
  copyOf(source: PlaylistGames, mutator: (draft: MutableModel<PlaylistGames, PlaylistGamesMetaData>) => MutableModel<PlaylistGames, PlaylistGamesMetaData> | void): PlaylistGames;
}

type EagerPersonalPlaylist = {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly PlaylistGames?: (PlaylistGames | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

type LazyPersonalPlaylist = {
  readonly id: string;
  readonly Title?: string | null;
  readonly Description?: string | null;
  readonly PlaylistGames: AsyncCollection<PlaylistGames>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
}

export declare type PersonalPlaylist = LazyLoading extends LazyLoadingDisabled ? EagerPersonalPlaylist : LazyPersonalPlaylist

export declare const PersonalPlaylist: (new (init: ModelInit<PersonalPlaylist, PersonalPlaylistMetaData>) => PersonalPlaylist) & {
  copyOf(source: PersonalPlaylist, mutator: (draft: MutableModel<PersonalPlaylist, PersonalPlaylistMetaData>) => MutableModel<PersonalPlaylist, PersonalPlaylistMetaData> | void): PersonalPlaylist;
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