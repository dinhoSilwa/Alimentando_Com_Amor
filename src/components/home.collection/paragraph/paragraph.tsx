import { ComponentProps, ReactNode } from "react";
import { outfitFont } from "@/assets/fonts";
import clsx from "clsx";

interface IParagraphProps extends ComponentProps<'p'> {
  children: ReactNode;
  boldText?: boolean;
}

export default function Paragraph({
  children,
  boldText,
  ...props
}: IParagraphProps) {
  const paragraphClasses = clsx(
    "text-lg md:mb-4 leading-6 text-[#1B1B1BCC] mb-4",
    'max-[245px]:text-sm max-[210px]:text-xs max-[170px]:text-[10px]',    
    outfitFont.className, 
    { "font-bold": boldText } 
  );

  return <p {...props} className={paragraphClasses}>{children}</p>;
}
