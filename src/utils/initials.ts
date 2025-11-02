export function getInitials(name: string): string {
    return name.split(" ").map(n => n.charAt(0).toUpperCase()).join("");
}