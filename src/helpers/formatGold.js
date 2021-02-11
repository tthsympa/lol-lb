function formatGold(gold: number = 0): string {
  if (gold <= 999) return gold
  const [thous = '', units = ''] = (gold / 1000).toString().split('.')

  return `${thous}K${units.slice(0, 2)}`
}
export default formatGold
