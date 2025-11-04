# Image Processing App

This project is an interactive image processing application that allows users to select images, adjust settings, and process them via an API.

#### 📂 Reference Diagram

You can view the original design sketch here:  
[📄 View Diagram](./diagram.md)

---

## Table of Contents

- [Overview](#overview)  
- [Workflow](#workflow)  
- [State Management](#state-management)  
- [Components](#components)  

---

## Overview

The app provides the following features:  

1. **Menu Options** – Users can select between available options to start the process.  
2. **Color Picker** – Allows users to select colors and adjust thresholds.  
3. **API/IRT Integration** – Processes images using backend API endpoints.  
4. **Confirm Button** – Finalizes user selection and triggers image processing.  

---

## Workflow

1. **Menu Selection**  
   - Users select an option from the menu.  
   - A message prompts: `"Choose, give them"`.

2. **Color Picker & Threshold Slider**  
   - Users can pick a color and adjust the threshold using a slider (range `0-[max]`).  
   - Selected state is stored and passed to API for processing.

3. **API/IRT Interaction**  
   - Selected image and settings are sent to `/api/` or `/IRT/` endpoints.  
   - Backend processes the image and returns the processed result.  
   - Relevant messages are displayed to the user during processing.

4. **Confirmation**  
   - Users click the confirm button to finalize selection.  
   - Sends a confirmation message and triggers processing.

---

## State Management

The app maintains several states:  

- **Menu State** – Tracks which menu option is selected.  
- **Color Picker / Threshold State** – Stores color selection and threshold value.  
- **API Processing State** – Keeps track of the selected image and processed image.  
- **Confirmation State** – Handles confirmation messages.

---

## Components

The application is composed of the following components:

- **Footer** – Displays footer content.  
- **Header** – Displays header content.  
- **ImgRender** – Renders the selected image.  
- **ImgCondition** – Manages image processing options such as Dropdown and Color Settings.  
- **ConfirmButton** – Confirms user selection and triggers processing.

---

## Messages

The app uses messages to communicate state changes and user actions:

- `msg("Choose, give them")` – Menu selection prompt  
- `msg(process)` – Indicates that processing has started  
- `confirmMsg` – Confirms the final selection

---

This app is designed for easy extension, allowing new image processing methods, settings, and UI components to be added with minimal changes.