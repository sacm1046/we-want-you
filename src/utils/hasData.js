export function hasData(value) {
  if (value === undefined) return false;
  if (value === null) return false;
  if (typeof value === "string" && value === "") return false;
  if (Array.isArray(value) && value.length === 0) return false;
  return true;
}
