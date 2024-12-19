import { useEffect, useState } from "react";

interface PokemonAbility {
  ability: {
    name: string;
  };
}

interface PokemonStat {
  stat: {
    name: string;
  };
  base_stat: number;
}

interface PokemonData {
  name: string;
  height: number;
  weight: number;
  abilities: PokemonAbility[];
  stats: PokemonStat[];
}

export default function ApiDebounced () {
  const [query, setQuery] = useState<string>(""); // Para manejar la entrada del usuario
  const [data, setData] = useState<PokemonData | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const debounceFetch = setTimeout(() => {
      if (query) {
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`;
        setIsLoading(true);

        fetch(apiURL)
          .then((response) => {
            if (!response.ok) throw new Error("No se encontró el Pokémon");
            return response.json();
          })
          .then((data: PokemonData) => {
            setData(data);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error("Error al obtener datos:", error);
            setData(null);
            setIsLoading(false);
          });
      }
    }, 500); // Retardo de 500ms para debounce

    return () => clearTimeout(debounceFetch); // Limpiamos el timeout anterior
  }, [query]);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "#4CAF50" }}>Pokémon API</h1>
      <h2 style={{ textAlign: "center", color: "#555" }}>Buscar un Pokémon</h2>

      <div style={{ textAlign: "center", margin: "20px" }}>
        <input
          type="text"
          placeholder="Escribe el nombre de un Pokémon"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          style={{
            padding: "10px",
            fontSize: "16px",
            width: "300px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
      </div>

      {isLoading ? (
        <p style={{ textAlign: "center", color: "#888" }}>Cargando datos...</p>
      ) : data ? (
        <div style={{ margin: "20px auto", maxWidth: "600px" }}>
          <h3>Información General:</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <strong>Nombre:</strong> {data.name}
            </li>
            <li>
              <strong>Altura:</strong> {data.height}
            </li>
            <li>
              <strong>Peso:</strong> {data.weight}
            </li>
          </ul>

          <h3>Habilidades:</h3>
          <ul>
            {data.abilities.map((ability, index) => (
              <li key={index}>{ability.ability.name}</li>
            ))}
          </ul>

          <h3>Estadísticas:</h3>
          <ul>
            {data.stats.map((stat, index) => (
              <li key={index}>
                {stat.stat.name}: {stat.base_stat}
              </li>
            ))}
          </ul>
        </div>
      ) : (
        query && (
          <p style={{ textAlign: "center", color: "#f44336" }}>
            No se encontró el Pokémon
          </p>
        )
      )}
    </div>
  );
}
