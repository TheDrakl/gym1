export const isNumeric = (str) => {
  return !isNaN(str) && !isNaN(parseFloat(str));
};

export const isValidEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

export const isPhoneNumberValid = (phone) => {
  return /^[0-9\s\-()]+$/.test(phone);
};

export const validationForm = (formData) => {
  const errors = {};
  const nameMinLength = 2;
  const emailMinLength = 5;
  const phoneMinLength = 7;

  // Validate first name if it's part of the formData
  if ("firstName" in formData) {
    if (!formData.firstName) {
      errors.firstName = "First name is required.";
    } else if (isNumeric(formData.firstName)) {
      errors.firstName = "First name should not be numeric.";
    } else if (formData.firstName.length < nameMinLength) {
      errors.firstName = "Enter a valid first name.";
    }
  }

  // Validate last name if it's part of the formData
  if ("lastName" in formData) {
    if (!formData.lastName) {
      errors.lastName = "Last name is required.";
    } else if (isNumeric(formData.lastName)) {
      errors.lastName = "Last name should not be numeric.";
    } else if (formData.lastName.length < nameMinLength) {
      errors.lastName = "Enter a valid last name.";
    }
  }

  // Validate message if it's part of the formData
  if ("message" in formData) {
    if (!formData.message) {
      errors.message = "Message must not be empty.";
    }
  }

  // Validate email address if it's part of the formData
  if ("emailAddress" in formData) {
    if (!formData.emailAddress) {
      errors.emailAddress = "Email is required.";
    } else if (!isValidEmail(formData.emailAddress)) {
      errors.emailAddress = "Email must be valid.";
    } else if (formData.emailAddress.length < emailMinLength) {
      errors.emailAddress = "Enter a valid email.";
    }
  }

  // Validate phone number if it's part of the formData
  if ("phoneNumber" in formData) {
    if (!formData.phoneNumber) {
      errors.phoneNumber = "Phone number is required.";
    } else if (!isPhoneNumberValid(formData.phoneNumber)) {
      errors.phoneNumber =
        "Phone number must contain only numbers and allowed symbols.";
    } else if (formData.phoneNumber.length < phoneMinLength) {
      errors.phoneNumber = "Enter a valid phone number.";
    }
  }

  // Validate isMember if it's part of the formData
  if ("isMember" in formData) {
    if (formData.isMember === undefined) {
      errors.isMember = "You must choose one option.";
    }
  }

  return errors;
};
