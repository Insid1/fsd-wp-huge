type Mods = Record<string, string | boolean>

type ClassNames = (cls: string, mods: Mods, additions: string[]) => string;

const classNames: ClassNames = (cls, mods, additions) => {
  const modsClasses = Object.entries(mods).reduce<string[]>((acc, [key, value]) => {
    if (value) {
      acc.push(key)
    }
    return acc
  }, [])

  return [cls, ...modsClasses, ...additions].join(" ")
}

export {classNames}
