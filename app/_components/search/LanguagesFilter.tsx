import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import { setSearchParams } from "@/app/_store/movieSearchSlice";
import {
  closeDropdown,
  setInput,
  toggleDropdown,
} from "@/app/_store/languagesFilterSlice";
import { MovieSearchItemProps } from "@/app/_types/types";

type GenresResultProps = Pick<MovieSearchItemProps, "languages">;

function LanguagesFilter({ languages }: GenresResultProps) {
  const { dropdownOpen, input } = useSelector(
    (state: RootState) => state.languageFilter,
  );
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  const dispatch = useDispatch<AppDispatch>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      )
        dispatch(closeDropdown());
    };

    dropdownOpen
      ? document.addEventListener("mousedown", handleClickOutside)
      : document.removeEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, dispatch]);

  const filteredLanguages = languages.filter((lang) =>
    lang.english_name.toLowerCase().includes(input.toLowerCase()),
  );

  return (
    <div className="relative bg-base-white" ref={dropdownRef}>
      <div
        className="border border-gray-300 p-2 cursor-pointer"
        onClick={() => dispatch(toggleDropdown())}
      >
        {searchParams.with_original_language
          ? languages.find(
              (lang) => lang.iso_639_1 === searchParams.with_original_language,
            )?.english_name
          : "None selected"}
      </div>

      {dropdownOpen && (
        <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 w-full">
          <input
            type="text"
            value={input}
            onChange={(e) => dispatch(setInput(e.target.value))}
            placeholder="Search language..."
            className="w-full p-2 border-b border-gray-300"
          />
          <ul className="max-h-48 overflow-y-auto">
            {filteredLanguages.map((lang) => (
              <li
                key={lang.iso_639_1}
                className="p-2 hover:bg-gray-200 cursor-pointer"
                onClick={() => {
                  dispatch(
                    setSearchParams({ with_original_language: lang.iso_639_1 }),
                  );
                  dispatch(closeDropdown());
                  dispatch(setInput("")); // Reset input after selection
                }}
              >
                {lang.english_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default LanguagesFilter;
