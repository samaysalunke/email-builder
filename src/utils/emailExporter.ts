import { EmailTemplate, EmailBlock } from '../types';

const generateBlockHtml = (block: EmailBlock): string => {
  const { type, content } = block;
  
  switch (type) {
    case 'header':
      return `
        <div style="padding: 24px; text-align: ${content.alignment}; background-color: ${content.backgroundColor}; color: ${content.textColor};">
          ${content.logoUrl ? `<img src="${content.logoUrl}" alt="Logo" style="height: 48px; margin-bottom: 16px;">` : ''}
          <h1 style="margin: 0 0 8px; font-size: 24px; font-weight: bold;">${content.title}</h1>
          ${content.subtitle ? `<p style="margin: 0; opacity: 0.8;">${content.subtitle}</p>` : ''}
        </div>
      `;
      
    case 'text':
      return `
        <div style="padding: 24px; text-align: ${content.alignment}; background-color: ${content.backgroundColor}; color: ${content.textColor};">
          <p style="margin: 0; font-size: 16px;">${content.text}</p>
        </div>
      `;
      
    case 'image':
      return `
        <div style="padding: 24px; text-align: ${content.alignment};">
          <img src="${content.imageUrl}" alt="${content.altText}" style="max-width: ${content.width};">
        </div>
      `;
      
    case 'button':
      return `
        <div style="padding: 24px; text-align: ${content.alignment};">
          <a href="${content.url}" style="display: inline-block; padding: 12px 24px; background-color: ${content.backgroundColor}; color: ${content.textColor}; text-decoration: none; border-radius: ${content.borderRadius}; font-weight: 500;">
            ${content.text}
          </a>
        </div>
      `;
      
    case 'product':
      return `
        <div style="padding: 24px; background-color: white;">
          <div style="display: flex; gap: 24px; align-items: start;">
            <div style="flex: 1;">
              <img src="${content.imageUrl}" alt="${content.name}" style="width: 100%; border-radius: 4px;">
            </div>
            <div style="flex: 1;">
              <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: 500;">${content.name}</h3>
              <p style="margin: 0 0 16px; color: #666;">${content.description}</p>
              <div style="margin-bottom: 16px;">
                ${content.salePrice 
                  ? `<span style="font-size: 20px; font-weight: bold; margin-right: 8px;">$${content.salePrice}</span>
                     <span style="color: #666; text-decoration: line-through;">$${content.price}</span>`
                  : `<span style="font-size: 20px; font-weight: bold;">$${content.price}</span>`
                }
              </div>
              <a href="${content.buttonUrl}" style="display: inline-block; padding: 8px 16px; background-color: #8B5CF6; color: white; text-decoration: none; border-radius: 4px;">
                ${content.buttonText}
              </a>
            </div>
          </div>
        </div>
      `;
      
    case 'promo':
      return `
        <div style="padding: 24px; text-align: center; background-color: ${content.backgroundColor}; color: ${content.textColor};">
          <h3 style="margin: 0 0 8px; font-size: 18px; font-weight: bold;">${content.title}</h3>
          <p style="margin: 0 0 16px;">${content.description}</p>
          <div style="display: inline-block; padding: 12px 24px; background-color: ${content.highlightColor}; border-radius: 4px; margin-bottom: 12px;">
            <span style="font-family: monospace; font-weight: bold; font-size: 20px; color: white;">${content.code}</span>
          </div>
          ${content.expiryDate ? `
            <p style="margin: 0; font-size: 14px; opacity: 0.8;">
              Valid until ${new Date(content.expiryDate).toLocaleDateString()}
            </p>
          ` : ''}
        </div>
      `;
      
    case 'divider':
      return `
        <div style="padding: 8px 24px;">
          <hr style="margin: 0; border: 0; border-top: ${content.height} ${content.style} ${content.color}; width: ${content.width};">
        </div>
      `;
      
    case 'spacer':
      return `<div style="height: ${content.height};"></div>`;
      
    default:
      return '';
  }
};

export const generateEmailHtml = (template: EmailTemplate): string => {
  const styles = `
    body {
      margin: 0;
      padding: 0;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
      line-height: 1.5;
      color: #333;
    }
    
    img {
      max-width: 100%;
      height: auto;
    }
    
    .email-container {
      max-width: 600px;
      margin: 0 auto;
      background-color: #ffffff;
    }
    
    @media only screen and (max-width: 600px) {
      .email-container {
        width: 100% !important;
      }
    }
  `;

  const head = `
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <title>${template.subject}</title>
      <style>${styles}</style>
    </head>
  `;

  const body = `
    <body>
      <div class="email-container">
        ${template.blocks.map(block => generateBlockHtml(block)).join('')}
      </div>
    </body>
  `;

  return `<!DOCTYPE html><html>${head}${body}</html>`;
};

export const downloadEmailHtml = (template: EmailTemplate) => {
  const html = generateEmailHtml(template);
  const blob = new Blob([html], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `${template.name.toLowerCase().replace(/\s+/g, '-')}.html`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};