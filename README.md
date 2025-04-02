# Frontend Demo

## Instructions

1. Duplicate the Figma file so that you have editing permission.
2. Develop the design in a technology of your own choice. Static HTML is ok too.
3. Spend **8 hours** and see how far you can go. Not completing the full design is fine.
4. Please pay close attention to the design details and responsiveness of the page.
5. Any questions, please ask.

---

## Progress Update

#### After One Workday (~8 hours, maybe a bit more 🤏)

After the first **5 commits**, the following features were completed:

✅ Technology stack chosen – React + Vite (lighter than Next.js) + Tailwind CSS.  
✅ Mobile layout implemented.  
✅ Navigation between sections.

#### After Another Workday

✅ Desktop layout completed – Adjusted styles and layout for larger screens.  
✅ Basic brochure flip effect – Implemented using plain CSS.  
✅ Added default transitions, including smooth hover effects on buttons.

<!-- prettier-ignore -->
|Hero Section|Sections|Form Section|Navigation|
|-|-|-|-|
|![hero](https://github.com/user-attachments/assets/6decc0f3-abe0-4a6a-9f08-93dc08e341f5)|![sections](https://github.com/user-attachments/assets/3d0daf30-fff1-41e5-bee1-d319634e1dc6)|![form](https://github.com/user-attachments/assets/9f37f7f8-e7d9-46a7-8f50-dd143a54bc66)|![navigation](https://github.com/user-attachments/assets/181fea0a-f631-4841-af58-0bc106513195)|

<!-- prettier-ignore -->
|Desktop Layout|Circular Section|
|-|-|
|![](https://github.com/user-attachments/assets/4773ef39-9710-49bc-9d2d-ef70d8a74bf3)|![](https://github.com/user-attachments/assets/661e9040-ab22-4079-842a-6c2594fb9eb4)|

### Design Details

- **Responsive layouts**
  - Implemented both mobile and desktop layouts to match the design specifications.
- **Sticky navigation bar**
  - When hovering over a nav item or when the corresponding section is in view, the nav item gets a dashed underline with a smooth transition effect.
- **Visual fidelity**
  - Typography and colors are closely aligned with the original design.
  - Added hover effects on buttons and a basic flip animation for interactive elements.
- **Meta tags, OG tags, and favicon**
  - Set up for SEO and social media sharing.

### Development Details

- **ESLint & Prettier**
  - Configured with the Tailwind CSS plugin for automatic class sorting.
- **Deployment**
  - Hosted on GitHub Pages to showcase the result.

### Challenges Faced

- **Navigation bar layout issue**
  - The rightmost nav item’s right margin disappeared unexpectedly.
  - Current workaround – Applied padding to `:first-child` and `:last-child`, but still exploring better solutions.
- **Dashed underline activation for nav items**
  - Set `threshold: 0.6`, so the underline appears once 60% of the section is visible in the viewport.
  - Issue with the “Our Brands” section – Since this section is very long, it never fully triggers the condition, requiring further adjustments.

---

## Next Steps

🔹 Enhancing the brochure flip effect – Currently using plain CSS; planning to explore GSAP and Framer Motion, as I haven’t worked with them before.  
🔹 Customizing the file upload input – Replacing the default file input with a visually hidden `<input type="file">` and a custom-styled button for a better UX.  
🔹 Refining visual details – Fixing layout inconsistencies and enhancing interactions for a polished finish.
