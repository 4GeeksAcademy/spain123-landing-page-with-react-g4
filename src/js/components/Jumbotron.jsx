

export const Jumbotron = () => {
  return (
    <>
    <div className="container-fluid my-5">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <img className="img-fluid w-100" style={{borderRadius: '1em' }} src="https://www.impericon.com/cdn/shop/collections/20161101_pokemon_mobile_2x_0e5e6082-2584-43d3-aba2-6f51082fee6a.jpg?v=1720177600" alt="" />
        <p className="col-lg-6 mt-4 mx-auto mb-4" style={{fontWeight: 'bold', color: 'black'}}>
          Esta página está dedicada al mundo de Pokémon, donde los usuarios pueden explorar información sobre sus criaturas favoritas, descubrir sus tipos, habilidades y evoluciones, y conocer las últimas noticias de la franquicia. El sitio incluye una galería interactiva de Pokémon, una sección de juegos y curiosidades, y un espacio para entrenadores donde pueden compartir estrategias o equipos. Su diseño colorido y dinámico refleja la esencia de Pokémon, combinando aventura, diversión y nostalgia para fans de todas las edades.
        </p>
        </div>
    </div>
    </>
  )
}