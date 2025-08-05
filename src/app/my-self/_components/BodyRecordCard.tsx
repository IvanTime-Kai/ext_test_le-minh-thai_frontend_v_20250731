import Button from '@/app/_components/ui/Button';
import ImageCustom from '@/app/_components/ui/ImageCustom';

interface BodyRecordCardProps {
  imgSrc: string;
  title: string;
  buttonText: string;
}

export default function BodyRecordCard({ imgSrc, title, buttonText }: BodyRecordCardProps) {
  return (
    <div className="col-span-3 md:col-span-1 w-full p-6 bg-primary-300">
      <div className="relative w-full aspect-square overflow-hidden">
        <ImageCustom
          src={imgSrc}
          alt="Person's waist with a measuring tape"
          fill
          className="z-0 object-cover grayscale-80"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
        <div className="absolute inset-0 bg-black/50 z-10 " />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 z-20">
          <h1 className="text-primary-300 text-[25px] font-normal mb-4 uppercase leading-[30px]">
            {title}
          </h1>
          <Button className="bg-primary-400 font-family-jp hover:bg-primary-500 transition-all duration-200 text-primary-foreground !px-6 !py-1 text-sm leading-5 cursor-pointer">
            {buttonText}
          </Button>
        </div>
      </div>
    </div>
  );
}
