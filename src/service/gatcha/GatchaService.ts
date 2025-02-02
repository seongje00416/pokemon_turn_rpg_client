
enum CommonPokemon {
    나무지기,
    괴력몬,
    딱구리,
    라이츄,
    망나뇽,
    메가니움,
    물짱이,
    엠페르트,
    초염몽,
    팬텀,
    팽도리,
    푸크린,
    후딘
}
const pickup = "팬텀";
enum LimitedPokemon {
    피카츄
}
enum LegendaryPokemon {
    디아루가,
    뮤,
    아르세우스,
    펄기아
}

export const CommonGatchaController = ():string => {
    if( RandomSuccess( 2 ) ) return PokemonRouletteController( GatchaType.LEGENDARY );
    else return PokemonRouletteController( GatchaType.COMMON );
    // 상시 포획
    // 상시 포켓몬 98% / 전설 포켓몬 2%
}

export const LegendaryGatchaController = ():string => {
    if( RandomSuccess( 30 ) ) return PokemonRouletteController( GatchaType.LEGENDARY );
    else return PokemonRouletteController( GatchaType.COMMON );
    // 전설 포획
    // 상시 포켓몬 70% / 전설 포켓몬 30%
}

export const LimitedGatchaController = ():string => {
    if( RandomSuccess( 30 ) ) return PokemonRouletteController( GatchaType.LIMITED );
    else return PokemonRouletteController( GatchaType.COMMON );
    // 한정 포획
    // 한정 포켓몬 30% / 상시 포켓몬 70%
}

export const PickupGatchaController = ():string => {
    if( RandomSuccess( 30 ) ) return PokemonRouletteController( GatchaType.PICKUP );
    else return PokemonRouletteController( GatchaType.COMMON_PICKUP );
    // 픽업 포획
    // 픽업 포켓몬 30% / 상시 포켓몬 70%;
}

const RandomSuccess = ( rate: number ):boolean => {
    const random = Math.random() * 100;
    return random < rate;
}

const enum GatchaType {
    LEGENDARY,
    COMMON,
    PICKUP,
    LIMITED,
    COMMON_PICKUP
}
const PokemonRouletteController = ( gatchaType: GatchaType ):string => {
    let pokemonArray:string[];
    // 상시 포켓몬 목록
    if( gatchaType === GatchaType.COMMON ) pokemonArray = Object.values( CommonPokemon ).filter(value => typeof value === 'string');
    // 한정 포켓몬 목록
    else if( gatchaType === GatchaType.LIMITED ) pokemonArray = Object.values( LimitedPokemon ).filter(value => typeof value === 'string');
    // 픽업 포켓몬 목록
    else if( gatchaType === GatchaType.PICKUP ) return pickup;
    // 상시 포켓몬 목록 ( 픽업 포켓몬 제외 )
    else if( gatchaType === GatchaType.COMMON_PICKUP ) pokemonArray = Object.values( CommonPokemon ).filter(value => typeof value === 'string' && value !== pickup ) as string[];
    // 전설 포켓몬 목록
    else if( gatchaType === GatchaType.LEGENDARY ) pokemonArray = Object.values( LegendaryPokemon ).filter(value => typeof value === 'string');
    else return "";

    const randomIndex = Math.floor(Math.random() * pokemonArray.length);
    return pokemonArray[randomIndex];
}


