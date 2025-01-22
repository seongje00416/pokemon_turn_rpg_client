import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SelectPokemonPage from "@/page/battle/SelectPokemonPage.tsx";
import BattleFieldPage from "@/page/battle/BattleFieldPage.tsx";

import MyPokemonPage from "@/page/promote/MyPokemonPage.tsx";
import MyPokemonListPage from "@/page/promote/MyPokemonListPage.tsx";

import MainPage from "@/page/MainPage.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage /> } />
                <Route path="/selectPokemon" element={<SelectPokemonPage />} />
                <Route path="/battleField" element={<BattleFieldPage />} />
                <Route path="/myPokemon" element={<MyPokemonPage /> } />
                <Route path="/myPokemonList" element={<MyPokemonListPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router