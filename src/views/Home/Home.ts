import { Component, Vue, Watch } from "vue-property-decorator";
import axios from "axios";
import router from "@/router";

@Component({
	components: {
    //
	},
})

export default class Home extends Vue {
  protected allPokemon: Pokemon[] = [];
  protected pokemonResult: Pokemon[] = [];
  protected searchPokemon = null;
  protected selectedPokemon = null;
  protected loading = false;

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
   * @param value input value
   */
  protected querySelections(value: string) {
    this.loading = true;
    setTimeout(() => {
      this.pokemonResult = this.allPokemon.filter((pokemon: Pokemon) => {
        return (pokemon.name || '').toLowerCase().indexOf((value || '').toLowerCase()) > -1
      })
      this.loading = false;
    }, 500);
  }

  @Watch('searchPokemon')
  protected searched(value: string) {
    value && value !== this.selectedPokemon && this.querySelections(value);
  }

  @Watch('selectedPokemon')
  protected pokemonSelected(pokemon: Pokemon) {
    router.push({ path: `pokemon/${pokemon.name}` });
  }
}

export interface Pokemon {
  url: string;
  name: string;
}