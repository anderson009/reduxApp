import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slices/pokemon/thunks";

const Pokemon = () => {
  const { pokemons, page, isLoading } = useSelector((state) => state.pokemons);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getPokemons())
    console.log(pokemons);
   
  }, [])
  
  return (
    <>
    <h1>Pokemon</h1>
    {isLoading ? <span>Cargando</span>: null}
    <hr />
      <ul>
        {pokemons.map(e => (
          <li>{e.name}</li>
        ))}
      </ul>
      <button onClick={() => dispatch(getPokemons(page))}>sig Page</button>
    </>
  );
};

export default Pokemon;
