import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/player';
import { PlayerService } from './../../player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css'],
})
export class PlayersComponent {
  players: Player[] = [];
  players$ = this.playerService.players$;

  constructor(private playerService: PlayerService) {}

  // ngOnInit(): void {
  //   this.getPlayers();
  // }

  // getPlayers(): void {
  //   this.playerService
  //     .getPlayers()
  //     .subscribe((players) => (this.players = players));
  // }
}
