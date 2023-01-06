const mode = import.meta.env.MODE

const fn = () => undefined

const isInDevMode = mode === 'development'

function Logger() { }
Logger.log = isInDevMode ? console.log : fn
Logger.info = isInDevMode ? console.info : fn
Logger.warn = isInDevMode ? console.warn : fn
Logger.error = isInDevMode ? console.error : fn

export default Logger