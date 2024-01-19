export async function formToObj(request) {
  const formData = await request.formData()
  return Object.fromEntries(formData.entries())
}

const tokenName = 'HRTY-TOKEN'

export function setToken(token){
  console.log(token)
  localStorage.setItem(tokenName, token)
}

export function getToken(){
  console.log('Get token route hit')
  return localStorage.getItem(tokenName)
}