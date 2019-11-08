import { Component, OnInit, Input } from '@angular/core';
import { Song } from '@types';

@Component({
  selector: 'app-previous-song',
  templateUrl: './previous-song.component.html',
  styleUrls: ['./previous-song.component.scss']
})
export class PreviousSongComponent implements OnInit {
  @Input() previousSong: Song;

  constructor() {}

  ngOnInit() {}
}
