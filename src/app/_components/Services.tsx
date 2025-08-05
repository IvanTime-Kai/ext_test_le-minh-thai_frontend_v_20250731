'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { servicesData } from '../constants';
import { ServiceType } from '../enums';
import HexagonCard from './HexagonCard';

const Services = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleServiceClick = (serviceType: ServiceType) => {
    if (searchParams.get('serviceType') === serviceType) {
      const current = new URLSearchParams(searchParams.toString());
      current.delete('serviceType');
      router.push(`?${current.toString()}`);
      return;
    }
    const current = new URLSearchParams(searchParams.toString());
    current.set('serviceType', serviceType);

    router.push(`?${current.toString()}`);
  };

  const isFilterActive = (serviceType: ServiceType) => {
    return searchParams.get('serviceType') === serviceType;
  };

  return (
    <div className="container max-w-screen-md mx-auto grid grid-cols-2 md:flex md:flex-row justify-between w-full py-10 gap-6 cursor-pointer">
      {servicesData.map(service => (
        <div
          key={service.id}
          className="flex flex-col items-center"
          onClick={() => handleServiceClick(service.type)}
        >
          <HexagonCard
            icon={service.typeIcon}
            label={service.title}
            isActive={isFilterActive(service.type)}
          />
        </div>
      ))}
    </div>
  );
};

export default Services;
