import { Search, Filter } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import React from "react";
const SearchBar = ({ onSearch, onSort }) => {
  const [search, setSearch] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="flex items-center gap-3 w-full bg-[var(--component-bg-color)] rounded-xl px-4 py-2 shadow-md relative">
      {/* Search input */}
      <Search className="text-gray-400" size={18} />
      <input
        type="text"
        placeholder="Search cryptocurrencies..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch && onSearch(e.target.value);
        }}
        className="flex-1 bg-transparent outline-none text-sm text-white placeholder-gray-400"
      />

      {/* Filter button */}
      <div className="relative" ref={dropdownRef}>
        <button
          onClick={() => setDropdownOpen(!dropdownOpen)}
          className="p-2 rounded-lg hover:bg-gray-700 transition"
        >
          <Filter size={18} className="text-gray-300" />
        </button>

        {/* Dropdown menu */}
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-40 bg-gray-800 text-white rounded-lg shadow-lg py-2 z-50">
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => {
                onSort && onSort("increase");
                setDropdownOpen(false);
              }}
            >
              Balance ↑
            </button>
            <button
              className="w-full text-left px-4 py-2 text-sm hover:bg-gray-700"
              onClick={() => {
                onSort && onSort("decrease");
                setDropdownOpen(false);
              }}
            >
              Balance ↓
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;
