import houzzBeer from './../assets/houzz-beer.png'

export default function CustomBearList({ customBeers }) {
  console.log("custom beers", customBeers)
  return (
    <>
      {
        customBeers.length > 0 && customBeers.map((beer) => (
          <div className='flex p-4  shadow-md items-center gap-20 mt-4'>
            <img style={{ "height": "100px", "width": "fit-content" }} src={houzzBeer}></img>
            <div>
              <h5>{beer.name}</h5>
              <h6>{beer.genre}</h6>
              <p>{beer.description}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

