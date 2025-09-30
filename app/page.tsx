'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  Download,
  Server,
  Cloud,
  Terminal,
  Database,
  Shield,
  Zap,
  Code,
  GitBranch,
  Settings,
  Monitor,
  Globe,
  Cpu,
  HardDrive,
  Network,
  Lock,
  Workflow
} from 'lucide-react';

interface Skill {
  name: string;
  icon: React.ReactNode;
  category: string;
}

interface Experience {
  title: string;
  company: string;
  duration: string;
  description: string[];
}

interface Project {
  title: string;
  description: string;
  technologies: string[];
  github?: string;
  live?: string;
}

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills: Skill[] = [
    { name: 'Docker', icon: <Server className="w-6 h-6" />, category: 'Containerization' },
    { name: 'Kubernetes', icon: <Settings className="w-6 h-6" />, category: 'Orchestration' },
    { name: 'AWS', icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'Azure', icon: <Cloud className="w-6 h-6" />, category: 'Cloud' },
    { name: 'Linux', icon: <Terminal className="w-6 h-6" />, category: 'Operating Systems' },
    { name: 'Ubuntu/CentOS', icon: <Monitor className="w-6 h-6" />, category: 'Operating Systems' },
    { name: 'Terraform', icon: <Code className="w-6 h-6" />, category: 'IaC' },
    { name: 'Ansible', icon: <Workflow className="w-6 h-6" />, category: 'Configuration' },
    { name: 'Jenkins', icon: <GitBranch className="w-6 h-6" />, category: 'CI/CD' },
    { name: 'GitLab CI', icon: <GitBranch className="w-6 h-6" />, category: 'CI/CD' },
    { name: 'Prometheus', icon: <Monitor className="w-6 h-6" />, category: 'Monitoring' },
    { name: 'Grafana', icon: <Monitor className="w-6 h-6" />, category: 'Monitoring' },
    { name: 'Elasticsearch', icon: <Database className="w-6 h-6" />, category: 'Search & Analytics' },
    { name: 'Redis', icon: <Database className="w-6 h-6" />, category: 'Cache' },
    { name: 'PostgreSQL', icon: <Database className="w-6 h-6" />, category: 'Database' },
    { name: 'Nginx', icon: <Globe className="w-6 h-6" />, category: 'Web Server' },
    { name: 'Apache', icon: <Globe className="w-6 h-6" />, category: 'Web Server' },
    { name: 'Bash/Python', icon: <Terminal className="w-6 h-6" />, category: 'Scripting' },
    { name: 'Network Security', icon: <Shield className="w-6 h-6" />, category: 'Security' },
    { name: 'SSL/TLS', icon: <Lock className="w-6 h-6" />, category: 'Security' }
  ];

  const experiences: Experience[] = [
    {
      title: 'Linux System Administrator',
      company: 'Medtronix Systems',
      duration: 'June 2023 - Present',
      description: [
        'Managing daily Linux admin works like SFTP server, installing and updating packages, cleanup activity.',
        'Creating and managing user accounts, groups, and permissions.',
        'Managing new ec2 instance and new Linux machine and configure proper IP address and hostname.',
        'Configure and manage various servers like DNS server, Samba server, Apache server, SMTP server.',
        ' Managing process load and space issues at daily basis via shell scripting.',
        ' Package installation using YUM, RPM and Source code.'
      ]
    },
    {
      title: 'Linux System Administrator (Internship)',
      company: 'Al-Nafi Cloud',
      duration: 'Dec 2022 - May 2023',
      description: [
        'Data backup using rsync and cp commands.',
        'Installing reverse proxy using NGINX cluster.',
        'Set up a load balancer and managed Route 53 to maintain DNS A records, ensuring high availability and efficient traffic distribution',
        'Configure real-time monitoring server Zabbix for server monitoring.',
        'Managed firewall rules using firewalld/IPTables and security group for incoming traffic.',
        'Scheduled automated tasks through CRON.'
      ]
    },
    {
      title: 'Junior DevOps Engineer',
      company: 'StartupTech',
      duration: '2019 - 2020',
      description: [
        'Containerized legacy applications using Docker, improving deployment consistency',
        'Set up automated testing and deployment workflows using GitHub Actions',
        'Managed database operations and performed regular maintenance on PostgreSQL clusters',
        'Collaborated with development teams to implement infrastructure as code practices'
      ]
    }
  ];

  const projects: Project[] = [
    {
      title: 'Deploy Portfolio Web Using Docker',
      description: 'Complete monitoring solution using Prometheus, Grafana, and AlertManager deployed on Kubernetes with auto-scaling capabilities.',
      technologies: ['Cloudflare', 'Docker'],
      github: 'https://github.com/mehmoodmughal73/my_portfolio'
    },
    {
      title: 'Multi-Cloud Infrastructure',
      description: 'Terraform modules for deploying scalable infrastructure across AWS and Azure with automated failover mechanisms.',
      technologies: ['Terraform', 'AWS', 'Azure', 'CloudFormation', 'ARM Templates'],
      github: 'https://github.com/username/multi-cloud-infra'
    },
    {
      title: 'CI/CD Pipeline Automation',
      description: 'Complete CI/CD pipeline with automated testing, security scanning, and deployment to multiple environments.',
      technologies: ['Jenkins', 'Docker', 'SonarQube', 'Ansible', 'Bash'],
      github: 'https://github.com/username/cicd-automation'
    },
    {
      title: 'Log Aggregation System',
      description: 'Centralized logging solution using ELK stack with custom dashboards and alerting for microservices architecture.',
      technologies: ['Elasticsearch', 'Logstash', 'Kibana', 'Filebeat', 'Docker'],
      github: 'https://github.com/username/elk-logging'
    }
  ];


  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Animated IT Background */}
      <div className="fixed inset-0 z-0">
        {/* Matrix-like grid */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 grid-rows-20 h-full w-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="border border-cyan-500/20 animate-pulse"
                style={{
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`
                }}
              />
            ))}
          </div>
        </div>
        
        {/* Floating code elements */}
        <div className="absolute inset-0 overflow-hidden">
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={i}
              className="absolute text-green-400/20 font-mono text-sm animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${10 + Math.random() * 10}s`
              }}
            >
              {['kubectl', 'docker', 'terraform', 'ansible', 'nginx', 'prometheus', 'grafana', 'jenkins'][Math.floor(Math.random() * 8)]}
            </div>
          ))}
        </div>
        
        {/* Floating geometric shapes */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/30 rounded-full animate-ping"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            />
          ))}
        </div>
        
        {/* Circuit-like lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
              <path d="M0 50 L25 50 L25 25 L75 25 L75 75 L100 75" stroke="#00ffff" strokeWidth="1" fill="none" opacity="0.3"/>
              <circle cx="25" cy="50" r="2" fill="#00ffff" opacity="0.5"/>
              <circle cx="75" cy="25" r="2" fill="#00ffff" opacity="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit)"/>
        </svg>
      </div>
      
      {/* Hero Section */}
      <section className="relative overflow-hidden z-10">
        {/* Dynamic Banner Section */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900/30 to-purple-900/20"></div>
        
        <div className={`relative container mx-auto px-6 py-16 lg:py-24 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            
            {/* Left Side - Animated Photo Section */}
            <div className="relative order-2 lg:order-1">
              {/* Main animated photo container */}
              <div className="relative">
                {/* Primary large image */}
                <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl animate-float">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-pulse"></div>
                  <img 
                    src="https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1000"
                    alt="DevOps Infrastructure"
                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
                  
                  {/* Floating overlay info */}
                  <div className="absolute bottom-6 left-6 text-white">
                    <div className="text-lg font-bold mb-1">Cloud Infrastructure</div>
                    <div className="text-sm text-blue-300">Scalable • Reliable • Secure</div>
                  </div>
                </div>
                
                {/* Floating secondary images */}
                <div className="absolute -top-8 -right-8 w-32 h-32 rounded-2xl overflow-hidden shadow-xl animate-float" style={{animationDelay: '1s', animationDuration: '4s'}}>
                  <img 
                    src="https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Server Management"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/30 to-transparent"></div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-2xl overflow-hidden shadow-xl animate-float" style={{animationDelay: '2s', animationDuration: '5s'}}>
                  <img 
                    src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Network Operations"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 to-transparent"></div>
                </div>
                
                <div className="absolute top-1/2 -right-12 w-24 h-24 rounded-xl overflow-hidden shadow-xl animate-float" style={{animationDelay: '0.5s', animationDuration: '6s'}}>
                  <img 
                    src="https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=400"
                    alt="Data Center"
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/30 to-transparent"></div>
                </div>
                
                {/* Animated tech icons */}
                <div className="absolute top-4 left-4 animate-spin-slow">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-blue-500/30">
                    <Server className="w-6 h-6 text-blue-400" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 right-4 animate-pulse">
                  <div className="w-12 h-12 bg-green-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-500/30">
                    <Cloud className="w-6 h-6 text-green-400" />
                  </div>
                </div>
                
                {/* Glowing border effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-lg animate-pulse"></div>
              </div>
            </div>
            
            {/* Right Side - Content */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              {/* Profile Image */}
              <div className="mb-8 flex justify-center lg:justify-start">
                <div className="relative">
                  <div className="w-44 h-44 rounded-2xl overflow-hidden border-4 border-blue-500/30 shadow-2xl hover:shadow-blue-500/30 transition-all duration-300">
                    <img 
                      src="/images/mehmood.jpg"
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 opacity-20 blur-lg animate-pulse"></div>
                </div>
              </div>
              
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Mehmood Ashraf
              </h3>
              <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-relaxed">
                <span className="pb-4 relative inline-block overflow-hidden border-r-2 border-blue-400 pr-2 animate-typing">
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  DevOps Engineer
                </span>
                </span>
              </h1>
              <h2 className="text-xl lg:text-2xl xl:text-3xl text-gray-300 mb-8">
                & Linux System Administrator
              </h2>
              <p className="text-lg lg:text-xl text-gray-400 mb-12 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Passionate about building scalable, reliable infrastructure and automating complex workflows. 
                Experienced in cloud technologies, containerization, and system administration.
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
                <a href="/resume/mehmood-cv.pdf" download target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 shadow-lg hover:shadow-xl transition-all duration-300">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
                </a>
                <a href="mailto:mehmood.devopsengineer@gmail.com">
                <Button variant="outline" size="lg" className="border-gray-600 text-black-300 hover:bg-gray-800 hover:border-blue-500 px-8 py-3 transition-all duration-300">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Me
                </Button>
                </a>
              </div>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto lg:mx-0">
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-blue-400">3+</div>
                  <div className="text-sm text-gray-400">Years Exp</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-green-400">10+</div>
                  <div className="text-sm text-gray-400">Projects</div>
                </div>
                <div className="text-center lg:text-left">
                  <div className="text-2xl font-bold text-purple-400">99.9%</div>
                  <div className="text-sm text-gray-400">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Expertise</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Mastery across the entire DevOps ecosystem - from infrastructure to deployment
            </p>
          </div>

          {/* Skills Grid Layout */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className="group relative bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm border border-slate-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Skill Icon */}
                <div className="flex items-center justify-center mb-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-blue-500/20 to-purple-500/20 group-hover:from-blue-500/30 group-hover:to-purple-500/30 transition-all duration-300">
                    <div className="text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                      {skill.icon}
                    </div>
                  </div>
                </div>
                
                {/* Skill Name */}
                <h3 className="text-white font-semibold text-center text-sm mb-2 group-hover:text-blue-300 transition-colors duration-300">
                  {skill.name}
                </h3>
                
                {/* Category Badge */}
                <div className="text-center">
                  <span className="inline-block px-2 py-1 text-xs text-gray-400 bg-slate-700/50 rounded-full group-hover:bg-blue-500/20 group-hover:text-blue-300 transition-all duration-300">
                    {skill.category}
                  </span>
                </div>
                
                {/* Hover Effect Overlay */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            ))}
          </div>
          
          {/* Skills Summary */}
          <div className="mt-16 text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-blue-400 mb-2">3+</div>
                <div className="text-gray-300 text-sm">Years Experience</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-green-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Technologies</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-purple-400 mb-2">20+</div>
                <div className="text-gray-300 text-sm">Projects Deployed</div>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-lg p-6">
                <div className="text-3xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-sm">Uptime Achieved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-slate-900/50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Journey through various roles in DevOps and system administration
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-1">{exp.title}</CardTitle>
                      <CardDescription className="text-blue-400 text-lg">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-blue-500 text-blue-400 mt-2 lg:mt-0 self-start lg:self-center">
                      {exp.duration}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {exp.description.map((item, idx) => (
                      <li key={idx} className="text-gray-300 flex items-start">
                        <Zap className="w-4 h-4 text-blue-400 mr-3 mt-1 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Featured Projects</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Some of the infrastructure and automation projects I've worked on
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="bg-slate-800/50 border-slate-700 backdrop-blur-sm hover:bg-slate-800/70 transition-all duration-300 group">
                <CardHeader>
                  <CardTitle className="text-white text-xl group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400 text-base leading-relaxed">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-slate-700/50 text-gray-300 text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-4">
                    {project.github && (
                      <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      >
                      <Button variant="outline" size="sm" className="border-gray-600 text-black-300 hover:bg-gray-800">
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                      </a>
                    )}
                    {project.live && (
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                        <Globe className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900/50 relative z-10">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Get In Touch</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Always interested in discussing new opportunities and challenging projects
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-5 h-5 text-blue-400 mr-3" />
                    <span>mehmood.devopsengineer@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-5 h-5 text-blue-400 mr-3" />
                    <span>+92 (334) 2782782</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-5 h-5 text-blue-400 mr-3" />
                    <span>73/4R Tehsil & District Sahiwal, Punjab, Pakistan</span>
                  </div>
                  <Separator className="my-6 bg-slate-600" />
                  <div className="flex space-x-4">
                    <a href="https://github.com/mehmoodmughal73" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <Github className="w-5 h-5" />
                    </Button>
                    </a>
                    <a href="https://linkedin.com/in/mehmood-ashraf" target="_blank" rel="noopener noreferrer">
                    <Button variant="ghost" size="sm" className="text-gray-400 hover:text-blue-400">
                      <Linkedin className="w-5 h-5" />
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-slate-800/50 border-slate-700 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-white text-xl">Current Focus</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start text-gray-300">
                    <Settings className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Cloud Architecture</div>
                      <div className="text-sm">Designing scalable multi-cloud solutions</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Shield className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Security Automation</div>
                      <div className="text-sm">Implementing DevSecOps practices</div>
                    </div>
                  </div>
                  <div className="flex items-start text-gray-300">
                    <Cpu className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold text-white">Performance Optimization</div>
                      <div className="text-sm">Enhancing system efficiency and reliability</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700 relative z-10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2025 Mehmood Ashraf - DevOps Engineer & Linux System Administrator. Sahiwal, Punjab, Pakistan.
          </p>
        </div>
      </footer>
    </div>
  );
}