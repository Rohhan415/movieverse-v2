"use client";
import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  setReleaseType,
  setSearchAllReleases,
  setSearchParams,
} from "@/app/_store/movieSearchSlice";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/app/_store/store";
import {
  closeDropdown,
  resetInput,
  setInput,
  toggleDropdown,
} from "@/app/_store/languagesFilterSlice";
import { MovieSearchItemProps } from "@/app/_types/types";

type CountriesProps = Pick<MovieSearchItemProps, "countries">;

function MovieReleaseDates({ countries }: CountriesProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { searchParams } = useSelector((state: RootState) => state.movieSearch);
  const dropdownState = useSelector((state: RootState) => state.languageFilter);

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [searchAllCountries, setSearchAllCountries] = useState(true);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const countryDropdownKey = "country"; // Unique key for the country dropdown

  // Set default country to United States (US)
  useEffect(() => {
    if (!searchParams.region) {
      const defaultCountryCode = "US";
      dispatch(setSearchParams({ region: defaultCountryCode }));
    }
  }, [dispatch, searchParams.region]);

  // Close dropdown on clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        dispatch(closeDropdown(countryDropdownKey));
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dispatch]);

  const handleReleaseTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    const updatedReleaseType = e.target.checked
      ? [...searchParams.releaseType, value]
      : searchParams.releaseType.filter((v) => v !== value);

    dispatch(setReleaseType(updatedReleaseType));
  };

  const handleStartDateChange = (date: Date | null) => {
    setStartDate(date);
    dispatch(setSearchParams({ startDate: date }));
  };

  const handleEndDateChange = (date: Date | null) => {
    setEndDate(date);
    dispatch(setSearchParams({ endDate: date }));
  };

  // Get the state for the country dropdown
  const countryDropdownOpen =
    dropdownState[countryDropdownKey]?.dropdownOpen || false;
  const countryInput = dropdownState[countryDropdownKey]?.input || "";

  // Filter countries based on input
  const filteredCountries = countries.filter((country) =>
    country.english_name.toLowerCase().includes(countryInput.toLowerCase()),
  );

  // Find the default country (United States)
  const defaultCountry = countries.find(
    (country) => country.iso_3166_1 === "US",
  );

  return (
    <>
      {/* Search All Releases Checkbox */}
      <label className="flex items-center gap-2 text-base-white">
        <input
          type="checkbox"
          checked={searchParams.searchAllReleases}
          onChange={(e) => dispatch(setSearchAllReleases(e.target.checked))}
        />
        Search all releases?
      </label>

      {/* Conditionally Render With Release Type Checkboxes */}
      {!searchParams.searchAllReleases && (
        <div className="flex flex-col text-base-white">
          <label>Release Type:</label>
          {[
            { value: 1, label: "Premiere" },
            { value: 2, label: "Theatrical (limited)" },
            { value: 3, label: "Theatrical" },
            { value: 4, label: "Digital" },
            { value: 5, label: "Physical" },
            { value: 6, label: "TV" },
          ].map((type) => (
            <label key={type.value} className="flex items-center gap-2">
              <input
                type="checkbox"
                value={type.value}
                onChange={handleReleaseTypeChange}
                checked={searchParams.releaseType.includes(type.value)}
              />
              {type.label}
            </label>
          ))}

          {/* Date Pickers for Release Date Range */}
          <div className="flex flex-col gap-2 mt-4 w-52 text-base-gray">
            <label>Start Date:</label>
            <DatePicker
              selected={startDate}
              onChange={handleStartDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select start date"
            />
            <label>End Date:</label>
            <DatePicker
              selected={endDate}
              onChange={handleEndDateChange}
              dateFormat="yyyy-MM-dd"
              placeholderText="Select end date"
            />
          </div>

          {/* Search All Countries Checkbox */}
          <div className="flex flex-col gap-2 mt-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={searchAllCountries}
                onChange={(e) => setSearchAllCountries(e.target.checked)}
              />
              Search all countries?
            </label>

            {/* Conditionally Render Country Selector */}
            {!searchAllCountries && (
              <div className="relative" ref={dropdownRef}>
                <div
                  className="border border-gray-300 p-2 cursor-pointer"
                  onClick={() => dispatch(toggleDropdown(countryDropdownKey))}
                >
                  {searchParams.region
                    ? countries.find(
                        (country) => country.iso_3166_1 === searchParams.region,
                      )?.english_name || "United States"
                    : defaultCountry?.english_name || "Select a country"}
                </div>

                {countryDropdownOpen && (
                  <div className="absolute mt-2 bg-white border border-gray-300 rounded shadow-lg z-10 w-full">
                    <input
                      type="text"
                      value={countryInput}
                      onChange={(e) =>
                        dispatch(
                          setInput({
                            key: countryDropdownKey,
                            input: e.target.value,
                          }),
                        )
                      }
                      placeholder="Search country..."
                      className="w-full p-2 border-b border-gray-300"
                    />
                    <ul className="max-h-48 overflow-y-auto">
                      {filteredCountries.map((country) => (
                        <li
                          key={country.iso_3166_1}
                          className="p-2 hover:bg-gray-200 cursor-pointer"
                          onClick={() => {
                            dispatch(
                              setSearchParams({
                                region: country.iso_3166_1,
                              }),
                            );
                            dispatch(closeDropdown(countryDropdownKey));
                            dispatch(resetInput(countryDropdownKey));
                          }}
                        >
                          {country.english_name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default MovieReleaseDates;
