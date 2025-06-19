import { Component } from '@angular/core';
import { NgFor, NgIf, TitleCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PokemonService } from '../services/pokemon.service';
import { RouterLink } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  arrowForwardOutline,
  star,
  starOutline,
  chevronUpOutline,
} from 'ionicons/icons';
import { FavoritesService } from '../services/favorites.service';

addIcons({
  'arrow-forward-outline': arrowForwardOutline,
  'arrow-back-outline': arrowBackOutline,
  'star-outline': starOutline,
  'chevron-up-outline': chevronUpOutline,
  star: star,
});

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [NgIf, NgFor, FormsModule, TitleCasePipe, IonicModule, RouterLink],
})
export class HomePage {
  pokemonName = '';
  pokemon: any = null;
  loading = false;
  error = '';
  currentId: number | null = null;

  favorites: any[] = [];
  bottomSheetOpen = false;
  dragStartY: number | null = null;
  sheetStartBottom: number | null = null;

  constructor(
    private pokemonService: PokemonService,
    private favService: FavoritesService
  ) {
    this.loadFavorites();
  }

  openBottomSheet() {
    this.loadFavorites();
    this.bottomSheetOpen = true;
  }

  closeBottomSheet() {
    this.bottomSheetOpen = false;
  }

  startDrag(event: MouseEvent | TouchEvent) {
    const clientY =
      event instanceof TouchEvent ? event.touches[0].clientY : event.clientY;
    this.dragStartY = clientY;
    this.sheetStartBottom = this.bottomSheetOpen
      ? 0
      : -window.innerHeight * 0.6;

    const moveHandler = (moveEvent: MouseEvent | TouchEvent) => {
      const moveY =
        moveEvent instanceof TouchEvent
          ? moveEvent.touches[0].clientY
          : moveEvent.clientY;
      const deltaY = moveY - (this.dragStartY ?? 0);
      const sheet = document.querySelector(
        '.favorites-bottom-sheet'
      ) as HTMLElement;
      if (sheet) {
        let newBottom = this.sheetStartBottom! - deltaY;
        newBottom = Math.max(Math.min(newBottom, 0), -window.innerHeight * 0.6);
        sheet.style.bottom = `${newBottom}px`;
      }
    };

    const endHandler = (endEvent: MouseEvent | TouchEvent) => {
      const endY =
        endEvent instanceof TouchEvent
          ? endEvent.changedTouches[0].clientY
          : endEvent.clientY;
      const deltaY = endY - (this.dragStartY ?? 0);
      this.bottomSheetOpen = deltaY < -50;
      const sheet = document.querySelector(
        '.favorites-bottom-sheet'
      ) as HTMLElement;
      if (sheet) sheet.style.bottom = '';
      window.removeEventListener('mousemove', moveHandler);
      window.removeEventListener('touchmove', moveHandler);
      window.removeEventListener('mouseup', endHandler);
      window.removeEventListener('touchend', endHandler);
    };

    window.addEventListener('mousemove', moveHandler);
    window.addEventListener('touchmove', moveHandler);
    window.addEventListener('mouseup', endHandler);
    window.addEventListener('touchend', endHandler);
  }

  loadFavorites() {
    this.favorites = this.favService.getFavorites();
  }

  isFavorite(pokemon: any): boolean {
    return this.favService.isFavorite(pokemon);
  }

  toggleFavorite(pokemon: any, event: Event) {
    event.stopPropagation();
    this.favService.toggleFavorite(pokemon);
    this.loadFavorites();
  }

  selectFavorite(fav: any) {
    this.closeBottomSheet();
    this.loadPokemon(fav.id);
  }

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
