# Hotspot Management

Comprehensive tools to manage your Mikrotik Hotspot server, from user creation to advanced access control.

## <Icon name="Users" color="primary" /> Hotspot Users {#users}

The Users page (`/hotspot/users`) is the central database for all your wifi accounts.
- **Manual Creation**: Add individual users with specific usernames and passwords.
- **Individual Printing**: Hover over a user to see the print icon. It uses the default template assigned to their profile.
- **Batch Printing**: Select multiple users and use the **Batch Actions** menu to print them all at once on a single page.
- **Status Monitor**: See if a user is currently logged in (Active) directly in the list.

## <Icon name="Layers" color="info" /> User Profiles {#profiles}

User Profiles (`/hotspot/profiles`) define the rules for each type of voucher (e.g., 1 Hour, 1 Day).
- **Rate Limit**: Control upload and download speeds (e.g., `512k/1M`).
- **Shared Users**: Limit how many devices can use the same account simultaneously.
- **Validity**: Set how long the account remains active after the first login.
- **Price**: Store the selling price for reporting purposes.

## <Icon name="Ticket" color="success" /> Voucher Generator {#generate}

Generate hundreds of vouchers in seconds (`/hotspot/generate`).
1. **Quantity**: Choose how many vouchers to create.
2. **Server**: Select which hotspot server to target (usually `all`).
3. **User Mode**: Choose between `Username & Password` or `Username = Password`.
4. **Prefix**: Add a constant prefix to every generated username.

## <Icon name="Zap" color="warning" /> Active Sessions & Cookies {#active}

Monitor and control current connections (`/hotspot/active` and `/hotspot/cookies`).
- **Kick User**: Forcefully disconnect an active user session.
- **Cookies**: Manage 'remember me' tokens. Deleting a cookie forces the user to log in again on their next connection.

## <Icon name="ShieldCheck" color="danger" /> Security & Access {#security}

Advanced settings for network access without typical voucher requirements.
- **IP Bindings**: Bypass the hotspot login for specific MAC or IP addresses (e.g., for office printers or servers).
- **Walled Garden**: Allow access to specific websites or domains (e.g., your bank's portal) even before users log in.

