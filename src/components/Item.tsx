import React from "react";
import Image from "next/image";

interface ItemProps {
  itemName: string;
  itemTitle: string;
  itemDate?: string;
  itemImage?: string;
  projectImage?: string;
  itemTag?: string;
  itemHref?: string;
}

const Item: React.FC<ItemProps> = ({
  itemName,
  itemTitle,
  itemDate,
  itemImage,
  projectImage,
  itemTag,
  itemHref,
}) => {
  const imageSrc = itemImage || projectImage;

  return (
    <a className={`flex gap-x-4 px-4 -mx-4 pt-4 border-none hover:bg-neutral-50 dark:hover:bg-neutral-900 group ${itemImage ? 'rounded-[12px]' : ''} `} href={itemHref}>
      {imageSrc ? (
        <div className={`bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] ${itemImage ? 'rounded-full' : 'rounded-[10px]'} mt-[2px] flex-shrink-0 shadow-shorter overflow-hidden`}>
          <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
            <Image src={imageSrc} alt="Next.js" width={36} height={36} />
          </div>
        </div>
      ) : (
        <div className={`bg-neutral-100 dark:bg-neutral-800 w-[36px] h-[36px] ${itemImage ? 'rounded-full' : 'rounded-[10px]'} mt-[2px] flex-shrink-0 shadow-shorter overflow-hidden`}>
          <div className="text-sm text-neutral-400 font-semibold flex justify-center items-center h-full">
            {itemName.substring(0, 2).toUpperCase()}
          </div>
        </div>
      )}

      <div className="flex flex-col text-sm border-b border-neutral-100 dark:border-neutral-900 flex-auto pb-4 text-neutral-700 group-hover:border-transparent dark:text-neutral-300">
        <div>{itemName}</div>
        <div className="text-neutral-500 dark:text-neutral-500 flex justify-between gap-x-2 items-center">
          <div>{itemTitle}</div>
          <div className="text-neutral-400 dark:text-neutral-500 tabular-nums">
            {itemDate ? (
              itemDate
            ) : (
              <div className="bg-neutral-100 border border-black border-opacity-5 px-2 text-xs rounded-full dark:bg-neutral-800 dark:text-neutral-500">
                {itemTag}
              </div>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default Item;
