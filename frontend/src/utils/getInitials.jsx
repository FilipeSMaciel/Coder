export default function getInitials(name) {
  const names = name.split(" ");
  const firstNameInitial = names[0][0].toUpperCase();
  const lastNameInitial = names.length > 1 ? names[names.length - 1][0].toUpperCase() : "";
  return `${firstNameInitial}${lastNameInitial}`;
};