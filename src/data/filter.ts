interface Filter {
    value: string
    label: string
}

const filters: Filter[] = [
    { value: "all", label: "All" },
    { value: "ui-ux", label: "UI/UX" },
    { value: "web-design", label: "Web Design" },
    { value: "app-design", label: "App Design" },
    { value: "graphic-design", label: "Graphic Design" },
]

export default filters