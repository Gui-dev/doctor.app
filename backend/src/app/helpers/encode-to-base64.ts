export const encodeToBase64 = (data: string) => {
  return Buffer.from(data).toString('base64')
}

export const decodeFromBase64 = (data: string) => {
  return Buffer.from(data, 'base64').toString('utf-8')
}
