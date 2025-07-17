import { useState } from 'react';
import Navigation from './Navigation';
import { useFilterStore } from '../store';
import { data } from "../db/data";
import { FiChevronDown, FiX } from 'react-icons/fi';

interface FilterState {
  selectedCountries: string[];
  selectedColors: string[];
  selectedPriceRange: { min: number; max: number } | null;
  setSelectedCountries: (countries: string[]) => void;
  setSelectedColors: (colors: string[]) => void;
  setSelectedPriceRange: (range: { min: number; max: number } | null) => void;
  clearFilters: () => void;
};

interface Product {
  country: string;
  image: Record<string, string>;
  price: number;
};


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
  };

  const toggleColorDropdown = () => {
    setColorDropdown(!colorDropdown)
  };

  const togglePriceDropdown = () => {
    setPriceDropdown(!priceDropdown)
  };

  const uniqueCountries = Array.from(
    new Set(data.map((item: Product) => item.country))
  );

  const handleCountrySelection = (country: string) => {
    setSelectedCountries( selectedCountries.includes(country) ? selectedCountries.filter(c => c !== country ) : [...selectedCountries, country])
  };

  const handleColorSelection = (color: string) => {
    setSelectedColors(selectedColors.includes(color) ? selectedColors.filter(col => col !== color) : [...selectedColors, color])
  };

  const handlePriceRangeSelection = (range: { min: number, max: number, label: string } | null) => {
    setSelectedPriceRange(range)
  };

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

            {countryDropdown && (
              <div className='space-y-2 mt-3'>
                {uniqueCountries.map((country, index) => (
                  <div key={index} className='flex items-center'
                    onClick={ () => handleCountrySelection(country) }>
                    <input
                      type='checkbox'
                      checked={selectedCountries.includes(country)}
                      onChange={() => handleCountrySelection(country)}
                      className='mr-3'
                    />
                    <p>{ country }</p>
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Color Filters */}
          <div>
            <button className='flex justify-between items-center w-full text-left'
              onClick={ toggleColorDropdown }
            >
              <span className='font-medium'>Color</span>
              <FiChevronDown className={`transform ${colorDropdown ? 'rotate-180' : ''}`} />
            </button>

            {colorDropdown && (
              <div>
                {['black', 'white', 'yellow', 'brown', 'red'].map((color) => (
                  <div key={color} className='flex items-center'>
                    <input
                      type='checkbox'
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorSelection(color)}
                      className='mr-3'
                    />

                    <p>{ color }</p>
                  </div>
                ))}                
              </div>
            )}
          </div>

          {/*  Pricing Filters */}
          <div>
            <button
              onClick={ togglePriceDropdown }
              className='flex justify-between items-center w-full text-left'
            >
              <span className='font-medium'>Price</span>
                <FiChevronDown className={`transform ${priceDropdown ? 'rotate-180' : ''}`} />
            </button>

            {priceDropdown && (
              <div className='mt-2 space-y-2'>
                {[
                  { label: 'Below $300', min: 0, max: 300 },
                  { label: '$300 - $500', min: 300, max: 500 },
                  { label: 'Above $500', min: 500, max: 1000 },
                ].map((range) => (
                  <div key={range.label} className='flex items-center'
                    onClick={ () => handlePriceRangeSelection(range)}
                  >
                    <input
                      type='radio'
                      checked={selectedPriceRange?.label === range.label}
                      onChange={() => handlePriceRangeSelection(range)}
                      className='mr-3'
                    />
                    <span>{ range.label }</span>
                  </div>
                )
                )}
              </div>
            )}
          </div>

          {/* Footer */}
          <div className='p-4 border-t flex justify-between'>
            <button
              onClick={clearFilters} className='bg-black text-white px-4 py-2 m-auto'
            >
              Clear All
            </button>
          </div>
        </div>
      </div>
      {/* Background Overlay */}
        {isOpen && (
          <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={toggleSidebar}></div>
        )}
    </div>
  )
}

export default SidebarProducts;