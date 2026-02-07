# Newsletter Block

## Overview

The Newsletter block displays an email subscription form for users to subscribe to the newsletter. It features a gradient background and a centered form layout.

## Integration

### Block Configuration

This block does not require any configuration parameters. Content is defined directly in the block structure.

### Block Structure

The block can be structured in two ways:

**Option 1: Using a form directly**
```
| Newsletter |
|------------|
| Stay Updated |
| Subscribe to our newsletter and get exclusive deals |
| Enter your email |
```

**Option 2: Using structured content**
```
| Newsletter |
|------------|
| Stay Updated |
| Subscribe to our newsletter and get exclusive deals |
```

The block will automatically create the form if it doesn't exist.

### Content Structure

- **First row**: Heading (h2) - Newsletter title
- **Second row**: Description (p) - Newsletter description text
- **Third row** (optional): Email input placeholder text

## Behavior Patterns

### Form Submission

- **Email Validation**: Built-in HTML5 email validation
- **API Integration**: Attempts to use `subscribeEmailToNewsletter` API if available
- **Fallback**: Falls back to `/commerce/subscribe-newsletter` endpoint
- **User Feedback**: Shows success/error messages on button
- **Form Reset**: Automatically resets form after successful submission

### Visual Structure

- **Gradient Background**: Blue gradient background
- **Centered Layout**: Content centered with max-width of 600px
- **Responsive Form**: Stacks vertically on mobile devices
- **Button States**: Visual feedback for loading, success, and error states

## Styling

The block uses:
- `--primary-color` for gradient background
- `--spacing-*` variables for consistent spacing
- `--border-radius` for rounded corners
- Responsive breakpoints at 768px

## API Integration

The block attempts to integrate with the newsletter subscription API:
- Primary: `window.subscribeEmailToNewsletter(email)`
- Fallback: POST to `/commerce/subscribe-newsletter` with JSON body `{ email }`
