import * as yup from "yup";

// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const advancedSchema = yup.object().shape({
  Zipcode: yup.string().min(5, "Enter a valid Zipcode"),

  //step 2
  CompositionEvent: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  Vision: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  Hearing: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  PartB: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  GroceryCard: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  // step 3
  Over: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  Utilities: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  Transportation: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,
  Emergency: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
  ,

  // step 4
  Medicare: yup.string(),
  Medicaid: yup.string(),
  Tricare: yup.string(),
  // step5
  plan: yup
    .array()
    .of(
      yup
        .string()
        .oneOf([
          "Cancer",
          "Diabetes",
          "Congestive Heart FailureRemove item",
          "Cardiovascular Disease",
          "Autoimmune disorder",
          "ESRDRemove",
          "Dementia",
          "Other",
        ])
    )
  ,
  Plan: yup.string("Enter the Plan"),
  // step 6
  doctor: yup.string(),
  medications: yup.string(),
  // step 7s
  Plan1: yup.string(),
  plan2: yup.string(),
  plan3: yup.string(),
  // step 8
  firstName: yup
    .string()

  ,
  lastName: yup
    .string()
    .min(5, "Last name must be at least 5 characters")
  ,
  email: yup
    .string()
    .email("Enter a valid email address")
    .required("Email address is required")
    .test(
      "email",
      "Enter a valid email address",
      (value) => value && value.indexOf("@") !== -1 && value.endsWith(".com")
    ),

  phoneNumber: yup
    .string()
    .matches(/^\d{10}$/, "Enter a valid phone number with 10 digits")
    .required("Phone number is required"),

  World: yup
    .string()
    .oneOf(["select", "option1", "option2", "option3", "option4", "option5"])
    .required("requried"),

  acceptedTos: yup
    .boolean()
    .oneOf([true], "Please accept the terms of service"),
});
//
