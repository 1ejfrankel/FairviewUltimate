# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static HTML website for the Fairview High School Ultimate Frisbee team. The site is hosted on GitHub Pages and features team information, schedules, registration, and team rosters. The site uses a modular architecture with shared components (January 2026 refactor).

## Important Constraints

**CRITICAL: Do not interact with git ever. All changes should stay local.**

## Site Architecture

The website uses a **modular component system** to avoid code duplication:
- **`styles.css`** - Shared styles for all pages
- **`components.js`** - Dynamic navigation component
- **HTML pages** - Link to shared resources, contain only page-specific content

### Current Pages (13 total)

1. **index.html** - Home page (merged from old Home, About, and Our Program pages)
2. **registration.html** - Player registration and payment info
3. **schedule.html** - Team schedule and events
4. **spaghetti-western.html** - Tournament information
5. **teams.html** - Teams overview
6. **team-spring-girl-matching.html** - Spring girl-matching team
7. **team-spring-a.html** - Spring A team
8. **team-spring-b.html** - Spring B team
9. **team-fall-a.html** - Fall A team
10. **team-fall-b.html** - Fall B team
11. **team-fall-open.html** - Fall open team
12. **alumni.html** - Alumni page (currently commented out in nav)
13. **shop.html** - Team shop (currently commented out in nav)

### Navigation Structure

Navigation is dynamically loaded via `components.js`. Current active navigation:
- Home (index.html)
- Registration (registration.html)
- Schedule (schedule.html)
- Spaghetti Western (spaghetti-western.html)
- Teams (commented out dropdown - team pages still accessible directly)

**Note:** Alumni and Shop links are currently commented out in the navigation.

### File Organization

```
/
├── index.html              (Main home page with image carousel)
├── registration.html       (Registration page)
├── schedule.html          (Schedule page)
├── teams.html             (Teams overview)
├── team-*.html           (Individual team pages)
├── spaghetti-western.html (Tournament page)
├── alumni.html            (Alumni page - nav disabled)
├── shop.html              (Shop page - nav disabled)
├── styles.css             (Shared styles)
├── components.js          (Navigation component)
├── images/                (Image assets)
│   ├── fairview-logo.png  (School logo)
│   └── showcase/          (Team photos for carousel - ADD IMAGES HERE!)
│       ├── IMG_3637.jpeg
│       ├── IMG_1345.JPG
│       ├── IMG_7607.JPG
│       └── unnamed*.jpg
└── CLAUDE.md              (This file)
```

## Design System

**Color Scheme:**
- Primary gradient: `linear-gradient(135deg, #b91c1c 0%, #7f1d1d 100%)` (red theme for Fairview)
- Accent color: `#b91c1c` (red-700)
- Background: White with light red accents (`#fef2f2`)

**Common Components (in styles.css):**
- `.navbar` - Sticky navigation with responsive mobile menu
- `.hero` - Header section with gradient background and school logo
- `.section` - Content container with rounded corners and shadow
- `.cta-button` - Call-to-action buttons with hover effects
- `.info-box` - Highlighted information sections with left border
- `.photo-grid` - Responsive grid for team photos
- `.gallery-section` - Photo gallery section styling

**Responsive Design:**
- Mobile breakpoint at 1100px for navigation
- Mobile breakpoint at 768px for general layout
- Navigation collapses to hamburger menu on mobile
- Photo grids adapt to single column on mobile

## Key Information

### Contact Information
- **Instagram:** @fhs.ultimate (displayed in footer)
- **Photo Gallery:** https://photos.app.goo.gl/AcaGH2Swn3HFgaC19

### Program Details
- **Fall Season:** Mixed teams, practices Mon/Tue/Thu 4:15-6:30 PM at Summit Middle School
- **Spring Season:** Separate open (boys) and women's (girls) teams
- **Philosophy:** Welcomes players of all skill levels and genders

### Partner Organizations
- USA Ultimate (usaultimate.org)
- Altitude Youth Ultimate (altitudeyouthultimate.org)
- Grass Roots Ultimate (grassrootsultimate.com)

## Making Changes

### Adding Images

#### Logo and General Images
Place general site images in the `/images/` folder and reference them as `images/filename.ext`.

#### Team Photos for Home Page Carousel

**All team showcase photos must be placed in `/images/showcase/` folder.**

To add new photos to the home page carousel:

1. **Add the image file** to `/images/showcase/` folder
2. **Edit `index.html`** and find the `showcaseImages` array (around line 240)
3. **Add the filename** to the array:

```javascript
const showcaseImages = [
    'IMG_3637.jpeg',
    'IMG_1345.JPG',
    'IMG_7607.JPG',
    'unnamed.jpg',
    'unnamed1.jpg',
    'unnamed2.jpg',
    'unnamed3.jpg',
    'unnamed4.jpg',
    'unnamed5.jpg',
    'your-new-photo.jpg'  // <- Add your new image here!
];
```

That's it! The carousel will automatically include the new image.

**Carousel Features:**
- Auto-scrolls every 5 seconds
- Click arrows to navigate
- Click dots to jump to specific photo
- Touch/swipe support on mobile
- Shows one photo at a time for clean presentation

### Updating Navigation

Navigation is defined in `components.js`. To modify:

1. Edit the `loadNavigation()` function in `components.js`
2. Changes automatically apply to all pages
3. Uncomment lines to re-enable Alumni/Shop links
4. Add new menu items in the `<ul class="nav-links">` section

**To re-enable commented out menu items:**
Remove the `<!--` and `-->` comments around the lines in `components.js`.

### Adding New Pages

1. Create a new HTML file in the root directory
2. Use this template structure:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Fairview Ultimate</title>
    <link rel="stylesheet" href="styles.css">
    <!-- Add page-specific CSS in a <style> block if needed -->
</head>
<body>
    <div id="navigation-placeholder"></div>

    <!-- Your page content here -->

    <div class="footer">
        <!-- Standard footer content -->
    </div>

    <script src="components.js"></script>
</body>
</html>
```

3. Add a link to the new page in `components.js` navigation

### Modifying Home Page Content

The home page (`index.html`) has a natural flow structure:
1. **Welcome Section** - Program overview and philosophy
2. **Our Team in Action** - Scrollable image carousel with navigation
3. **About Ultimate Frisbee** - Sport explanation and core values
4. **Our Program** - Fall/Spring season details with practice info
5. **Program Resources** - Links to USA Ultimate, Altitude Youth Ultimate, Grass Roots Ultimate
6. **Ready to Join CTA** - Registration call-to-action

**Important notes:**
- No coaching staff section (removed per user request)
- No program director contact (outdated information removed)
- Instagram only appears in footer (not duplicated in content)
- Image carousel automatically includes all photos from the array

### Image Carousel Details

The home page features a professional image carousel:
- **Auto-scrolling**: Changes photos every 5 seconds
- **Manual navigation**: Arrow buttons on sides
- **Direct navigation**: Click dots below to jump to specific photo
- **Mobile support**: Touch/swipe gestures
- **Responsive**: 500px height on desktop, 350px on mobile

To add images, see "Adding Images" section above.

### Working with Styles

- **Common styles:** Edit `styles.css` (affects all pages)
- **Page-specific styles:** Add `<style>` block in the HTML file's `<head>` section
- **Maintain consistent color scheme** using the red theme variables

### Testing Locally

Test the site using a local HTTP server:
```bash
python3 -m http.server 8000
# or
python -m http.server 8000
```

Then visit: `http://localhost:8000`

**Important:** Test navigation and image loading after any changes to `components.js` or image paths.

## Common Patterns

### Mobile Menu Toggle

The mobile menu is handled by `components.js`:
```javascript
function toggleMenu() {
    document.getElementById('navLinks').classList.toggle('active');
}
```

### Dropdown Menus (Currently Disabled)

The Teams dropdown code exists but is commented out. To re-enable:
1. Uncomment the dropdown HTML in `components.js`
2. The mobile dropdown handler is already in place

### Image References

All images must use the `/images/` prefix:
- ✅ Correct: `<img src="images/logo.png">`
- ❌ Wrong: `<img src="logo.png">`
- ❌ Wrong: `<img src="/images/logo.png">` (leading slash breaks GitHub Pages)

## Recent Changes (January 2026)

### Major Refactoring
- Extracted common CSS to `styles.css` (~500 lines per page eliminated)
- Created dynamic navigation in `components.js`
- Reduced from 15 pages to 13 pages
- Eliminated ~8,000 lines of duplicated code

### Home Page Reorganization (January 2026)
- Merged About and Our Program into Home page
- Removed coaching staff section from main page
- Removed outdated program director contact information
- Removed duplicate Instagram link from middle of page (kept in footer only)
- Moved team photos to top (below welcome message)
- **Implemented scrollable image carousel** with auto-scroll, navigation arrows, and touch support
- Created `/images/showcase/` subfolder system for carousel images
- Reordered content for natural flow: Welcome → Photos → About Sport → Program Details → Resources → CTA
- Added program information from Google Site (schedules, practice times, locations)
- Added resource links (USA Ultimate, Altitude Youth Ultimate, Grass Roots Ultimate)
- Moved "Ready to Join" CTA to end of page for better conversion flow

### Images Folder
- Created `/images/` directory for all assets
- Moved `fairview-logo.png` and `IMG_3637.jpeg` to images folder
- Updated all image references throughout site

### Navigation Simplification
- Removed "About" and "Our Program" links (content now on Home)
- Temporarily disabled Teams dropdown (commented out)
- Temporarily disabled Alumni and Shop links (commented out)
- Current active nav: Home, Registration, Schedule, Spaghetti Western

## Future Considerations

- Add coaching staff to a dedicated page if needed
- Re-enable Teams dropdown when team pages are updated
- Re-enable Alumni and Shop pages when content is ready
- Consider adding more team photos to `/images/` folder
- Update program achievements section with actual accomplishments
