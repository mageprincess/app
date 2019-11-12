import redis from '@config/redis';

import { ACTIVE_PLAYERS } from '@consts/redis';

class ActivePlayerHelper {
  public static async setActivePlayers(activePlayers: object): Promise<any> {
    await redis.open();
    await redis.setAsync(`${ACTIVE_PLAYERS}`, JSON.stringify(activePlayers));
  }

  public static async getActivePlayers(): Promise<any> {
    await redis.open();
    const activePlayers = await redis.getAsync(`${ACTIVE_PLAYERS}`);

    if (activePlayers) {
      return JSON.parse(activePlayers);
    }
  }

  /**
   * Changes active player list from object to array, filters sensitive data
   * @static
   * @param {object} activePlayers
   * @returns object[]
   */
  public static filterActivePlayerListForClient(activePlayers: object): object[] {
    return Object.keys(activePlayers).map(key => {
      return {
        id: activePlayers[key].id,
        spotifyUsername: activePlayers[key].spotifyUsername,
        // titleCorrect: activePlayers[key].titleCorrect || false,
        titleCorrect: true,
        artistCorrect: activePlayers[key].artistCorrect || false,
        avatar: activePlayers[key].spotifyImageUrl
      };
    });
  }
}

export default ActivePlayerHelper;
