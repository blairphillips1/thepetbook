export async function getLike() {
  const response = await fetch('http://localhost:8080');
  const test = await response.text();
  return test;
}
