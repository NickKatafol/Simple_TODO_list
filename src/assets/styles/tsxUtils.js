import constantsShield from './constants.scss?raw'

export function scssVal(name) {
  const RE = new RegExp(`${name}: *(.+);`)
  return (constantsShield.match(RE) || [])[1]
  return val[1]
}

export function xrem(size) {
  return `${size / scssVal('fontSize')}rem`
}

export function xpr(mm, kk) {
  return `${mm / (kk / 100)}%`
}

