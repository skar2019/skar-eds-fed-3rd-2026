# Quick Start: HTML to EDS Conversion

## 🎯 Immediate Action Plan

### Step 1: Header Customization (Start Here)

**Files to Modify:**
- `blocks/header/header.css` - Add styles from HTML mock
- Create `/nav` fragment in da.live

**CSS to Extract:**
```css
/* From html-mock/css/styles.css lines 30-60 */
.site-header { ... }
.header-container { ... }
.logo { ... }
.main-nav { ... }
```

**Action:**
1. Open `html-mock/css/styles.css`
2. Copy header-related styles
3. Add to `blocks/header/header.css`
4. Test locally with `npm start`

---

### Step 2: Footer Customization

**Files to Modify:**
- `blocks/footer/footer.css` - Add styles from HTML mock
- Create `/footer` fragment in da.live

**CSS to Extract:**
```css
/* From html-mock/css/styles.css - footer section */
.site-footer { ... }
.footer-grid { ... }
.footer-column { ... }
```

**Action:**
1. Copy footer styles from HTML mock
2. Add to `blocks/footer/footer.css`
3. Create footer fragment in da.live
4. Test display

---

### Step 3: Hero Banner

**Files to Modify:**
- `blocks/hero/hero.css` (if exists) or create it
- Or create `blocks/hero-banner/` if needed

**CSS to Extract:**
```css
/* From html-mock/css/styles.css */
.hero-banner { ... }
.hero-content { ... }
.hero-text { ... }
```

**Action:**
1. Check if `blocks/hero/hero.css` exists
2. Add hero styles
3. Create hero content in da.live
4. Test display

---

## 📋 Component Mapping Quick Reference

| HTML Mock Component | EDS Block | Action |
|---------------------|-----------|--------|
| Header | `blocks/header/` | ✅ Customize CSS |
| Footer | `blocks/footer/` | ✅ Customize CSS |
| Navigation | Fragment `/nav` | ✅ Create fragment |
| Hero Banner | `blocks/hero/` | ✅ Customize CSS |
| Teaser Cards | `blocks/cards/` | ✅ Use as-is |
| Products | `blocks/product-list-page/` | ✅ Use as-is |
| Video | `blocks/video/` | ✅ Use as-is |
| Testimonials | Create new | ⚠️ Create block |
| Newsletter | Create new | ⚠️ Create block |

---

## 🚀 First 3 Steps (Do These Now)

### 1. Customize Header (30 minutes)
```bash
# 1. Open header CSS
code blocks/header/header.css

# 2. Copy styles from HTML mock
# From: html-mock/css/styles.css (header section)

# 3. Test
npm start
```

### 2. Customize Footer (30 minutes)
```bash
# 1. Open footer CSS
code blocks/footer/footer.css

# 2. Copy styles from HTML mock
# From: html-mock/css/styles.css (footer section)

# 3. Create footer fragment in da.live
```

### 3. Customize Hero (20 minutes)
```bash
# 1. Check hero block
ls blocks/hero/

# 2. Add CSS if needed
# 3. Create hero content in da.live
```

---

## 📁 Key Files Reference

### HTML Mock (Source)
- `html-mock/index.html` - HTML structure
- `html-mock/css/styles.css` - All styles
- `html-mock/js/main.js` - JavaScript

### EDS Blocks (Target)
- `blocks/header/` - Header block
- `blocks/footer/` - Footer block
- `blocks/hero/` - Hero block
- `blocks/cards/` - Cards block
- `blocks/video/` - Video block

---

## ✅ Today's Checklist

- [ ] Review `EDS_CONVERSION_STRATEGY.md`
- [ ] Customize header styles
- [ ] Customize footer styles
- [ ] Test header and footer locally
- [ ] Create navigation fragment in da.live
- [ ] Create footer fragment in da.live

---

## 🎨 Style Extraction Guide

### How to Extract Styles

1. **Open HTML mock CSS**: `html-mock/css/styles.css`
2. **Find component section**: Search for component class name
3. **Copy relevant styles**: Copy all related CSS rules
4. **Add to block CSS**: Paste into appropriate block CSS file
5. **Test**: Run `npm start` and verify

### Example: Header Styles

**From HTML mock:**
```css
.site-header { ... }
.header-container { ... }
.logo { ... }
.main-nav { ... }
```

**Add to:**
```css
/* blocks/header/header.css */
/* Add styles here, maintaining existing functionality */
```

---

## 🔍 Testing Checklist

After each customization:

- [ ] Component displays correctly
- [ ] Styles match HTML mock
- [ ] Responsive on mobile
- [ ] All links work
- [ ] Commerce features work (cart, auth, etc.)
- [ ] No console errors

---

**Ready to start? Begin with Step 1: Header Customization!**
