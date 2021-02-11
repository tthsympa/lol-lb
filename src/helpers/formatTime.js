function formatTime(time: number = 0): string {
  const minutes: string = Math.floor(time / 60).toString()
  const seconds: string = (time % 60).toString()

  return `${minutes.padStart(2, 0)}:${seconds.padStart(2, 0)}`
}
export default formatTime
