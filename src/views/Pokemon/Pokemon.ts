import axios from "axios";
import { Component, Vue } from "vue-property-decorator";

@Component({
	components: {
    //
	},
  filters: {
    toKg(value: number) {
      return (value * 0.45359237).toFixed(2);
    },
    toM(value: number) {
      return (value * 0.0254).toFixed(2);
    }
  }
})

export default class Pokemon extends Vue {
  protected isLoadingPokemon = false;
  protected pokemon: PokemonInterface = {
    name: '',
    id: 0,
    sprites: {},
    types: [],
    stats: [],
    weight: 0,
    height: 0,
    abilities: [],
  };

  mounted() {
    this.getPokemonData();
  }

  protected async getPokemonData() {
    this.isLoadingPokemon = true;
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${this.$route.params.id}`);
      this.pokemon = await response.data;
      this.isLoadingPokemon = false;
    } catch(error) {
      console.log('error', error);
    }
  }
}

export interface PokemonInterface {
  name: string;
  id: number;
  sprites: object;
  types: object[];
  stats: object[];
  weight: number;
  height: number;
  abilities: object[];
}