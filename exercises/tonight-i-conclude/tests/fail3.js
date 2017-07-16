module.exports = name => {
  if (name === 'Dus') {
    return Promise.resolve(false)
  }
  return Promise.reject(true)
}
