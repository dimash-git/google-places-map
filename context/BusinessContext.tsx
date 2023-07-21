import { createContext, useState, Dispatch, SetStateAction } from "react";

interface BusinessContextInterface {
  businessList: Business[];
  setBusinessList: Dispatch<SetStateAction<Business[]>>;
  businessSelected: Business;
  setBusinessSelected: Dispatch<SetStateAction<Business>>;
  businessCount: number;
  setBusinessCount: Dispatch<SetStateAction<number>>;
  bussinessesPerPage: number;
  setBussinessesPerPage: Dispatch<SetStateAction<number>>;
}

const BusinessContext = createContext<BusinessContextInterface>(
  {} as BusinessContextInterface
);

const BusinessProvider = ({ children }: { children: React.ReactNode }) => {
  const [businessList, setBusinessList] = useState<Business[]>([]);
  const [businessSelected, setBusinessSelected] = useState<Business>(
    {} as Business
  );

  const [businessCount, setBusinessCount] = useState<number>(0);
  const [bussinessesPerPage, setBussinessesPerPage] = useState<number>(0);

  return (
    <BusinessContext.Provider
      value={{
        businessSelected,
        setBusinessSelected,
        businessList,
        setBusinessList,
        businessCount,
        setBusinessCount,
        bussinessesPerPage,
        setBussinessesPerPage,
      }}
    >
      {children}
    </BusinessContext.Provider>
  );
};

export { BusinessContext, BusinessProvider };
