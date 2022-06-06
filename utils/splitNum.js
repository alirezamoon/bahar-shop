export const splitNumber = (number) =>
  number
    ?.toString()
    ?.split(".")[0]
    ?.replace(/\B(?=(\d{3})+(?!\d))/g, ".")
