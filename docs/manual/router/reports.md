# Reports & Logs

Analyze your business performance and monitor system activity through detailed reporting tools.

## <Icon name="BarChart" color="success" /> Selling Reports {#selling}

The Selling Reports page (`/reports/selling`) provides a detailed breakdown of your revenue.
- **Timeline**: View sales by day, month, or a custom date range.
- **Details**: See which profile was sold, the timestamp, and the price.
- **Export**: (If available) Export your data for offline accounting.

## <Icon name="BarChart2" color="primary" /> Sales Resume {#resume}

The Resume page (`/reports/resume`) offers a simplified high-level view of your business growth.
- **Total Income**: Combined revenue from all voucher sales.
- **Voucher Count**: Total number of vouchers sold vs. generated.
- **Session Comparison**: Compare performance across different router sessions.

## <Icon name="ClipboardList" color="info" /> System Logs {#logs}

Monitor real-time events from your Mikrotik router (`/reports/user-log`).
- **Events**: Track user logins, logouts, script executions, and system errors.
- **Troubleshooting**: Use these logs to identify why a user cannot connect or when a session was disconnected.
- **Live Stream**: The logs update automatically as events occur on the router.

> [!NOTE]
> MIVO fetches these logs directly from the Mikrotik circular buffer. Clear your logs on the Mikrotik terminal if the buffer becomes too large.

