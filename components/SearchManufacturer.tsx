"use client"

import { manufacturers } from "@/constants"
import { SearchManufacturerProps } from "@/types"
import { Combobox, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

import Image from "next/image"

const SearchManufacturer = ({
  manufacturer,
  setManufacturer,
}: SearchManufacturerProps) => {
  const [query, setQuery] = useState("")

  const filteredManufacturers =
    query === ""
      ? manufacturers
      : manufacturers.filter((item) =>
          item
            .toLowerCase()
            .replace(/\s+/g, "")
            .includes(query.toLowerCase().replace(/\s+/g, ""))
        )

  return (
    <div className="search-manufacturer">
      <Combobox value={manufacturer} onChange={setManufacturer}>
        <div className="w-full relative">
          <Combobox.Button className="absolute top-[14px]">
            <Image
              src="/car-logo.svg"
              alt="car logo"
              width={20}
              height={20}
              className="ml-4"
            />
          </Combobox.Button>

          <Combobox.Input
            className="search-manufacturer__input"
            placeholder="Volkswagen"
            onChange={(e) => setQuery(e.target.value)}
            displayValue={(manufacturer: string) => manufacturer}
          />

          <Transition
            as={Fragment}
            leave="transition ease-in  duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery("")}
          >
            <Combobox.Options>
              {filteredManufacturers.length === 0 && query !== "" ? (
                <div className="search__manufacturer-option">
                  Nothing found.
                </div>
              ) : (
                filteredManufacturers.map((option) => (
                  <Combobox.Option
                    key={option}
                    className={({ active }) => `
                    relative search-manufacturer__option
                    ${active ? "bg-primary-blue text-white" : "text-gray-900"} 
                  `}
                    value={option}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`block truncate ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {option}
                        </span>
                        {selected ? (
                          <span
                            className={`absolute inset-y-0 left-0 flex items-center pl-3 ${
                              active ? "text-white" : "text-teal-600"
                            }`}
                          ></span>
                        ) : null}
                      </>
                    )}
                  </Combobox.Option>
                ))
              )}
            </Combobox.Options>
          </Transition>
        </div>
      </Combobox>
    </div>
  )
}
export default SearchManufacturer
