select count("cities"."name") as "numberOfCities",
      "countries"."name"
  from "countries"
  join "cities" using ("countryId")
  group by "countries"."name"
