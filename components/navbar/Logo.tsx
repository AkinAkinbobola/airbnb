'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Logo = () => {
  const router = useRouter();
  return (
    <Image
      src={'/logo.jpg'}
      alt={'Logo'}
      className={'hidden md:block cursor-pointer'}
      height={100}
      width={100}
    />
  );
};

export default Logo;
