# GitHub Setup Guide

Quick guide to push your project to GitHub and deploy it.

## Step 1: Create a GitHub Repository

1. Go to [GitHub](https://github.com) and log in
2. Click the "+" icon in the top right → "New repository"
3. Fill in the details:
   - **Repository name**: choose a name for your project
   - **Description**: "A beautiful animated date invitation web app"
   - **Visibility**: Public or Private (your choice)
   - **DO NOT** initialize with README, .gitignore, or license (we already have these)
4. Click "Create repository"

## Step 2: Push Your Code to GitHub

Your project is already initialized with Git. Now connect it to GitHub:

```bash
# Add your GitHub repository as the remote origin
# Replace YOUR_USERNAME and YOUR_REPO_NAME with your actual GitHub username and repo name
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Verify the remote was added
git remote -v

# Add all files to git
git add .

# Commit your files
git commit -m "Initial commit: Date invitation app"

# Push to GitHub (use 'main' or 'master' depending on your default branch)
git push -u origin main
```

If you encounter an error about the branch name, try:
```bash
# Rename your branch to main if needed
git branch -M main

# Then push again
git push -u origin main
```

## Step 3: Verify Your Code is on GitHub

1. Refresh your GitHub repository page
2. You should see all your files uploaded
3. The README.md will be displayed automatically

## Step 4: Deploy Your App

Now that your code is on GitHub, you can deploy it to any platform. See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy Options:

**Deploy to Vercel (Easiest):**
1. Go to [vercel.com](https://vercel.com)
2. Click "Import Project"
3. Select your GitHub repository
4. Click "Deploy" (Vercel handles everything automatically)

**Deploy to Railway:**
1. Go to [railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Click "Deploy"

**Deploy to Render:**
1. Go to [render.com](https://render.com)
2. Click "New" → "Web Service"
3. Connect your GitHub repository
4. Configure build and start commands (see DEPLOYMENT.md)
5. Click "Create Web Service"

## Step 5: Set Up Automatic Deployments

All platforms support automatic deployments:
- Every time you push to GitHub, your app will automatically redeploy
- This happens without any additional configuration

## Making Updates

After your initial push, making updates is simple:

```bash
# Make your changes to the code
# ...

# Stage your changes
git add .

# Commit with a descriptive message
git commit -m "Update: improved animation timing"

# Push to GitHub
git push
```

Your deployment platform will automatically detect the changes and redeploy!

## Troubleshooting

### Authentication Issues
If GitHub asks for credentials:
- Use a [Personal Access Token](https://github.com/settings/tokens) instead of your password
- Or set up [SSH keys](https://docs.github.com/en/authentication/connecting-to-github-with-ssh)

### Remote Already Exists Error
If you get "remote origin already exists":
```bash
# Remove the existing remote
git remote remove origin

# Add it again with the correct URL
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
```

### Branch Name Issues
If your default branch is `master` but GitHub expects `main`:
```bash
# Rename your branch
git branch -M main

# Push to main
git push -u origin main
```

## Next Steps

- [ ] Push code to GitHub
- [ ] Set up deployment on your chosen platform
- [ ] Configure custom domain (optional)
- [ ] Set up monitoring (optional)
- [ ] Share your deployed app!

## Useful GitHub Features

### Enable GitHub Actions
The CI workflow is already set up in `.github/workflows/ci.yml`. It will automatically:
- Run type checks on every push
- Test builds on Node.js 18 and 20
- Run on pull requests

### Protect Your Main Branch
1. Go to Settings → Branches
2. Add branch protection rule for `main`
3. Enable "Require pull request reviews before merging"
4. Enable "Require status checks to pass before merging"

### Create Issues and Projects
Use GitHub Issues to track:
- Bugs
- Feature requests
- Enhancements
- Questions

## Resources

- [GitHub Documentation](https://docs.github.com)
- [Git Basics](https://git-scm.com/book/en/v2/Getting-Started-Git-Basics)
- [GitHub Actions](https://docs.github.com/en/actions)

Happy coding! 🚀
