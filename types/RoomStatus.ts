import { PlayerOmitted } from './Game/Player';
import { Song } from './Song';

export interface RoomStatus {
  song: Song;
  previousTracks: Song[];
  players: Record<string, PlayerOmitted>;
}

export interface RoomStatusResponse extends RoomStatus {
  // isPaused: boolean;
  startTime: Date;
}
