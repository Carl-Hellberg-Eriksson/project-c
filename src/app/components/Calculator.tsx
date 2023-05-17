"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";

const Calculator = () => {
  const [hourlyWage, setHourlyWage] = React.useState(0);
  const [hours, setHours] = React.useState(0);

  const MIN_TAXABLE_MUNICIPALITY = 27000;
  const MUNICIPALITY_TAX = 0.2;
  const STATE_TAX = 0.05;
  const ChangeHourlyWage = (event: React.ChangeEvent<HTMLInputElement>) => {
    var x = Number(event.target.value);
    setHourlyWage(x);
  };
  const ChangeHours = (event: React.ChangeEvent<HTMLInputElement>) => {
    var x = Number(event.target.value);
    setHours(x);
  };

  const totalIncome = hourlyWage * hours;
  const taxableMunicipality = totalIncome;
  const municipalityTax = taxableMunicipality * MUNICIPALITY_TAX;
  const taxableState = Math.max(0, totalIncome - MIN_TAXABLE_MUNICIPALITY);
  const stateTax = taxableState * STATE_TAX;
  const incomeAfterTax = totalIncome - municipalityTax - stateTax;
  return (
    <div>
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div>
          <div className="p-4">
            <Tooltip
              title="testasdfasdfasdfasdfasdf asd fasdf asdf"
              placement="left-start"
            >
              <TextField
                label="Timlön:"
                type="text"
                id="HourlyWage"
                defaultValue={""}
                onChange={ChangeHourlyWage}
              />
            </Tooltip>
          </div>
          <div className="p-4">
            <Tooltip
              title="testasdfasdfasdfasdfasdf asd fasdf asdf"
              placement="left-start"
            >
              <TextField
                label="Antal timmar:"
                id="Hours"
                type="text"
                defaultValue={""}
                onChange={ChangeHours}
              />
            </Tooltip>
          </div>
        </div>
        <div>
          <Tooltip
            title="testasdfasdfasdfasdfasdf asd fasdf asdf"
            placement="left-start"
          >
            <div id="TotalIncome">Total inkomst: {totalIncome}</div>
          </Tooltip>
        </div>
      </div>
      <br />
      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left">
        <div>
          <div className="p-4">
            <Tooltip
              title="testasdfasdfasdfasdfasdf asd fasdf asdf"
              placement="left-start"
            >
              <TextField
                label="kommunalskatt:"
                defaultValue={municipalityTax}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Tooltip>
          </div>
          <div className="p-4">
            <Tooltip
              title="testasdfasdfasdfasdfasdf asd fasdf asdf"
              placement="left-start"
            >
              <TextField
                label="statskatt:"
                defaultValue={stateTax}
                InputProps={{
                  readOnly: true,
                }}
              />
            </Tooltip>
          </div>
        </div>
        <div>
          <Tooltip
            title="testasdfasdfasdfasdfasdf asd fasdf asdf"
            placement="left-start"
          >
            <div>Total inkomst efter skatt: {incomeAfterTax}</div>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};
export default Calculator;
