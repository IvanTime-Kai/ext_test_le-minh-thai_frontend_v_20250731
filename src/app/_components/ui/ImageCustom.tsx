import Image, { ImageProps } from 'next/image';

interface ImageCustomProps extends Omit<ImageProps, 'blurDataURL'> {}

const ImageCustom = ({ src, alt, ...props }: ImageCustomProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBw0MDRwQDw4UFhAUFhQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxQUDxT/wAARCAAKAAoDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAQFBv/EACIQAAICAQQCAwEAAAAAAAAAAAECAwQRAAUhBhJREzFBcf/8QAFQEBAQAAAAAAAAAAAAAAAAAAAgP/xAAZEQACAwEAAAAAAAAAAAAAAAAAAQIDIRL/2gAMAwEAAhEDEQA/AM9uV3k4pA9xUjYQyFwD5Hn70bO/i00vPZgN6oV7H/ADU1eI1YV1j/2Q=="
      {...props}
    />
  );
};

export default ImageCustom;
