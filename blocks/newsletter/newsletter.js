export default function decorate(block) {
  // Get the form elements
  const form = block.querySelector('form');
  if (!form) {
    // If no form exists, create one from the block content
    const content = block.querySelector('.newsletter-content') || block;
    const heading = content.querySelector('h2') || block.querySelector('h1, h2, h3');
    const description = content.querySelector('p');
    const emailInput = content.querySelector('input[type="email"]');
    
    // Create form structure if it doesn't exist
    if (!emailInput) {
      const formElement = document.createElement('form');
      formElement.className = 'newsletter-form';
      
      if (heading) {
        const h2 = document.createElement('h2');
        h2.textContent = heading.textContent;
        heading.replaceWith(h2);
      }
      
      if (description) {
        const p = document.createElement('p');
        p.textContent = description.textContent;
        description.replaceWith(p);
      }
      
      const input = document.createElement('input');
      input.type = 'email';
      input.placeholder = 'Enter your email';
      input.required = true;
      input.setAttribute('aria-label', 'Email address');
      
      const button = document.createElement('button');
      button.type = 'submit';
      button.className = 'button primary';
      button.textContent = 'Subscribe';
      
      formElement.appendChild(input);
      formElement.appendChild(button);
      
      const newsletterContent = document.createElement('div');
      newsletterContent.className = 'newsletter-content';
      if (heading) newsletterContent.appendChild(heading);
      if (description) newsletterContent.appendChild(description);
      newsletterContent.appendChild(formElement);
      
      block.innerHTML = '';
      block.appendChild(newsletterContent);
    }
  }
  
  // Handle form submission
  const newsletterForm = block.querySelector('.newsletter-form') || block.querySelector('form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const emailInput = newsletterForm.querySelector('input[type="email"]');
      const submitButton = newsletterForm.querySelector('button[type="submit"]');
      const email = emailInput?.value.trim();
      
      if (!email) {
        return;
      }
      
      // Disable button during submission
      if (submitButton) {
        submitButton.disabled = true;
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Subscribing...';
        
        try {
          // Check if newsletter API is available
          if (window.subscribeEmailToNewsletter || window.commerce?.subscribeEmailToNewsletter) {
            // Use the commerce API if available
            const subscribeFn = window.subscribeEmailToNewsletter || window.commerce.subscribeEmailToNewsletter;
            await subscribeFn(email);
          } else {
            // Fallback: Use fetch API to submit to newsletter endpoint
            const response = await fetch('/commerce/subscribe-newsletter', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({ email }),
            });
            
            if (!response.ok) {
              throw new Error('Subscription failed');
            }
          }
          
          // Success message
          if (submitButton) {
            submitButton.textContent = 'Subscribed!';
            submitButton.style.backgroundColor = '#10b981';
          }
          
          // Reset form
          newsletterForm.reset();
          
          // Reset button after 3 seconds
          setTimeout(() => {
            if (submitButton) {
              submitButton.textContent = originalText;
              submitButton.style.backgroundColor = '';
              submitButton.disabled = false;
            }
          }, 3000);
          
        } catch (error) {
          console.error('Newsletter subscription error:', error);
          
          // Show error message
          if (submitButton) {
            submitButton.textContent = 'Error - Try Again';
            submitButton.style.backgroundColor = '#ef4444';
            
            setTimeout(() => {
              submitButton.textContent = originalText;
              submitButton.style.backgroundColor = '';
              submitButton.disabled = false;
            }, 3000);
          }
        }
      }
    });
  }
}
