// This file defines the structure and default options for a set of filters,
// typically used to categorize or sort projects in the application.
// The `Filter` interface provides a consistent typing for each filter item, ensuring
// that each filter includes both a `value` for programmatic use and a `label` for display purposes.

interface Filter {
    value: string;   // The internal identifier for the filter, used in logic and URLs
    label: string;   // The user-facing label displayed in the UI for the filter
}

// Default filter options to be used across the application.
// Modify as needed to suit your specific needs.
const filters: Filter[] = [
    { value: "all", label: "All" },
    { value: "ui-ux", label: "UI/UX" },
    { value: "web-design", label: "Web Design" },
    { value: "app-design", label: "App Design" },
    { value: "graphic-design", label: "Graphic Design" },
]

export default filters
