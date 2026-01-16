# System Tools

Essential utilities for maintaining, scheduling, and monitoring your Mikrotik router's core functions.

## <Icon name="Network" color="info" /> DHCP Leases

The DHCP Leases page (`/network/dhcp`) allows you to monitor all devices connected to your LAN or Hotspot network, even before they log in.
- **Lease Tracking**: View IP assignments, MAC addresses, and hostnames of connected devices.
- **Pre-Login Monitor**: Useful for identifying devices that are connected but having trouble reaching the hotspot login page.

## <Icon name="Clock" color="primary" /> Router Scheduler

MIVO provides a full interface (`/system/scheduler`) to manage Mikrotik's internal scripts and schedules.
- **Tasks List**: View all active and disabled scheduled tasks on your router.
- **Manage Tasks**: Add, edit, or delete tasks directly from MIVO.
- **Automation**: Use this for periodic script execution, such as clearing expired users or generating automated reports.

## <Icon name="Zap" color="warning" /> Critical Actions

Directly trigger system-level commands from the MIVO interface:
- **<Icon name="RefreshCw" color="info" /> Reboot**: Safely restart your Mikrotik hardware.
- **<Icon name="Power" color="danger" /> Shutdown**: Power off the device. Note that you will need physical access to the router to turn it back on.

> [!WARNING]
> These actions are executed immediately on your Mikrotik router. Ensure no critical operations are running before rebooting.

