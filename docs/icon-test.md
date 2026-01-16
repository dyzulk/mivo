# Icons Test Page

This page verifies that **Lucide Icons** and **Flag Icons** are correctly integrated.

## Lucide Icons

Using the global `<Icon />` component:

- <Icon name="Search" /> Search (Default)
- <Icon name="Settings" :size="32" stroke-width="3" color="danger" /> Settings (Semantic: danger)
- <Icon name="check-circle" color="success" /> Check Circle (Semantic: success)
- <Icon name="Github" color="primary" /> Github (Semantic: primary)
- <Icon name="Zap" color="warning" /> Zap (Semantic: warning)
- <Icon name="Info" color="info" /> Info (Semantic: info)
- <Icon name="HelpCircle" color="muted" /> Help (Semantic: muted)

## Flag Icons

Using standard `flag-icons` CSS classes:

- <span class="fi fi-id"></span> Indonesia
- <span class="fi fi-us"></span> United States
- <span class="fi fi-gb"></span> Great Britain
- <span class="fi fi-jp"></span> Japan

## Combined Usage

<div style="display: flex; gap: 10px; align-items: center; padding: 10px; background: rgba(0,0,0,0.05); border-radius: 8px;">
  <Icon name="Globe" />
  <span>Selected Language:</span>
  <span class="fi fi-id"></span>
  <strong>Bahasa Indonesia</strong>
</div>
