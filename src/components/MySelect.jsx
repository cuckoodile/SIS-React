import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function SelectDemo(variant, ...props) {

  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        {variant == 'MONTH' && (<SelectValue placeholder="Select a month" />)}
        {variant == 'YEAR' && (<SelectValue placeholder="Select a year" />)}
      </SelectTrigger>
      <SelectContent>
        {variant == 'MONTH' && (
          <SelectGroup className={"cursor-pointer"}>
            <SelectItem value="January">January</SelectItem>
            <SelectItem value="February">February</SelectItem>
            <SelectItem value="March">March</SelectItem>
            <SelectItem value="April">April</SelectItem>
            <SelectItem value="May">May</SelectItem>
            <SelectItem value="June">June</SelectItem>
            <SelectItem value="July">July</SelectItem>
            <SelectItem value="August">August</SelectItem>
            <SelectItem value="September">September</SelectItem>
            <SelectItem value="October">October</SelectItem>
            <SelectItem value="November">November</SelectItem>
            <SelectItem value="December">December</SelectItem>
          </SelectGroup>
        )}
        {variant == 'YEAR' && (
          <SelectGroup className={"cursor-pointer"}>
            <SelectItem value="2010">2010</SelectItem>
            <SelectItem value="2011">2011</SelectItem>
            <SelectItem value="2012">2012</SelectItem>
            <SelectItem value="2013">2013</SelectItem>
            <SelectItem value="2014">2014</SelectItem>
            <SelectItem value="2015">2015</SelectItem>
            <SelectItem value="2016">2016</SelectItem>
            <SelectItem value="2017">2017</SelectItem>
            <SelectItem value="2018">2018</SelectItem>
            <SelectItem value="2019">2019</SelectItem>
            <SelectItem value="2020">2020</SelectItem>
            <SelectItem value="2021">2021</SelectItem>
            <SelectItem value="2022">2022</SelectItem>
            <SelectItem value="2023">2023</SelectItem>
            <SelectItem value="2024">2024</SelectItem>
          </SelectGroup>
        )}
      </SelectContent>
    </Select>
  )
}