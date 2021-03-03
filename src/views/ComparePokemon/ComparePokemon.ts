import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";

@Component({
	components: {
    //
	}
})

export default class ComparePokemon extends Vue {
  protected allPokemon: Pokemon[] = [];
  protected pokemonResult: Pokemon[] = [];
  protected pokemonData: object[] = [];

  protected searchPokemon1 = null;
  protected searchPokemon2 = null;
  protected selectedPokemon1 = null;
  protected selectedPokemon2 = null;

  mounted() {
    this.fetchAllPokemon();
  }

  /**
   * Fetch data from first gen pokemon on mounted
   */
  protected async fetchAllPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      this.allPokemon = await response.data.results;
    } catch(error) {
      console.log('error', error);
    }
  }

  /**
   * Show all pokemon matching the input value
   * @param value
   */
  protected querySelections(value: string) {
    setTimeout(() => {
      this.pokemonResult = this.allPokemon.filter((pokemon: Pokemon) => {
        return (pokemon.name || '').toLowerCase().indexOf((value || '').toLowerCase()) > -1
      })
    }, 500);
  }

  /**
   * pokemon data to make a get call with the pokemon information
   * @param pokemon
   * @param position
   * @param oldPokemon
   */
  protected async fetchPokemonData(pokemon: Pokemon, position: string, oldPokemon: Pokemon) {
    if (oldPokemon) {
      this.removeItem(oldPokemon);
    }

    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon.name}`);
      position === 'first' ? this.pokemonData.unshift(await response.data) : this.pokemonData.push(await response.data)
    } catch(error) {
      console.log('error', error);
    }
  }

  /**
   * Remove the old pokemon from the array
   * @param oldPokemon
   */
  protected removeItem(oldPokemon: Pokemon) {
    this.pokemonData = this.pokemonData.filter((pokemon: any) => {
      if (pokemon.name !== oldPokemon.name) {
        return pokemon;
      }
    });
  }

  @Watch('searchPokemon1')
  protected searchedPokemon1(value: string) {
    value && value !== this.selectedPokemon1 && this.querySelections(value);
  }

  @Watch('searchPokemon2')
  protected searchedPokemon2(value: string) {
    value && value !== this.selectedPokemon2 && this.querySelections(value);
  }

  @Watch('selectedPokemon1')
  protected pokemonSelected1(pokemon: Pokemon, oldPokemon: Pokemon) {
    this.fetchPokemonData(pokemon, 'first', oldPokemon);
  }

  @Watch('selectedPokemon2')
  protected pokemonSelected2(pokemon: Pokemon, oldPokemon: Pokemon) {
    this.fetchPokemonData(pokemon, 'second', oldPokemon);
  }
}

export interface Pokemon {
  url: string;
  name: string;
}