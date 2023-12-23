import { Filter, Hero, SearchBar } from "@/components";
import Image from "next/image";

export default function Home() {
  return (
    <main className='overflow-hidden'>
      <Hero />
      <div className='padding-x padding-y mt-10 max-width' id='discover'>
        <div className='home__container'>
          <h1 className='font-extrabold text-4xl'>Car Catalogue</h1>
          <p className='text-slate-500 font-thin mt-1'>
            explore the cars you might like
          </p>
          <div className='home__filters'>
            <SearchBar />
            <div className='home__filter-container'>
              <Filter />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
