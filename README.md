# Sovereignty Logistics Website

First Nations-owned logistics company website. Commercial-first presentation with deep social impact mission.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed ([Download here](https://nodejs.org/))
- A code editor (VS Code recommended)
- Basic terminal/command line knowledge

### Installation

1. **Clone this repository**
```bash
git clone https://bitbucket.org/indigenousfuturesfoundation/sovereignty-logistics.git
cd sovereignty-logistics
```

2. **Install dependencies**
```bash
npm install
```

3. **Run the development server**
```bash
npm run dev
```

4. **Open your browser**
   - Go to `http://localhost:3000`
   - You should see the website running locally

## 📁 Project Structure

```
sovereignty-logistics/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Root layout (wraps all pages)
│   ├── page.tsx             # Homepage
│   └── globals.css          # Global styles
├── components/              # Reusable React components
│   ├── Navigation.tsx       # Top navigation bar
│   ├── Hero.tsx            # Hero section with stats
│   ├── Fleet.tsx           # Road & Sea fleet showcase
│   ├── Impact.tsx          # Impact dashboard with data
│   ├── Hub.tsx             # Food Sovereignty Hub section
│   └── Footer.tsx          # Footer with contact form
├── public/                  # Static files (images, fonts, etc.)
├── package.json            # Project dependencies
├── next.config.js          # Next.js configuration
├── tailwind.config.js      # Tailwind CSS configuration
└── README.md               # This file
```

## 🛠️ Making Changes

### Adding Images

1. **Add image files to `/public`**
   ```
   public/
   ├── truck.jpg
   ├── barge.jpg
   └── hub.jpg
   ```

2. **Update components to use images**
   - Open `components/Fleet.tsx`
   - Replace the placeholder divs with:
   ```tsx
   <img src="/truck.jpg" alt="Refrigerated B-Double" className="w-full h-full object-cover" />
   ```

### Editing Content

**To change homepage text:**
1. Open `components/Hero.tsx`
2. Find the text you want to change (e.g., "Invisible Infrastructure")
3. Update it and save
4. Browser auto-refreshes with changes

**To update stats:**
1. Open `components/Impact.tsx`
2. Find the stats section
3. Update numbers and descriptions
4. Save file

### Adding New Pages

1. **Create new file in `/app`**
   ```bash
   # Example: About page
   touch app/about/page.tsx
   ```

2. **Add content**
   ```tsx
   export default function About() {
     return (
       <main>
         <h1>About Sovereignty Logistics</h1>
         {/* Your content */}
       </main>
     )
   }
   ```

3. **Access at** `http://localhost:3000/about`

### Customizing Colors

1. Open `tailwind.config.js`
2. Update the `colors` section:
   ```js
   colors: {
     primary: '#000000',  // Change to your brand color
     secondary: '#ffffff',
   }
   ```

## 🌐 Deploying to Vercel

### First Time Setup

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Login to Vercel**
   ```bash
   vercel login
   ```

3. **Deploy**
   ```bash
   vercel
   ```

4. **Follow the prompts:**
   - Set up and deploy? **Y**
   - Which scope? Select your account
   - Link to existing project? **N**
   - What's your project name? **sovereignty-logistics**
   - In which directory is your code? **./`
   - Want to override settings? **N**

5. **Your site is live!**
   - Vercel will provide a URL like `sovereignty-logistics.vercel.app`
   - Every time you push to Bitbucket, Vercel auto-deploys

### Subsequent Deployments

After initial setup, just push to Bitbucket:
```bash
git add .
git commit -m "Updated homepage content"
git push
```

Vercel will automatically deploy your changes.

## 📝 Common Tasks

### Update Navigation Links
- **File:** `components/Navigation.tsx`
- **What to change:** Link text and `href` attributes

### Change Contact Email
- **File:** `components/Footer.tsx`
- **What to change:** Email address in contact section

### Add New Job Posting
- **File:** `components/Hub.tsx`
- **What to change:** Add new job card in "Current Opportunities" section

### Update Social Impact Stats
- **File:** `components/Impact.tsx`
- **What to change:** Numbers in stats grid

## 🐛 Troubleshooting

### "Module not found" error
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

### Port 3000 already in use
```bash
# Use a different port
npm run dev -- -p 3001
```

### Changes not showing up
1. Hard refresh browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Check terminal for errors
3. Restart dev server: `Ctrl+C` then `npm run dev`

### Build fails on Vercel
- Check the build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Test build locally: `npm run build`

## 📚 Learning Resources

- **Next.js Docs:** https://nextjs.org/docs
- **Tailwind CSS:** https://tailwindcss.com/docs
- **React Tutorial:** https://react.dev/learn
- **Vercel Deployment:** https://vercel.com/docs

## 🔒 Important Notes

- **Never commit** `.env` files with sensitive data
- **Test locally** before pushing to production
- **Keep dependencies updated:** `npm update`
- **Backup before major changes**

## 💬 Need Help?

- Bitbucket Issues: Report bugs or request features
- Email: contact@sovereigntylogistics.com.au

## 📄 License

© 2026 Indigenous Futures Foundation. All rights reserved.
