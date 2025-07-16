import { useState } from 'react';
import Navigation from './Navigation';
import { useFilterStore } from '../store';
import { data } from "../db/data";
import { FiChevronDown, FiX } from 'react-icons/fi';

// interface FilterState {
//   selectedCountries: string[];
//   selectedColors: string[];
//   selectedPriceRange: { min: number; max: number } | null;
//   setSelectedCountries: (countries: string[]) => void;
//   setSelectedColors: (colors: string[]) => void;
//   setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
//   clearFilters: () => void;
// };

// interface Product {
//   country: string;
//   img: Record<string, string>;
//   price: number;
// };


function SidebarProducts() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [countryDropdown, setCountryDropdown] = useState<boolean>(false);
  const [colorDropdown, setColorDropdown] = useState<boolean>(false);
  const [priceDropdown, setPriceDropdown] = useState<boolean>(false);

  const {
    selectedCountries,
    selectedColors,
    selectedPriceRange,
    setSelectedCountries,
    setSelectedColors,
    setSelectedPriceRange,
    clearFilters,
  } = useFilterStore<FilterState>((state) => state);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleCountryDropdown = () => {
    setCountryDropdown(!countryDropdown)
  }

  return (
    <div>
      <Navigation toggleSidebar={toggleSidebar} />
      
      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 bg-white
         shadow-lg transform ${
           isOpen ? "translate-x-0" : "-translate-x-full"
         } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Header with close button */}

        <div className="relative flex justify-center items-center p-4 border-b">
          <h4 className='absolute left-1/2 transform -translate-x-1/2 text-lg font-semibold'>Filters</h4>
          <button className='ml-auto text-xl' onClick={ toggleSidebar }>
            <FiX />
          </button>
        </div>

        {/* Filters */}

        <div className="p-4 space-y-6">
          {/* Country filters */}
          <div>
            <button onClick={ toggleCountryDropdown } className='flex justify-between items-center w-full text-left'>
              <span className='font-medium'>Country</span>
              <FiChevronDown className={`transform ${countryDropdown ? 'rotate-180' : ''}`} />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SidebarProducts;
