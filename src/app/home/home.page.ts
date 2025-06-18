import { Component } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowForwardOutline } from 'ionicons/icons';

addIcons({
  'arrow-forward-outline': arrowForwardOutline,
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NgIf, FormsModule, TitleCasePipe, IonicModule, RouterLink],
})
export class HomePage {
  pokemonName = '';
  pokemon: any = null;
  loading = false;
  error = '';

  constructor(private pokemonService: PokemonService) {}

  loadPokemon() {
    if (!this.pokemonName) {
      this.pokemon = null;
      this.error = 'Digite o nome de um Pokémon!';
      return;
    }
    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(this.pokemonName.toLowerCase()).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.loading = false;
      },
      error: () => {
        this.error = 'Pokémon não encontrado!';
        this.loading = false;
      },
    });
  }
}
