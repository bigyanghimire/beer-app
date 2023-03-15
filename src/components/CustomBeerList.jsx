import houzzBeer from './../assets/houzz-beer.png'

export default function CustomBearList({ customBeers }) {
  return (
    <>
      {
        customBeers.length > 0 && customBeers.map((beer) => (
          <div className='flex p-4  shadow-md items-center gap-20 mt-4'>
            <img style={{ "height": "100px", "width": "fit-content" }} src={houzzBeer}></img>
            <div>
              <h2 className='text-2xl'>{beer.name}</h2>
              <h6 className='text-md text-primary-lightyellow mt-2'>{beer.genre}</h6>
              <p className='text-sm mt-2'>{beer.description}</p>
            </div>
          </div>
        ))
      }
    </>
  );
}

