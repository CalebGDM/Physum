export const validatePwd = (pwd: string) => {
  const pwdErrors = [];
  
  if (!pwd.match(/(?=.*[a-z])/)) {
    pwdErrors.push("Necesitas al menos una minúscula");
  }
  if (!pwd.match(/(?=.*[A-Z])/)) {
    pwdErrors.push("Necesitas al menos una mayúscula");
  }
  if (!pwd.match(/(?=.*?[0-9])/)) {
    pwdErrors.push("Necesitas al menos una número");
  }
  if (!pwd.match(/(?=.*?[#?!@$%^&*-])/)) {
    pwdErrors.push("Necesitas al menos un caracter especial (#?!@$%^&*-)");
  }
  if (!pwd.match(/.{8,}/)) {
    pwdErrors.push("Necesitas al menos ocho caracteres");
  } 
  
  return pwdErrors.length > 0 ? pwdErrors.join("\n") : null;
};
