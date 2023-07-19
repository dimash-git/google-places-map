import React, { useEffect, useState } from "react";
import { categoriesData } from "@/constants/data";
import CategoryItem from "./CategoryItem";

const CategoryList = () => {
  const [categoryItems, setCategoryItems] = useState<Category[]>([]);
  useEffect(() => {
    setCategoryItems(categoriesData);
  }, []);
  return (
    <div>
      <h2 className="text-xl mt-3 mb-3 font-bold">Select Your Fav Category</h2>
      <div>
        {categoryItems && (
          <div className="mb-5 flex gap-6">
            {categoryItems.map((item, idx) => (
              <CategoryItem category={item} key={idx} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryList;
