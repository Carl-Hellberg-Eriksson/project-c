"use client";
import React from "react";
import Tooltip from "@mui/material/Tooltip";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";

const Calculator = () => {
  const [hourlyWage, setHourlyWage] = React.useState(0);
  const [hours, setHours] = React.useState(0);
  const [doCalculateVacationSalary, setDoCalculateVacationSalary] =
    React.useState(false);

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
  const changeCalculateVacationSalary = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    var x = Boolean(event.target.checked);
    setDoCalculateVacationSalary(x);
  };

  const totalIncome = hourlyWage * hours;
  const taxableMunicipality = totalIncome;
  const municipalityTax = taxableMunicipality * MUNICIPALITY_TAX;
  const taxableState = Math.max(0, totalIncome - MIN_TAXABLE_MUNICIPALITY);
  const stateTax = taxableState * STATE_TAX;
  const incomeAfterTax = totalIncome - municipalityTax - stateTax;
  const totalScore = totalIncome + 10000;
  return (
    <div className="grid grid-cols-2">
      <div className="col">
        <div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left border">
          <div>
            <div className="p-4">
              <Tooltip title="Timlön betyder ..." placement="left-start">
                <TextField
                  label="Timlön:"
                  type="text"
                  defaultValue={0}
                  onChange={ChangeHourlyWage}
                />
              </Tooltip>
            </div>
            <div className="p-4">
              <Tooltip title="Antal timmar betyder ..." placement="left-start">
                <TextField
                  label="Antal timmar:"
                  type="text"
                  defaultValue={0}
                  onChange={ChangeHours}
                />
              </Tooltip>
            </div>
          </div>
          <div className="p-4 mt-auto">
            <Tooltip title="Total inkomst betyder ..." placement="left-start">
              <div>Total inkomst: {totalIncome}</div>
            </Tooltip>
          </div>
        </div>
        <br />
        <div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left  border">
          <div>
            <div className="p-4">
              <Tooltip title="kommunalskatt betyder ..." placement="left-start">
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
              <Tooltip title="statskatt betyder ..." placement="left-start">
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
          <div className="p-4 mt-auto">
            <Tooltip
              title="Total inkomst efter skatt betyder ..."
              placement="left-start"
            >
              <div>Total inkomst efter skatt: {incomeAfterTax}</div>
            </Tooltip>
          </div>
        </div>
        <FormControlLabel
          value="end"
          control={
            <Switch
              color="primary"
              checked={doCalculateVacationSalary}
              onChange={changeCalculateVacationSalary}
            />
          }
          label="Beräkna semesterlön"
          labelPlacement="end"
        />
        {doCalculateVacationSalary && (
          <div className="mb-4 grid text-center lg:mb-0 lg:grid-cols-2 lg:text-left  border">
            <div>
              <div className="p-4">
                <Tooltip
                  title="kommunalskatt betyder ..."
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
                <Tooltip title="statskatt betyder ..." placement="left-start">
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
            <div className="p-4 mt-auto">
              <Tooltip
                title="Total inkomst efter skatt betyder ..."
                placement="left-start"
              >
                <div>Total inkomst efter skatt: {incomeAfterTax}</div>
              </Tooltip>
            </div>
          </div>
        )}
      </div>
      <div className="col my-auto mx-auto align-middle">
        <h1>{totalScore}</h1>
      </div>
    </div>
  );
};
export default Calculator;
