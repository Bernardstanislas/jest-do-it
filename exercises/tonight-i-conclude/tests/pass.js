module.exports = name => {
  return new Promise((resolve, reject) => {
    process.nextTick(() => {
      if (name === 'Dus') {
        resolve(true)
      }
      reject(false)
    })
  })
}
