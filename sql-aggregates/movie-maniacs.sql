select "firstName",
      "lastName",
      sum("payments"."amount")
  from "customers"
  join "payments" using ("customerId")
  group by "firstName",
          "lastName"
  order by sum("payments"."amount") desc
