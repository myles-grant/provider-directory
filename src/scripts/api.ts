// This file contains the two API functions which you'll use: fetchProviders, and fetchProviders

import { Provider } from "../interfaces/provider";
import data from "../data/directory.json";

/**
 * We are mimicking a REST request here, so it takes a half sec to respond
 */
const REQUEST_RESPONSE_TIME = 1000

/**
 * Fetch a a given provider by ID, and get the complete representation
 * @param providerId - The ID of the provider to "fetch"
 * @return {Promise<{id: string, name: string, title: string, avatarUrl: string, bio: string, }>}
 */
export const fetchProvider = (providerId: string) => {
  return new Promise<Provider>(
    (resolve, reject) => setTimeout(
      () => {
        const [matchingProvider] = data.filter(({ id }) => id === providerId)
        if (matchingProvider) {
          resolve(matchingProvider)
        } else {
          reject(`Provider with id ${providerId} not found!`)
        }
      },
      REQUEST_RESPONSE_TIME
    )
  )
};

/**
 * Fetch all the providers to be displayed, in a minimal representation
 * @return {Promise<Array<{id: string, name: string, title: string, avatarUrl: string, bio: string}>>>}
 */
export const fetchProviders = () => {
  return new Promise<Provider[]>((resolve, reject) => {
    try {
      setTimeout(() => {
        resolve(data as Provider[])
      }, REQUEST_RESPONSE_TIME)
    } catch (error) {
      reject(`Unknown error while fetching providers: ${JSON.stringify(error)}`)
    }
  }
  )
};

const makePartialRepresentation = ({ id, name, title, avatarUrl, bio, availabilty }: any) => ({
  id, name, title, avatarUrl, bio, availabilty
});
