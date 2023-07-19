import { CategoryContext } from "@/providers/CategoryProvider";
import Image from "next/image";
import React, { useContext } from "react";

interface Props {
  category: Category;
}

const CategoryItem = ({ category }: Props) => {
  const { setSelected } = useContext(CategoryContext);
  const handleClick = (value: string) => {
    setSelected(value);
  };
  return (
    <div
      className="flex flex-col items-center 
        bg-purple-100 rounded-2xl p-3 min-w-[90px]
        hover:scale-105 transition cursor-pointer group"
      onClick={() => handleClick(category.value)}
    >
      <Image src={category.icon} alt={category.name} width={35} height={35} />
      <h2 className="text-xs text-purple-700 group-hover:text-purple-400">
        {category.name}
      </h2>
    </div>
  );
};

export default CategoryItem;
