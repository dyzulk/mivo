# Brand Logos

Logo Management allows you to maintain a gallery of brand assets used for customizing your Mikrotik Hotspot vouchers and the application interface.

## <Icon name="Image" color="primary" /> Purpose

By uploading your business logos here, you can create a professional brand experience for your customers. These logos are centrally stored and can be referenced dynamically in various parts of MIVO.

## <Icon name="UploadCloud" color="success" /> Uploading Process

1.  Navigate to **Settings** > **Logos**.
2.  **Drag & Drop** or click the upload area to select your file.
3.  **Supported Formats**: PNG, JPG, SVG, and GIF are supported. Transparent PNG or SVG is recommended for the best look on vouchers.

## <Icon name="Hash" color="info" /> Logo ID & Copy Feature

Every logo you upload is assigned a unique **Short ID** (e.g., `lg01`, `wifi_logo`).

### <Icon name="Copy" color="primary" /> How to use Copy ID
In the logo gallery, hover over any logo to reveal the **Copy ID** button.
- **Function**: Clicking this button copies the unique ID to your clipboard.
- **Integration**: Use this ID inside the **Voucher Template Editor** (e.g., `&#123;&#123;logo:lg01&#125;&#125;`) to display the specific logo on your printed vouchers.

## <Icon name="Trash2" color="danger" /> Management

You can delete unused logos at any time. 
> [!WARNING]
> Deleting a logo will cause any voucher templates referencing its ID to show a broken image placeholder.

