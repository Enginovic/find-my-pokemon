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
  protected popularPokemon: Pokemon[] = [];
  protected searchPokemon = null;
  protected selectedPokemon = null;
  protected loading = false;

  mounted() {
    this.fetchAllPokemon();
    this.fetchPopularPokemon();
  }

  /**
   * Fetch data from first gen pokemon on mounted
   * NOTE: I've limited it to 151 (1st gen is the best), since the api didn't have a Gen specific list and each Pokemon has to be called seperately if you wanted to show more.
   * See fetchPopularPokemon method.
   */
  protected async fetchAllPokemon() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      this.allPokemon = await response.data.results;
    } catch(error) {
      console.log('error', error);
    }
  }

  protected fetchPopularPokemon() {
    const popularIds: number[] = [3, 12, 54, 143];

    popularIds.forEach(async (id: number) => {
      try {
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
        this.popularPokemon.push(await response.data);
      } catch(error) {
        console.log('error', error);
      }
    });
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