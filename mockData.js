export const initialData = {
  customers: [
    { id: "CUS-001", name: "Acme Technologies", email: "hello@acme.io", plan: "Enterprise", status: "Active", joined: "2026-01-12" },
    { id: "CUS-002", name: "Nova Studios", email: "team@nova.io", plan: "Pro", status: "Active", joined: "2026-02-04" },
    { id: "CUS-003", name: "PixelCraft", email: "admin@pixelcraft.io", plan: "Starter", status: "Active", joined: "2026-03-18" },
    { id: "CUS-004", name: "Orbit Systems", email: "ops@orbit.io", plan: "Enterprise", status: "Pending", joined: "2026-04-21" },
    { id: "CUS-005", name: "Vertex Labs", email: "hi@vertex.io", plan: "Pro", status: "Inactive", joined: "2026-05-09" },
    { id: "CUS-006", name: "BluePeak Digital", email: "hello@bluepeak.io", plan: "Pro", status: "Active", joined: "2026-06-14" }
  ],
  staff: [
    { id: "STF-001", name: "Aarav Menon", email: "aarav@brightloop.io", role: "Billing Manager", status: "Active" },
    { id: "STF-002", name: "Ananya Nair", email: "ananya@brightloop.io", role: "Support Specialist", status: "Active" },
    { id: "STF-003", name: "Rohan Das", email: "rohan@brightloop.io", role: "Account Manager", status: "Active" }
  ],
  products: [
    { id: "PRD-001", name: "Brightloop Analytics", category: "Analytics", variants: 3, status: "Active" },
    { id: "PRD-002", name: "Brightloop CRM", category: "Productivity", variants: 2, status: "Active" },
    { id: "PRD-003", name: "Brightloop Automate", category: "Automation", variants: 2, status: "Active" },
    { id: "PRD-004", name: "Brightloop Support", category: "Customer Service", variants: 1, status: "Active" }
  ],
  plans: [
    { id: "PLN-001", name: "Starter", product: "Brightloop Analytics", price: 999, interval: "Monthly", subscribers: 248, status: "Active" },
    { id: "PLN-002", name: "Pro", product: "Brightloop Analytics", price: 2499, interval: "Monthly", subscribers: 624, status: "Active" },
    { id: "PLN-003", name: "Enterprise", product: "Brightloop CRM", price: 7999, interval: "Monthly", subscribers: 412, status: "Active" },
    { id: "PLN-004", name: "Pro Annual", product: "Brightloop Automate", price: 24999, interval: "Yearly", subscribers: 186, status: "Active" }
  ],
  quotations: [
    { id: "QUO-001", customer: "Acme Technologies", amount: 96000, date: "2026-10-28", status: "Accepted" },
    { id: "QUO-002", customer: "Nova Studios", amount: 29988, date: "2026-10-26", status: "Sent" },
    { id: "QUO-003", customer: "Orbit Systems", amount: 48000, date: "2026-10-24", status: "Draft" },
    { id: "QUO-004", customer: "Vertex Labs", amount: 18000, date: "2026-10-20", status: "Expired" }
  ],
  subscriptions: [
    { id: "SUB-001", customer: "Acme Technologies", plan: "Enterprise", amount: 7999, interval: "Monthly", start: "2026-08-01", renewal: "2026-11-01", status: "Active" },
    { id: "SUB-002", customer: "Nova Studios", plan: "Pro", amount: 2499, interval: "Monthly", start: "2026-09-12", renewal: "2026-11-12", status: "Active" },
    { id: "SUB-003", customer: "PixelCraft", plan: "Starter", amount: 999, interval: "Monthly", start: "2026-07-15", renewal: "2026-11-15", status: "Active" },
    { id: "SUB-004", customer: "Orbit Systems", plan: "Enterprise", amount: 7999, interval: "Monthly", start: "2026-09-20", renewal: "2026-11-20", status: "Paused" },
    { id: "SUB-005", customer: "BluePeak Digital", plan: "Pro Annual", amount: 24999, interval: "Yearly", start: "2026-01-10", renewal: "2027-01-10", status: "Active" }
  ],
  invoices: [
    { id: "INV-1042", customer: "Acme Technologies", amount: 7999, date: "2026-10-28", due: "2026-11-07", status: "Paid" },
    { id: "INV-1041", customer: "Nova Studios", amount: 2499, date: "2026-10-27", due: "2026-11-03", status: "Pending" },
    { id: "INV-1040", customer: "PixelCraft", amount: 999, date: "2026-10-24", due: "2026-10-29", status: "Overdue" },
    { id: "INV-1039", customer: "Orbit Systems", amount: 7999, date: "2026-10-22", due: "2026-11-05", status: "Pending" },
    { id: "INV-1038", customer: "BluePeak Digital", amount: 24999, date: "2026-10-18", due: "2026-10-25", status: "Paid" }
  ],
  discounts: [
    { id: "DSC-001", code: "WELCOME20", type: "Percentage", value: 20, uses: 142, status: "Active" },
    { id: "DSC-002", code: "ANNUAL15", type: "Percentage", value: 15, uses: 86, status: "Active" },
    { id: "DSC-003", code: "SAVE500", type: "Fixed amount", value: 500, uses: 34, status: "Expired" }
  ],
  payments: [
    { id: "PAY-0081", customer: "Acme Technologies", amount: 7999, method: "UPI", date: "2026-10-28", status: "Succeeded" },
    { id: "PAY-0080", customer: "Nova Studios", amount: 2499, method: "Card", date: "2026-10-27", status: "Pending" },
    { id: "PAY-0079", customer: "PixelCraft", amount: 999, method: "UPI", date: "2026-10-24", status: "Failed" },
    { id: "PAY-0078", customer: "BluePeak Digital", amount: 24999, method: "Bank transfer", date: "2026-10-18", status: "Succeeded" }
  ]
};

export const revenueData = [
  { month: "May", revenue: 148000 },
  { month: "Jun", revenue: 172000 },
  { month: "Jul", revenue: 165000 },
  { month: "Aug", revenue: 218000 },
  { month: "Sep", revenue: 246000 },
  { month: "Oct", revenue: 284000 }
];

export const formatMoney = amount =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0
  }).format(Number(amount) || 0);
