import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgIf, NgFor, TitleCasePipe } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.page.html',
  styleUrls: ['./pokemon-detail.page.scss'],
  standalone: true,
  imports: [NgIf, NgFor, TitleCasePipe, IonicModule, RouterLink],
})
export class PokemonDetailPage {
  pokemon: any = null;
  loading = true;
  error = '';

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonService
  ) {
    const name = this.route.snapshot.paramMap.get('name');
    if (name) {
      this.pokemonService.getPokemon(name).subscribe({
        next: (data) => {
          this.pokemon = data;
          this.loading = false;
        },
        error: () => {
          this.error = 'Pokémon não encontrado!';
          this.loading = false;
        },
      });
    } else {
      this.error = 'Pokémon não especificado!';
      this.loading = false;
    }
  }
}
