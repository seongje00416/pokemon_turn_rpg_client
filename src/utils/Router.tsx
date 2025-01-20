import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SelectPokemonPage from "@/page/battle/SelectPokemonPage.tsx";
import BattleFieldPage from "@/page/battle/BattleFieldPage.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/selectPokemon" element={<SelectPokemonPage />} />
                <Route path="/battleField" element={<BattleFieldPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router