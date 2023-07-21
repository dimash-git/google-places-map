import { createContext, useState } from "react";

interface CategoryContextType {
  categorySelected: string;
  setCategorySelected: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [categorySelected, setCategorySelected] = useState<string>("");
  return (
    <CategoryContext.Provider value={{ categorySelected, setCategorySelected }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
