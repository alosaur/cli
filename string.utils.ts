export function classify(str: string): string {
  return str.charAt(0).toUpperCase() + camelize(str).slice(1);
}

export function camelize(str: string): string {
  return str.replace(/[_.-](\w|$)/g, function (_, x) {
    return x.toUpperCase();
  });
}

export function dasherize(str: string): string {
  return str.replace(
    /[A-Z](?:(?=[^A-Z])|[A-Z]*(?=[A-Z][^A-Z]|$))/g,
    function (s, i) {
      return (i > 0 ? "-" : "") + s.toLowerCase();
    },
  );
}
