#!/bin/bash
# PUSH TO BITBUCKET - Run this on YOUR computer after extracting files

echo "🚀 Pushing Sovereignty Logistics to Bitbucket..."

# Initialize git if needed
if [ ! -d ".git" ]; then
    git init
    git branch -m main
fi

# Configure git
git config user.email "contact@sovereigntylogistics.com.au"
git config user.name "Indigenous Futures Foundation"

# Stage all files
git add .

# Commit
git commit -m "Initial commit: Complete Sovereignty Logistics website

- Next.js 16 with TypeScript and Tailwind CSS
- Hero section with Invisible Infrastructure concept
- Fleet showcase (Road & Sea capabilities)
- Impact Dashboard with real-time stats
- Food Sovereignty Hub with training programs
- Professional contact form
- Archive Room teaser section
- Mobile-responsive design
- Commercial-focused CTAs
- Beginner-friendly README"

# Add remote
git remote remove origin 2>/dev/null
git remote add origin https://bitbucket.org/indigenousfuturesfoundation/sovereignty-logistics.git

# Push
echo ""
echo "Username: indigenousfuturesfoundation"
echo "Password: ATATT3xFfGF0-uUiOzuwTAAWEtO99fUzNRl3riSkd_qWkF00IkCbV8H9IYyuo8YJh1kgwudrRCIsulV6KyqNr5LWssbalcdiu5MxBFTUvL5e2UNbgc548pZ2DF9R19gft8dyCWt7IR0TdY9FmPf8fwHIBxvJGoKnXAsW0kGiEoioL_k-DUpQH48=9D656759"
echo ""
echo "Pushing to Bitbucket..."

git push -u origin main

echo ""
echo "✅ DONE! Your code is on Bitbucket."
echo "Next step: Connect to Vercel at https://vercel.com"
