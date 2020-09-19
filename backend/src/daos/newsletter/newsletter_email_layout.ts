
export function getNewsletterEmailLayout(link: string): string {
    return `
    <div>
        <a href=${link}>Click me to subscribe!</a>
    </div>
    `
}