import { Component } from '@angular/core';
import { NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import { arrowBackOutline, arrowForwardOutline } from 'ionicons/icons';

addIcons({
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-back-outline': arrowBackOutline,
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
  currentId: number | null = null;

  constructor(private pokemonService: PokemonService) {}

  loadPokemon(pokemonParam?: string | number) {
    const query =
      pokemonParam ??
      (this.pokemonName ? this.pokemonName.toLowerCase() : this.currentId);
    if (!query) {
      this.pokemon = null;
      this.error = 'Digite o nome de um Pokémon!';
      return;
    }
    this.loading = true;
    this.error = '';
    this.pokemon = null;

    this.pokemonService.getPokemon(query).subscribe({
      next: (data) => {
        this.pokemon = data;
        this.currentId = data.id;
        this.pokemonName = data.name;
        this.loading = false;
      },
      error: () => {
        this.error = 'Pokémon não encontrado!';
        this.loading = false;
      },
    });
  }

  nextPokemon() {
    if (this.currentId) {
      this.loadPokemon(this.currentId + 1);
    }
  }

  prevPokemon() {
    if (this.currentId && this.currentId > 1) {
      this.loadPokemon(this.currentId - 1);
    }
  }
}
