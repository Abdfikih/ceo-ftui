export const calculateTimeDifference = (target: Date) => {
  const now = new Date()
  const timeDiff = target.getTime() - now.getTime()

  if (timeDiff <= 0) return null
  else {
    return [
      Math.ceil(timeDiff / (1000 * 60 * 60 * 24)), // days
      Math.ceil(timeDiff / (1000 * 60 * 60)) % 24, // hours
      Math.ceil(timeDiff / (1000 * 60)) % 60, // minutes
      Math.ceil(timeDiff / 1000) % 60, // seconds
    ]
  }
}
