// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { PlaylistGames, PersonalPlaylist, Games } = initSchema(schema);

export {
  PlaylistGames,
  PersonalPlaylist,
  Games
};