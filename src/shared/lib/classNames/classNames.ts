export function clsnm(cls: string, additionnal: string[] = [], mods: Record<string, boolean> = {}): string {
    return [cls, ...additionnal.filter(Boolean), ...Object.keys(mods).filter((key) => mods[key])].join(' ').trim()
}

// e.g.
// clsnm('button', ['disabled', 'rounded'], { hover: true })
