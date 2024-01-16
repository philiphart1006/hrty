export async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}