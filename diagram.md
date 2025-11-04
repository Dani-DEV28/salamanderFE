# Image Processing UI - Component Structure and Flow

This document describes the design for an image processing user interface, based on the provided system sketch.  
It includes components, state flow, and message handling between UI elements and backend API interactions.

---

## Directory Path

```text
User
 └── Component
      ├── Footer
      ├── Header
      ├── ImgRender
      ├── ImgCondition
      │    ├── DropDown
      │    └── ColorSetting
      └── ConfirmButton
```

## 🧩 Components Overview

The UI consists of the following components:

- **Header**  
  Displays the title or main heading of the application.

- **Footer**  
  Provides footer text or links.

- **ImgRender**  
  Renders the selected or processed image.

- **ImgCondition**  
  Handles user inputs related to image modification:
  - Dropdown (selection input)
  - Color settings (color picker and threshold slider)

- **ConfirmButton**  
  Triggers the confirmation or submission action.

---

## ⚙️ Data & State Flow

```text
┌──────────────────────────────────────┐
│ User Interaction                     │
│ ├─ Dropdown (Option 1, Option 2, …)  │
│ ├─ Color Picker + Threshold Slider    │
│ └─ Confirm Button                     │
└──────────────────────────────────────┘
               │
               ▼
     [ State Updates: selection, color, threshold ]
               │
               ▼
┌──────────────────────────────────────┐
│ API / Runtime Handler                │
│ - Processes image input              │
│ - Sends/Receives messages (Msg)      │
│   e.g. "Choose file", "Processing...",│
│        "Image uploaded", etc.         │
└──────────────────────────────────────┘
               │
               ▼
         [ ImgRender Updates ]
               │
               ▼
┌──────────────────────────────────────┐
│ Confirmation Flow                    │
│ - confirmMsg.set()                   │
│ - Updates UI message state           │
└──────────────────────────────────────┘
