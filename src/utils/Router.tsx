import { BrowserRouter, Route, Routes } from 'react-router-dom'

import SelectPokemonPage from "@/page/battle/SelectPokemonPage.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/selectPokemon" element={<SelectPokemonPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router