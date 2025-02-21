import bcrypt from 'bcrypt'

export const hashPassword = (password: string) => {
  const SALT = bcrypt.genSaltSync(8)
  return bcrypt.hash(password, SALT)
}

export const comparePassword = (password: string, hash: string) => {
  return bcrypt.compare(password, hash)
}
