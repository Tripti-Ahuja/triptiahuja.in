# White-Label Portfolio Configuration Guide

This portfolio website is fully configurable through a single JSON file, making it easy to customize for your own use or share as a white-label template.

## Configuration

All customization is done through the `/public/config.json` file. Simply edit this file to change:

### Personal Information
- Name, title, and professional description
- Location and contact details
- Career statistics (years of experience, companies, founding roles)

### Contact Links
- Email address
- Social media profiles (GitHub, LinkedIn, Telegram)
- All links are configurable

### Experience Section
Configure each job with:
- Company name and URL
- Position and duration
- Description and technologies used
- Tags for highlighting key aspects (YC-backed, founding role, etc.)
- Company logos (place images in `/public/logos/`)

### Projects
Add your key projects with:
- Project name and description
- Technologies used
- Project type, user count, or client
- Icon selection (award, users, building)

### Skills & Expertise
Organize your skills into categories:
- AI & Languages
- SaaS & Frameworks  
- Cloud technologies
- Domain expertise areas
- Startup experience highlights

### Education & Publications
- Degree and institution details
- Academic achievements
- Research publications with links

### Calendly Integration
- Configure your Calendly URL
- Customize the call-to-action text

### Visual Customization
The config includes tag color mappings for consistent styling:
- Special tags (YC, Sequoia, AI, Founding, etc.)
- Location tags (automatically styled)
- Industry tags (FinTech, MusicTech, etc.)

## Usage

1. Clone or fork this repository
2. Edit `/public/config.json` with your information
3. Add company logos to `/public/logos/` (optional)
4. Run `npm install` to install dependencies
5. Run `npm run dev` for development
6. Run `npm run build` for production build

## Deployment

The built application can be deployed to any static hosting service:
- Netlify (drag & drop the `dist` folder)
- Vercel
- GitHub Pages
- AWS S3 + CloudFront
- Any web server

## Structure

```
public/
├── config.json          # All configuration data
└── logos/              # Company logos (optional)
    ├── company1.jpg
    └── company2.jpg

src/
├── components/         # React components (no need to edit)
├── utils/
│   └── configLoader.ts # Config loading utility
└── App.tsx            # Main app component
```

## Benefits

- **Easy Customization**: Change everything from one JSON file
- **No Code Changes**: Update content without touching React components
- **White-Label Ready**: Share the template with others who can customize it
- **Type-Safe**: TypeScript interfaces ensure config validity
- **Responsive Design**: Works on all devices out of the box
- **Professional Look**: Clean, modern design that adapts to your content

## Example Config Structure

```json
{
  "personal": {
    "name": "Your Name",
    "title": "Your Title",
    "description": {
      "highlights": ["Skill1", "Skill2"],
      "specialization": "Your specialty",
      "experience": "Your experience",
      "expertise": "Your expertise"
    }
  },
  "contact": {
    "email": "your@email.com",
    "github": "https://github.com/yourusername",
    "linkedin": "https://linkedin.com/in/yourusername",
    "telegram": "https://t.me/yourusername"
  },
  "experiences": [...],
  "projects": [...],
  // ... more configuration
}
```

## License

This template is open source and available for anyone to use and modify.