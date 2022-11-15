// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Games, Ejemplo } = initSchema(schema);

export {
  Games,
  Ejemplo
};