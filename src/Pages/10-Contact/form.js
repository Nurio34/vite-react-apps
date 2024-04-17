export const form = [
    {
        topic: "contact",
        names: [
            ["name", "text"],
            ["email", "email"],
            ["phone", "tel"],
            ["photo", "file"],
        ],
    },
    {
        topic: "details",
        names: [
            ["reason", "select", ["reason 1", "reason 2", "reason 3"]],
            ["project", "text"],
            ["message", "textarea"],
        ],
    },
    {
        topic: "info",
        names: [
            ["company", "text"],
            ["contact-method", "radio", ["call", "sms", "watsap", "email"]],
            ["projectDoc", "file"],
        ],
    },
];
