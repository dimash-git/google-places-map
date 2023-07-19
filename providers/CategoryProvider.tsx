import { createContext, useState } from "react";

interface CategoryContextType {
  selected: string;
  setSelected: React.Dispatch<React.SetStateAction<string>>;
}

const CategoryContext = createContext<CategoryContextType>(
  {} as CategoryContextType
);

const CategoryProvider = ({ children }: { children: React.ReactNode }) => {
  const [selected, setSelected] = useState<string>("");
  return (
    <CategoryContext.Provider value={{ selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
};

export { CategoryContext, CategoryProvider };
