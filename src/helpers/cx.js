function cx(...args: any[]): string {
  const t = args.filter(arg => typeof arg === 'string')
  return t.join(' ')
}
export default cx
