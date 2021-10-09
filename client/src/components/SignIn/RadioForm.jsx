import * as React from "react";
import { useFormik } from "formik";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

const initialValues = {
  type_of_home: "",
};

const RadioForm = ({ value, handler }) => {
  const onSubmit = (values) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
  });

  console.log(formik.values);

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Type of Home</FormLabel>
      <RadioGroup
        row
        name="type_of_home"
        value={value}
        onChange={handler}
      >
        <FormControlLabel value={true} control={<Radio />} label="Yes" />
        <FormControlLabel value={false} control={<Radio />} label="No" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioForm;
