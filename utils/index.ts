import { CarProps, FilterProps } from "@/types"

export async function fetchCars(filters: FilterProps) {
  const { fuel, limit, manufacturer, model, year } = filters

  const headers = {
    "X-RapidAPI-Key": "cda43a5205msh6ff0502b7603a86p1c6cefjsnf3e4da53cb66",
    "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
  }

  const response = await fetch(
    `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`,
    {
      headers: headers,
    }
  )

  const result = await response.json()
  return result
}

export const deleteSearchParams = () => {
  // Construye la URL sin parámetros de búsqueda
  const newPathname = window.location.pathname

  window.history.pushState({}, "", newPathname)
}

export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50 // Base rental price per day in dollars
  const mileageFactor = 0.1 // Additional rate per mile driven
  const ageFactor = 0.05 // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor
  const ageRate = (new Date().getFullYear() - year) * ageFactor

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate

  return rentalRatePerDay.toFixed(0)
}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage")

  const { make, model, year } = car

  url.searchParams.append("customer", "hrjavascript-mastery")
  url.searchParams.append("make", make)
  url.searchParams.append("moddelFamily", model.split(" ")[0])
  url.searchParams.append("zoomType", "fullscreen")
  url.searchParams.append("modelYear", `${year}`)
  url.searchParams.append("make", `${angle}`)

  return `${url}`
}

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search)
  searchParams.set(type, value)

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`

  return newPathname
}
