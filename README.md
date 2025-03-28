# Frontend Demo

## Instructions

1. Duplicate the Figma file so that you have editing permission.
2. Develop the design in a technology of your own choice. Static HTML is ok too.
3. Spend **8 hours** and see how far you can go. Not completing the full design is fine.
4. Please pay close attention to the design details and responsiveness of the page.
5. Any questions, please ask.

---

## Progress After One Workday (~8 hours, maybe a bit more 🤏)

After the first **5 commits**, the following features were completed:

✅ Technology stack chosen: React + Vite (lighter than Next.js) + Tailwind CSS.  
✅ Mobile layout implemented.  
✅ Navigation between sections.

<!-- prettier-ignore -->
|Hero Section|Sections|Form Section|Navigation|
|-|-|-|-|
|![hero](https://github.com/user-attachments/assets/6decc0f3-abe0-4a6a-9f08-93dc08e341f5)|![sections](https://github.com/user-attachments/assets/3d0daf30-fff1-41e5-bee1-d319634e1dc6)|![form](https://github.com/user-attachments/assets/9f37f7f8-e7d9-46a7-8f50-dd143a54bc66)|![navigation](https://github.com/user-attachments/assets/181fea0a-f631-4841-af58-0bc106513195)|

### Design Details

- **Sticky navigation bar**:
  - When hovering over a nav item or when the corresponding section is in view, the nav item gets a dashed underline with a smooth transition effect.
- **Typography & colors**:
  - Matched to the design specifications as closely as possible.
- **Meta tags, OG tags, and favicon**:
  - Set up for SEO and social media sharing.

### Development Details

- **ESLint & Prettier**:
  - Configured with the Tailwind CSS plugin for automatic class sorting.
- **Deployment**:
  - Hosted on GitHub Pages to showcase the result.

### Challenges Faced

- **Navigation bar layout issue**:
  - The rightmost nav item’s right margin disappeared unexpectedly.
  - Temporarily marked with a `FIXME:` comment to focus on overall layout first.
- **Dashed underline activation for nav items**:
  - Set `threshold: 0.6`, so the underline appears once 60% of the section is visible in the viewport.
  - Issue with the “Our Brands” section – Since this section is very long, it never fully triggers the condition, requiring further adjustments.
- **Customizing the file upload input**:
  - Currently using the default file input, which needs to be customized to match the design.
  - Use a visually hidden `<input type="file">` and replace it with a custom-styled button.

---

## Next Steps

🔹 Desktop layout implementation using Tailwind’s `lg:flex-row`, etc.  
🔹 Brochure flip effect – Planning to explore GSAP and Framer Motion, since I haven’t used them before.  
🔹 Refining visual details – Fix layout issues, enhance interactions (e.g., hover effects on buttons).
