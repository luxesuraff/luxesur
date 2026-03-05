export function renderTemplate(
  template: string,
  vars: Record<string, string>
) {
  let output = template;

  for (const [key, value] of Object.entries(vars)) {
    output = output.replaceAll(`{{${key}}}`, value);
  }

  return output;
}