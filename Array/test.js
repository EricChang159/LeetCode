
async function abc() {
  console.log(await promiseTest())
}

function promiseTest () {
  return new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve('0123')
    },2000)
  }).then((res)=>{
    return res
  })
}

abc()