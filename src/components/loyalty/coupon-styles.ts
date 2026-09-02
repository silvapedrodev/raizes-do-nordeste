export const getCouponTheme = (code: string, isAvailable: boolean) => {
  if (!isAvailable) {
    return "bg-gray-100 border-gray-200 text-gray-400 opacity-60 grayscale";
  }
  switch (code.toUpperCase()) {
    case "RAIZES05":
      return "bg-gradient-to-r from-[#BF0F0F] via-[#F25D07] to-[#F2A007]";
    case "NORDESTINO10":
      return "bg-gradient-to-r from-purple-600 to-indigo-600 text-white border-purple-700 shadow-md";
    case "VIP35":
      return "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500";
    case "CASA50":
      return "bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500";
    default:
      return "bg-gradient-to-r from-[#F25D07] to-[#F2A007]";
  }
};