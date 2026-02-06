# HTML to EDS Block Conversion Guide

This guide shows how to convert each component from the HTML mock to EDS blocks.

## Component Mapping

| HTML Component | EDS Block | Status |
|----------------|-----------|--------|
| Header | `header` | ✅ Exists |
| Hero Banner | `hero` or `hero-banner` | ✅ Exists / Create |
| Teaser Content | `cards` | ✅ Exists |
| Featured Products | `product-list-page` | ✅ Exists |
| Video Embed | `video` or `embed` | ✅ Exists |
| Testimonials | Create `testimonials` | ⚠️ New |
| Newsletter | Create `newsletter` | ⚠️ New |
| Footer | `footer` | ✅ Exists |

---

## 1. Hero Banner

### HTML Structure
```html
<section class="hero-banner">
  <div class="hero-content">
    <div class="hero-image">
      <img src="images/hero-banner.jpg" alt="Hero Banner">
    </div>
    <div class="hero-text">
      <h1>Welcome to Our Store</h1>
      <p class="hero-subtitle">Discover amazing products...</p>
      <div class="hero-cta">
        <a href="/products" class="btn btn-primary">Shop Now</a>
        <a href="/about" class="btn btn-secondary">Learn More</a>
      </div>
    </div>
  </div>
</section>
```

### da.live Table Format
```
---
```

| Hero-Banner |
|-------------|
| ![hero-banner.jpg](images/hero-banner.jpg) |
| Welcome to Our Store |
| Discover amazing products at unbeatable prices |
| [Shop Now](/products) |
| [Learn More](/about) |

### Block Files Needed
- Check if `blocks/hero/` exists (it does)
- If custom styling needed, create `blocks/hero-banner/`
- Copy CSS from `html-mock/css/styles.css` (lines for `.hero-banner`)

---

## 2. Teaser Content

### HTML Structure
```html
<section class="teaser-content">
  <h2>Why Choose Us</h2>
  <div class="teaser-grid">
    <div class="teaser-card">
      <div class="teaser-icon">🚚</div>
      <h3>Free Shipping</h3>
      <p>Free shipping on orders over $50...</p>
    </div>
    <!-- 3 more cards -->
  </div>
</section>
```

### da.live Table Format
```
---
```

| Cards |
|-------|
| 🚚 |
| Free Shipping |
| Free shipping on orders over $50. Fast and reliable delivery. |
| 🔒 |
| Secure Payment |
| Your payment information is encrypted and secure. |
| ↩️ |
| Easy Returns |
| 30-day return policy. Not satisfied? Return it hassle-free. |
| ⭐ |
| Quality Guaranteed |
| We stand behind our products with quality assurance. |

### Block Files
- Use existing `blocks/cards/` block
- Update CSS if needed

---

## 3. Featured Products

### HTML Structure
```html
<section class="featured-products">
  <h2>Featured Products</h2>
  <div class="products-grid">
    <div class="product-card">
      <div class="product-image">
        <img src="images/product-1.jpg" alt="Product 1">
        <div class="product-badge">New</div>
      </div>
      <div class="product-info">
        <h3>Premium Product</h3>
        <p class="product-price">$99.99</p>
        <button class="btn btn-add-cart">Add to Cart</button>
      </div>
    </div>
    <!-- More products -->
  </div>
</section>
```

### da.live Table Format
**Option 1: Use Product List Page Block**
- Use existing `product-list-page` block
- Configure in da.live with product SKUs

**Option 2: Create Featured Products Block**
```
---
```

| Featured-Products |
|------------------|
| ![product-1.jpg](images/product-1.jpg) |
| New |
| Premium Product |
| $99.99 |
| [Add to Cart](#) |

### Block Files
- Use `blocks/product-list-page/` or create `blocks/featured-products/`

---

## 4. Video Embed

### HTML Structure
```html
<section class="video-embed">
  <h2>See Us in Action</h2>
  <div class="video-wrapper">
    <div class="video-container">
      <iframe src="https://www.youtube.com/embed/VIDEO_ID"></iframe>
    </div>
    <div class="video-content">
      <h3>Watch Our Story</h3>
      <p>Learn more about our mission...</p>
    </div>
  </div>
</section>
```

### da.live Table Format
```
---
```

| Video |
|-------|
| https://www.youtube.com/embed/VIDEO_ID |
| Watch Our Story |
| Learn more about our mission, values, and commitment... |

### Block Files
- Use existing `blocks/video/` or `blocks/embed/`

---

## 5. Testimonials (New Block)

### HTML Structure
```html
<section class="testimonials">
  <h2>What Our Customers Say</h2>
  <div class="testimonials-grid">
    <div class="testimonial-card">
      <div class="testimonial-rating">⭐⭐⭐⭐⭐</div>
      <p>"Amazing quality and fast shipping!"</p>
      <div class="testimonial-author">
        <div class="author-avatar">JD</div>
        <div>
          <p class="author-name">John Doe</p>
          <p class="author-title">Verified Customer</p>
        </div>
      </div>
    </div>
    <!-- More testimonials -->
  </div>
</section>
```

### da.live Table Format
```
---
```

| Testimonials |
|--------------|
| ⭐⭐⭐⭐⭐ |
| "Amazing quality and fast shipping! Highly recommend this store." |
| JD |
| John Doe |
| Verified Customer |
| ⭐⭐⭐⭐⭐ |
| "Best shopping experience I've had online. Great products!" |
| JS |
| Jane Smith |
| Verified Customer |

### Block Files to Create
- `blocks/testimonials/testimonials.js`
- `blocks/testimonials/testimonials.css`
- `blocks/testimonials/_testimonials.json` (optional)

---

## 6. Newsletter (New Block)

### HTML Structure
```html
<section class="newsletter">
  <div class="newsletter-content">
    <h2>Stay Updated</h2>
    <p>Subscribe to our newsletter...</p>
    <form class="newsletter-form">
      <input type="email" placeholder="Enter your email">
      <button type="submit">Subscribe</button>
    </form>
  </div>
</section>
```

### da.live Table Format
```
---
```

| Newsletter |
|-----------|
| Stay Updated |
| Subscribe to our newsletter and get exclusive deals |
| Enter your email |

### Block Files to Create
- `blocks/newsletter/newsletter.js`
- `blocks/newsletter/newsletter.css`
- `blocks/newsletter/_newsletter.json` (optional)

---

## Conversion Checklist

### For Each Component:

- [ ] **Analyze HTML structure**
- [ ] **Identify CSS classes and styles**
- [ ] **Check if block exists** (use existing if possible)
- [ ] **Create block directory** (if new block needed)
- [ ] **Create block JavaScript** (`decorate()` function)
- [ ] **Extract and add CSS** to block CSS file
- [ ] **Create da.live JSON config** (optional)
- [ ] **Convert HTML to table format**
- [ ] **Test locally** with `npm start`
- [ ] **Add to da.live** content
- [ ] **Publish and verify**

---

## Quick Start Conversion

1. **Start with Hero Banner** (easiest, block exists)
2. **Convert Teaser Content** (use cards block)
3. **Add Video Embed** (use video block)
4. **Create Testimonials Block** (new, but simple)
5. **Create Newsletter Block** (new, form handling)
6. **Handle Featured Products** (use product-list-page or create custom)

---

## CSS Extraction

All component styles are in `html-mock/css/styles.css`. Extract relevant sections:

- `.hero-banner` → Hero block CSS
- `.teaser-content`, `.teaser-card` → Cards/Teaser block CSS
- `.featured-products`, `.product-card` → Product block CSS
- `.video-embed` → Video block CSS
- `.testimonials`, `.testimonial-card` → Testimonials block CSS
- `.newsletter` → Newsletter block CSS

---

## JavaScript Functionality

JavaScript in `html-mock/js/main.js` includes:

- Newsletter form handling
- Add to cart button interactions
- Smooth scrolling
- Lazy loading
- Scroll effects

Convert these to block-specific JavaScript in each block's `.js` file.

---

## Next Steps

1. Open `html-mock/index.html` in browser to preview
2. Choose first component to convert
3. Follow the conversion steps above
4. Test each block before moving to next
5. Build incrementally
