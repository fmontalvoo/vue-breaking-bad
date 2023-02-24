const mode = import.meta.env.MODE

const noop = () => { } // No operation function

const isInDevMode = mode === 'development'

function Logger() { }
Logger.log = isInDevMode ? console.log : noop
Logger.info = isInDevMode ? console.info : noop
Logger.warn = isInDevMode ? console.warn : noop
Logger.error = isInDevMode ? console.error : noop

export default Logger