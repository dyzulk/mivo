# Managing Routers

To start managing your Mikrotik, you first need to connect it to MIVO.

## <Icon name="PlusCircle" color="success" /> Connecting a Router

1.  Go to **Settings** > **Routers**.
2.  Click **Add Router**.
3.  Fill in the details:
    - **Session Name**: A unique identifier for this connection.
    - **IP Address**: Your Mikrotik IP or DNS name.
    - **Username/Password**: Your Mikrotik API credentials.
    - **Port**: Usually 8728 (API).

## <Icon name="Activity" color="info" /> Connection Status

MIVO will attempt to connect to the router in real-time. If the status is green, you're ready to start managing!

## <Icon name="Database" color="warning" /> Backup & Restore

Protect your configuration by creating backups of your MIVO database.

- **Backup**: Creates a JSON file containing all router sessions and global settings.
- **Restore**: Upload a previously saved MIVO backup file to recover your data.

> [!CAUTION]
> Restoring a backup will overwrite your current settings and sessions.

