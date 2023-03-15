import { useEffect } from 'react';
import _ from 'lodash';
import ModalPopup from '../components/ModalPopup'
import Card from '../components/Card';
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import houzzBeer from './../assets/houzz-beer.png'
export default function AddCustomBeer({ show, close, setCustomBeers }) {

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(yup.object().shape({
      beerName: yup.string().required("Beer Name is required"),
      genre: yup.string().required("Genre is required"),
      description: yup.string().required("Description is required"),
    })),
    defaultValues: {},
  });

  useEffect(() => {
    let existingBeers = window.localStorage.getItem('beers')
    if (existingBeers) {
      setCustomBeers(JSON.parse(existingBeers))
    }
  }, [])

  const createNewCustomBeer = (data) => {
    const existingBeers = window.localStorage.getItem('beers')

    if (!existingBeers) {
      window.localStorage.setItem('beers', JSON.stringify([{
        'name': data.beerName,
        'genre': data.genre,
        'description': data.description
      }]))
    } else {
      window.localStorage.setItem('beers', JSON.stringify([...JSON.parse(existingBeers), {
        'name': data.beerName,
        'genre': data.genre,
        'description': data.description
      }]))
    }
    setCustomBeers(JSON.parse(window.localStorage.getItem('beers')))
    close(true)
  }

  return (
    <>
      <ModalPopup show={show}>
        <Card cardClass="relative w-full max-w-2xl m-auto overflow-hidden" cardBorder="border-0" cardRadius="rounded" cardPadding="pt-6 pb-12 px-6">
          <div className='pt-6 px-4'>
            <h1 className='text-2xl font-bold'>Add a New Beer</h1>
            <img className='mt-2 border-gray border rounded' src={houzzBeer} height="60" width="80"></img>
            <form className="mt-4" onSubmit={handleSubmit(createNewCustomBeer)}>
              <div className="w-full lg:w-1/2 flex flex-col">
                <input type="text" className="border-gray border-2 bg-gray-100 p-2 rounded" placeholder="Beer Name*" id="beerName" {...register("beerName")} />
                {errors.beerName && <small className='text-red-500'>Beer Name is required</small>}
                <input type="text" className="mt-4 border-gray border-2 bg-gray-100 p-2 rounded" placeholder="Genre*" id="genre" {...register("genre")} />
                {errors.genre && <small className='text-red-500'>Genre is required</small>}
                <textarea type="text" className="mt-4 border-gray border-2 bg-gray-100 p-2 rounded" placeholder="Description*" id="description" {...register("description")} />
                {errors.description && <small className='text-red-500'>Description is required</small>}
                <div className='flex items-center text-right gap-4 mt-4 justify-end'>
                  <p className="hover:cursor-pointer text-gray-500" onClick={close}>Cancel</p>
                  <button className="bg-blue-300 rounded px-8 py-2 text-white" type="submit">Save</button>
                </div>
              </div>
            </form>
          </div>
        </Card>
      </ModalPopup>
    </>
  );
}

