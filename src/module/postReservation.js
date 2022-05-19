const myUrl='https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/'
export const reserveMeal=async()=>{
  const get=await fetch(myUrl,{method:'POST'})
  const data=await get.json()
}