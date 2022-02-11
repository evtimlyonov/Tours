import { useState } from 'react';

interface Tours {
  id: number;
  img: string;
  name: string;
  price: number;
  text: string;
  deleteHandler: (id: number) => void;
}

export const Tour = ({ id, img, name, price, text, deleteHandler }: Tours) => {
  const [readMore, setReadMore] = useState(false);

  const readMoreHandler: React.MouseEventHandler = (e) => {
    e.preventDefault();
    setReadMore((prevState) => !prevState);
  };

  return (
    <article className='mx-0 my-8 overflow-hidden bg-white rounded shadow-2xl'>
      <img
        className='object-cover w-full h-80'
        src={img}
        alt='Best of Paris in 7 Days Tour'
      />
      <footer className='px-8 py-6'>
        <div className='flex items-center justify-between mb-6'>
          <h4 className='font-bold tracking-wider'>{name}</h4>
          <h4 className='text-[#49a6e9] bg-[#ebf7ff] font-bold tracking-wider py-1 px-2 rounded'>
            ${price}
          </h4>
        </div>
        <p className='mb-5 text-[#617d98]'>
          {readMore ? text : `${text.substring(0, 200)} ...`}
          <button className='text-[#49a6e9]' onClick={readMoreHandler}>
            {' '}
            {readMore ? 'Show Less' : 'Read More'}
          </button>
        </p>
        <button
          className='text-[#bb2525] w-[200px] border border-[#bb2525] rounded py-1 px-2 mt-4 mx-auto block'
          onClick={deleteHandler.bind(null, id)}>
          not interested
        </button>
      </footer>
    </article>
  );
};
