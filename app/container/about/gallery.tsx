import Image from 'next/image';

export default function Gallery() {
  return (
    <div className='flex gap-5'>
      <Image
        src='/dentist-doctor.webp'
        alt='Image 1'
        width={322}
        height={522}
        className='rounded-2xl shadow-xl'
      />
      <Image
        src='/dentist-mechine.webp'
        alt='Image 2'
        width={264}
        height={522}
        className='rounded-2xl shadow-xl'
      />
    </div>
  );
}
