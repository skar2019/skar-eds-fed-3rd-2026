# EDS Storefront Conversion Strategy

Complete strategy to convert HTML mock to EDS storefront, starting with general site structure.

## 🎯 Conversion Priority Order

### Phase 1: General Site Structure (Foundation)
1. **Header** - Navigation, logo, search, cart
2. **Footer** - Links, social media, copyright
3. **Navigation** - Menu structure and fragments
4. **Hero Banner** - Home page hero section

### Phase 2: Page Components
5. **Teaser Content** - Feature cards
6. **Featured Products** - Product grid
7. **Video Embed** - Video sections
8. **Testimonials** - Customer reviews
9. **Newsletter** - Email subscription

---

## 📋 Phase 1: General Site Structure

### 1. Header Block

#### Current Status
- ✅ **Block exists**: `blocks/header/`
- ✅ **Functionality**: Navigation, auth, cart, search, wishlist
- ⚠️ **Needs**: Style customization to match HTML mock

#### Strategy

**Option A: Customize Existing Header (Recommended)**
1. **Review existing header structure**:
   - Location: `blocks/header/header.js`
   - Styles: `blocks/header/header.css`
   - Uses fragments for navigation: `/nav`

2. **Extract styles from HTML mock**:
   - Copy `.site-header`, `.header-container`, `.logo`, `.main-nav` styles
   - Update `blocks/header/header.css`
   - Maintain existing functionality

3. **Update navigation fragment**:
   - Create/update `/nav` fragment in da.live
   - Structure matches your HTML mock navigation

**Option B: Create Custom Header Block**
- Only if existing header doesn't meet requirements
- Create `blocks/custom-header/`
- Replicate HTML mock structure
- Integrate commerce functionality manually

#### Implementation Steps

1. **Extract CSS from HTML mock**:
   ```css
   /* From html-mock/css/styles.css */
   .site-header { ... }
   .header-container { ... }
   .logo { ... }
   .main-nav { ... }
   ```

2. **Update `blocks/header/header.css`**:
   - Add/merge styles from HTML mock
   - Keep existing commerce functionality styles
   - Test responsive behavior

3. **Create Navigation Fragment**:
   - In da.live, create `/nav` fragment
   - Structure as table:
   ```
   ---
   ```
   | Nav |
   |-----|
   | [Products](/products) |
   | [Categories](/categories) |
   | [About](/about) |
   | [Contact](/contact) |

4. **Test Header**:
   - Verify logo displays
   - Check navigation works
   - Test mobile menu
   - Verify cart/search buttons

---

### 2. Footer Block

#### Current Status
- ✅ **Block exists**: `blocks/footer/`
- ✅ **Functionality**: Loads as fragment, store switcher
- ⚠️ **Needs**: Style customization, content structure

#### Strategy

1. **Review existing footer**:
   - Location: `blocks/footer/footer.js`
   - Loads fragment from `/footer` path
   - Supports multi-store switching

2. **Create Footer Fragment in da.live**:
   - Structure matches HTML mock footer
   - 4 columns: About, Customer Service, Legal, Connect

3. **Extract and apply styles**:
   - Copy `.site-footer`, `.footer-grid`, `.footer-column` styles
   - Update `blocks/footer/footer.css`

#### Implementation Steps

1. **Create Footer Fragment**:
   - In da.live, create `/footer` fragment
   - Structure as table:
   ```
   ---
   ```
   | Footer |
   |--------|
   | About Us |
   | [Our Story](/about) |
   | [Careers](/careers) |
   | Customer Service |
   | [Contact Us](/contact) |
   | [Shipping Info](/shipping) |
   | Legal |
   | [Privacy Policy](/privacy) |
   | [Terms of Service](/terms) |
   | Connect |
   | [Facebook](#) |
   | [Twitter](#) |

2. **Update Footer Styles**:
   - Extract `.site-footer` styles from HTML mock
   - Add to `blocks/footer/footer.css`
   - Maintain responsive grid layout

3. **Test Footer**:
   - Verify all links work
   - Check responsive layout
   - Test social media links

---

### 3. Navigation Structure

#### Current Status
- ✅ **Uses fragments**: Navigation loaded from `/nav` fragment
- ✅ **Header handles**: Navigation rendering and interactions

#### Strategy

1. **Create Navigation Fragment**:
   - Main navigation menu
   - Dropdown menus (if needed)
   - Mobile menu structure

2. **Structure in da.live**:
   - Use fragment blocks
   - Organize by sections
   - Support nested navigation

#### Implementation Steps

1. **Create `/nav` Fragment**:
   ```
   ---
   ```
   | Nav |
   |-----|
   | Products |
   | [All Products](/products) |
   | [Categories](/categories) |
   | Categories |
   | [Category 1](/category-1) |
   | [Category 2](/category-2) |
   | About |
   | [Our Story](/about) |
   | [Contact](/contact) |

2. **Test Navigation**:
   - Desktop hover menus
   - Mobile hamburger menu
   - All links functional

---

### 4. Hero Banner

#### Current Status
- ✅ **Block exists**: `blocks/hero/`
- ✅ **Basic functionality**: Image, text, CTA
- ⚠️ **Needs**: Style customization

#### Strategy

1. **Review existing hero block**:
   - Location: `blocks/hero/hero.js`
   - Styles: Check if CSS exists
   - Structure: Image + text + CTA

2. **Extract HTML mock structure**:
   - Two-column layout (image + text)
   - CTA buttons
   - Responsive design

3. **Customize or create**:
   - Update existing hero block styles
   - Or create `hero-banner` block if needed

#### Implementation Steps

1. **Check Hero Block Structure**:
   - Review `blocks/hero/hero.js`
   - Check `blocks/hero/_hero.json` for da.live config

2. **Extract Styles**:
   - Copy `.hero-banner`, `.hero-content`, `.hero-text` styles
   - Add to hero block CSS

3. **Create Hero Content in da.live**:
   ```
   ---
   ```
   | Hero |
   |-----|
   | ![hero-banner.svg](images/hero-banner.svg) |
   | Welcome to Our Store |
   | Discover amazing products at unbeatable prices |
   | [Shop Now](/products) |
   | [Learn More](/about) |

4. **Test Hero**:
   - Image displays correctly
   - Text and CTAs visible
   - Responsive on mobile

---

## 📋 Phase 2: Page Components

### 5. Teaser Content (Feature Cards)

#### Strategy
- ✅ **Use existing**: `blocks/cards/` block
- Extract styles from HTML mock
- Structure content as cards table

#### Implementation
1. Extract `.teaser-content`, `.teaser-card` styles
2. Update `blocks/cards/cards.css` if needed
3. Create content in da.live using Cards block

---

### 6. Featured Products

#### Strategy
- ✅ **Use existing**: `blocks/product-list-page/` or `blocks/product-recommendations/`
- Or create `blocks/featured-products/` for custom layout

#### Implementation
1. Use product-list-page block
2. Configure with product SKUs
3. Customize styles if needed

---

### 7. Video Embed

#### Strategy
- ✅ **Use existing**: `blocks/video/` or `blocks/embed/`
- Extract video styles
- Structure content with video URL

#### Implementation
1. Use existing video block
2. Add video URL in da.live
3. Customize styles if needed

---

### 8. Testimonials

#### Strategy
- ⚠️ **Create new**: `blocks/testimonials/`
- Extract HTML structure
- Create block files

#### Implementation
1. Create `blocks/testimonials/` directory
2. Create JS, CSS, JSON files
3. Structure as cards with ratings

---

### 9. Newsletter

#### Strategy
- ⚠️ **Create new**: `blocks/newsletter/`
- Extract form structure
- Add form handling

#### Implementation
1. Create `blocks/newsletter/` directory
2. Create JS, CSS, JSON files
3. Add form submission handling

---

## 🎨 Style Customization Strategy

### Global Styles

1. **CSS Variables**:
   - Extract from HTML mock: `:root` variables
   - Update EDS theme variables
   - Location: `styles/styles.css` or theme files

2. **Typography**:
   - Font families
   - Font sizes
   - Line heights

3. **Colors**:
   - Primary, secondary, accent colors
   - Text colors
   - Background colors

4. **Spacing**:
   - Spacing scale
   - Container widths
   - Section padding

### Block-Specific Styles

For each block:
1. Extract relevant CSS from HTML mock
2. Add to block's CSS file
3. Use CSS variables where possible
4. Maintain responsive design

---

## 📁 File Organization

### Structure After Conversion

```
blocks/
├── header/              ✅ Exists - Customize
│   ├── header.js
│   ├── header.css       ← Add HTML mock styles
│   └── ...
├── footer/              ✅ Exists - Customize
│   ├── footer.js
│   ├── footer.css       ← Add HTML mock styles
│   └── ...
├── hero/                ✅ Exists - Customize
│   ├── hero.js
│   ├── hero.css         ← Add HTML mock styles
│   └── _hero.json
├── cards/               ✅ Exists - Use as-is or customize
├── video/               ✅ Exists - Use as-is
├── testimonials/        ⚠️ Create new
│   ├── testimonials.js
│   ├── testimonials.css
│   └── _testimonials.json
└── newsletter/          ⚠️ Create new
    ├── newsletter.js
    ├── newsletter.css
    └── _newsletter.json
```

---

## 🚀 Step-by-Step Implementation Plan

### Week 1: Foundation (General Site Structure)

**Day 1-2: Header**
- [ ] Review existing header block
- [ ] Extract styles from HTML mock
- [ ] Update `blocks/header/header.css`
- [ ] Create navigation fragment in da.live
- [ ] Test header functionality

**Day 3: Footer**
- [ ] Review existing footer block
- [ ] Extract styles from HTML mock
- [ ] Update `blocks/footer/footer.css`
- [ ] Create footer fragment in da.live
- [ ] Test footer display

**Day 4: Navigation**
- [ ] Create navigation fragment
- [ ] Structure menu items
- [ ] Test desktop and mobile navigation
- [ ] Verify all links

**Day 5: Hero Banner**
- [ ] Review existing hero block
- [ ] Extract styles from HTML mock
- [ ] Update hero block CSS
- [ ] Create hero content in da.live
- [ ] Test hero display

### Week 2: Page Components

**Day 6-7: Teaser Content**
- [ ] Use cards block
- [ ] Customize styles if needed
- [ ] Create content in da.live

**Day 8: Featured Products**
- [ ] Use product-list-page block
- [ ] Configure products
- [ ] Test display

**Day 9: Video Embed**
- [ ] Use video block
- [ ] Add video content
- [ ] Test embedding

**Day 10: Testimonials**
- [ ] Create testimonials block
- [ ] Add styles
- [ ] Create content

**Day 11: Newsletter**
- [ ] Create newsletter block
- [ ] Add form handling
- [ ] Create content

**Day 12: Testing & Refinement**
- [ ] Test all components
- [ ] Fix any issues
- [ ] Responsive testing
- [ ] Cross-browser testing

---

## 🔧 Technical Considerations

### 1. Fragment Management
- Header and Footer use fragments
- Create fragments in da.live
- Maintain consistent structure

### 2. Commerce Integration
- Header has cart, wishlist, auth
- Don't break existing functionality
- Test all commerce features

### 3. Responsive Design
- Mobile-first approach
- Test on multiple devices
- Ensure all components responsive

### 4. Performance
- Optimize images
- Lazy load where appropriate
- Minimize CSS/JS

### 5. Accessibility
- Maintain ARIA labels
- Keyboard navigation
- Screen reader support

---

## ✅ Quality Checklist

### For Each Component:

- [ ] HTML structure matches design
- [ ] Styles match HTML mock
- [ ] Responsive on mobile/tablet/desktop
- [ ] All links functional
- [ ] Images load correctly
- [ ] JavaScript works
- [ ] Accessibility maintained
- [ ] Commerce features work
- [ ] Tested in multiple browsers
- [ ] Performance optimized

---

## 📝 Notes

1. **Start with Header/Footer**: These are global and affect all pages
2. **Use Existing Blocks**: Don't recreate what already exists
3. **Maintain Functionality**: Don't break commerce features
4. **Test Incrementally**: Test each component before moving to next
5. **Document Changes**: Keep notes on what was customized

---

## 🎯 Success Criteria

- ✅ Header matches HTML mock design
- ✅ Footer matches HTML mock design
- ✅ Navigation works on all devices
- ✅ Hero banner displays correctly
- ✅ All page components functional
- ✅ Styles consistent across site
- ✅ Commerce features intact
- ✅ Responsive design works
- ✅ Performance acceptable
- ✅ Accessibility maintained

---

## 📚 Resources

- Existing blocks: `/blocks/` directory
- HTML mock: `/html-mock/` directory
- Styles: `/html-mock/css/styles.css`
- EDS Documentation: https://www.aem.live/docs

---

**Next Steps**: Start with Phase 1, Day 1 - Header customization.
