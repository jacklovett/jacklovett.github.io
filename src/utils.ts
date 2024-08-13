export function getCssVariable(variable: string): string {
    const root = document.documentElement
    return getComputedStyle(root).getPropertyValue(variable).trim()
}
