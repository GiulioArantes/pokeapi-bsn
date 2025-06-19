import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class FavoritesService {
  private key = 'favorites';

  getFavorites(): any[] {
    const favs = localStorage.getItem(this.key);
    return favs ? JSON.parse(favs) : [];
  }

  saveFavorites(favorites: any[]) {
    localStorage.setItem(this.key, JSON.stringify(favorites));
  }

  isFavorite(pokemon: any): boolean {
    return this.getFavorites().some((fav) => fav.id === pokemon.id);
  }

  toggleFavorite(pokemon: any) {
    const favorites = this.getFavorites();
    const idx = favorites.findIndex((fav) => fav.id === pokemon.id);
    if (idx > -1) {
      favorites.splice(idx, 1);
    } else {
      favorites.push({
        id: pokemon.id,
        name: pokemon.name,
        sprites: { front_default: pokemon.sprites?.front_default },
      });
    }
    this.saveFavorites(favorites);
  }
}
