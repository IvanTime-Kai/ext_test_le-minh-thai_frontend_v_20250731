import ImageCustom from '@/app/_components/ui/ImageCustom';

interface BlogCardProps {
  imageSrc: string;
  date: string;
  time: string;
  title: string;
  tags: string[];
}

export function BlogCard({ imageSrc, date, time, title, tags }: BlogCardProps) {
  return (
    <div className="w-full group overflow-hidden cursor-pointer">
      <div className="relative aspect-[13/8] w-full overflow-hidden">
        <ImageCustom
          src={imageSrc || '/placeholder.svg'}
          alt={title}
          fill
          className="object-cover object-center transform transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
        />
        <div className="absolute flex flex-row items-center gap-4 bottom-0 left-0 bg-accent px-2 text-[15px] leading-[30px] font-normal text-primary-foreground">
          <span>{date}</span>
          <span>{time}</span>
        </div>
      </div>
      <div className="flex flex-col gap-2 mt-4">
        <h3 className="font-family-jp text-[15px] leading-[22px] tracking-[0.08px] font-light text-accent-foreground line-clamp-2">
          {title}
        </h3>
        <div className="font-family-jp flex flex-wrap gap-x-2 text-xs leading-[22px] tracking-[0.06px] font-light text-primary">
          {tags.map((tag, index) => (
            <span key={index}>#{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
