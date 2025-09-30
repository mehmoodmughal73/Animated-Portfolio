# DevOps Engineer Portfolio

A professional portfolio website for DevOps engineers and Linux system administrators built with Next.js, featuring a modern dark theme and complete Docker containerization.

## 🚀 Features

- **Modern Dark Theme**: Professional design with animated backgrounds and smooth transitions
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Skills Showcase**: Comprehensive display of DevOps tools, cloud platforms, and Linux expertise
- **Experience Timeline**: Professional experience with detailed achievements
- **Projects Gallery**: Featured infrastructure and automation projects
- **Docker Ready**: Complete containerization setup with Docker and docker-compose
- **Production Ready**: Optimized build configuration with Nginx reverse proxy option

## 🛠 Tech Stack

- **Frontend**: Next.js 13, React 18, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **Icons**: Lucide React
- **Containerization**: Docker, Docker Compose
- **Web Server**: Nginx (optional)
- **Deployment**: Static export for easy hosting

## 🏃‍♂️ Quick Start

### Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

### Docker Development

```bash
# Build and run with Docker Compose
docker-compose up --build

# Run in detached mode
docker-compose up -d

# View logs
docker-compose logs -f
```

### Production with Nginx

```bash
# Run with Nginx reverse proxy
docker-compose --profile with-nginx up -d
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file for local development:

```env
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTACT_EMAIL=your.email@domain.com
NEXT_PUBLIC_GITHUB_URL=https://github.com/yourusername
NEXT_PUBLIC_LINKEDIN_URL=https://linkedin.com/in/yourusername
```

### SSL Configuration (for Nginx)

1. Place your SSL certificates in the `ssl/` directory:
   - `ssl/cert.pem` - SSL certificate
   - `ssl/key.pem` - Private key

2. Update `docker-compose.yml` to mount the SSL directory

### Customization

Update the following files to personalize your portfolio:

- `app/page.tsx` - Main content, skills, experience, projects
- `app/layout.tsx` - Meta tags, site title, description
- `public/` - Add your resume, favicon, and other assets

## 📁 Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx          # App layout and metadata
│   └── page.tsx            # Main portfolio page
├── components/
│   └── ui/                 # shadcn/ui components
├── lib/
│   └── utils.ts           # Utility functions
├── public/                # Static assets
├── docker-compose.yml     # Docker Compose configuration
├── Dockerfile            # Docker build configuration
├── nginx.conf           # Nginx configuration
├── .dockerignore       # Docker ignore rules
└── README.md          # This file
```

## 🐳 Docker Commands

```bash
# Build the image
docker build -t devops-portfolio .

# Run container
docker run -p 3000:3000 devops-portfolio

# Run with docker-compose
docker-compose up

# Stop containers
docker-compose down

# View container logs
docker logs devops-portfolio

# Execute shell in container
docker exec -it devops-portfolio sh
```

## 🔍 Health Checks

The application includes health checks to monitor container status:

- **Application**: HTTP check on port 3000
- **Nginx**: Process and port checks
- **Docker Compose**: Built-in health check configuration

## 📋 Deployment Options

### Static Hosting
- Vercel, Netlify, GitHub Pages
- Build with `npm run build` and deploy the `out/` directory

### Container Platforms
- AWS ECS, Google Cloud Run, Azure Container Instances
- Use the provided Docker configuration

### Virtual Private Server
- Deploy using Docker Compose on any Linux VPS
- Includes Nginx configuration for production use

## 🔒 Security Features

- **Content Security Policy**: Prevents XSS attacks
- **HTTPS Redirect**: Automatic HTTP to HTTPS redirection
- **Security Headers**: X-Frame-Options, X-Content-Type-Options, etc.
- **Non-root User**: Container runs as non-privileged user
- **Resource Limits**: Configurable CPU and memory limits

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Support

For questions or support, please open an issue in the GitHub repository.

---

Built with ❤️ for the DevOps community