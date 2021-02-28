import { Component, Vue, Watch } from "vue-property-decorator";

import axios from "axios";
import _ from 'lodash';

// Components
import HelloWorld from "@/components/HelloWorld.vue";

@Component({
	components: {
		HelloWorld,
	},
})

export default class Home extends Vue {
  protected searchedPokemon = '';
  protected allPokemons: object[] = [];
  protected pokemonList: object[] = [];
  protected debounceMe = _.debounce(this.debouncePokemonName, 1000);

  mounted() {
    this.fetchAllPokemons();
  }

  protected async fetchAllPokemons() {
    try {
      const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
      this.allPokemons = await response.data.results;
    } catch(error) {
      console.log('error', error);
    }
  }

  protected debouncePokemonName(e: any) {
    this.pokemonList = [];
    this.searchedPokemon = e.target.value;
    this.checkList();

  }

  protected checkList() {
    const pokemons: string[] = [];
    this.allPokemons.forEach((pokemon: object) => {
      if (pokemon.name.includes(this.searchedPokemon)) {
        pokemons.push(pokemon.name);
      }
    });

    if (pokemons.length) {
      this.fetchPokemonData(pokemons);
    }
  }

  protected fetchPokemonData(pokemons: string[]) {
    pokemons.forEach(async (pokemon: string) => {
      console.log(pokemon);

      try {
        const response  = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`);
        console.log(response);

        this.pokemonList.push(await response.data);
      } catch(error) {
        console.log('error', error);
      }
    });
  }
}
