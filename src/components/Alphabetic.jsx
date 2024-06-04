import React, { useState } from 'react';
import { Button, Modal } from 'antd';

const Alphabetic = () => {
  const [isModalOpen, setIsModalOpen] = useState(null);

  const showModal = (index) => {
    setIsModalOpen(index);
  };

  const handleOk = () => {
    setIsModalOpen(null);
  };

  const handleCancel = () => {
    setIsModalOpen(null);
  };

  const Alphabet = [
    { name: 'A', category: [''] },
    { name: 'B' },
    { name: 'C' },
    { name: 'D' },
    { name: 'E' },
    { name: 'F' },
    { name: 'G' },
    { name: 'H' },
    { name: 'I' },
    { name: 'J' },
    { name: 'K' },
    { name: 'L', category: ['Leaves', 'Lesser-known'] },
    { name: 'M' },
    { name: 'N' },
    { name: 'O' },
    { name: 'P' },
    { name: 'Q' },
    { name: 'U' },
    { name: 'R', category: ['Roots', 'Resolved'] },
    { name: 'S' },
    { name: 'V' },
    { name: 'F' },
    { name: 'W' },
    { name: 'X' },
    { name: 'Y' },
    { name: 'Z' },
  ];

  return (
    <div>
      <div className="bg-white shadow-md h-full w-full flex gap-4 pt-10 pl-10">
        <p className='pt-4 font-medium text-lg'>Common Name</p>
        <hr className='bg-black w-1 h-10' />
        <p className='pt-4 font-medium text-lg'>Scientific Name</p>
        <div>
          <ul className='text-black flex gap-2 mt-4 '>
            {Alphabet.map((el, index) => {
              return (
                <li
                  key={index}
                  className='hover:bg-[#025222] hover:text-white py-2 px-3 rounded-md cursor-pointer relative'
                  onClick={() => showModal(index)}
                >
                  {el.name}
                  {isModalOpen === index && (
                    <ul className='absolute bg-white w-64 py-3 hover:text-black'>
                      {el?.category?.map((d, idx) => (
                        <li key={idx}>{d}</li>
                      ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Alphabetic;
