# Quick Print

Quick Print is a specialized module for high-speed voucher vending. It allows you to display only the specific packages you want to sell and print them with a single click.

## <Icon name="BarChart2" color="primary" /> Vending Dashboard

The main page (`/quick-print`) displays your "Packets" as large, clickable cards.
- **Instant Generation**: Clicking a packet immediately requests the router to create a new user.
- **Auto-Print**: Once the user is created, the print dialog for that voucher opens automatically.

## <Icon name="Library" color="info" /> Packet Management

Access the **Manage** section (`/quick-print/manage`) to customize your vending dashboard.

### <Icon name="PlusCircle" color="success" /> Adding Packets
- **Profile**: Choose a Mikrotik user profile.
- **Price**: Set the display price (can differ from Mikrotik comment).
- **Template**: Assign a specific voucher template for this packet.

### <Icon name="Trash2" color="danger" /> Removing Packets
Deleting a packet here only removes it from the Quick Print dashboard; it does **not** delete the profile from your Mikrotik router.

## <Icon name="Printer" color="warning" /> Workflow
1. **Admin** chooses a packet from the dashboard.
2. **MIVO** creates a random username/password account on the Mikrotik.
3. **MIVO** fetches the assigned template and sends it to the browser's print engine.

