# Gyanrexa

A modern blog platform built with Next.js 16, featuring a clean design and powerful content management capabilities.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 16, React 19, TypeScript, and Tailwind CSS
- **Server Components**: Leveraging Next.js App Router for optimal performance
- **Responsive Design**: Mobile-first approach with responsive layouts
- **Dark Mode**: Built-in light/dark theme switching
- **Authentication**: Supabase-powered authentication system
- **Content Management**: Full-featured author dashboard for creating and managing posts
- **AWS Integration**: S3 storage for media and DynamoDB for some data management
- **SEO Optimized**: Proper metadata and semantic HTML structure

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: Radix UI primitives with custom components
- **Icons**: [Lucide React](https://lucide.dev/)
- **Animations**: [Motion](https://motion.dev/)
- **Authentication**: [Supabase Auth](https://supabase.com/auth)
- **Storage**: [AWS S3](https://aws.amazon.com/s3/) & [DynamoDB](https://aws.amazon.com/dynamodb/)
- **Validation**: [Zod](https://zod.dev/)
- **Notifications**: [Sonner](https://sonner.emilkowal.dev/)

## 📁 Project Structure

```
app/
  ├── [blogUrl]/          # Dynamic blog post pages
  ├── author/             # Author dashboard and post management
  ├── dashboard/          # User dashboard with analytics
  ├── about/              # About page
  ├── contact/            # Contact page
  ├── ...
components/
  ├── custom/             # Custom UI components
  ├── ui/                 # Reusable UI primitives
lib/
  ├── dynamoClient.ts     # DynamoDB client configuration
  ├── s3.ts               # AWS S3 client configuration
utils/
  ├── auth/               # Authentication utilities
  ├── helpers/            # Helper functions
  ├── post/               # Post-related actions
  ├── s3/                 # S3-related utilities
  ├── supabase/           # Supabase client configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 22+
- npm, yarn, or bun
- AWS account for S3 and DynamoDB
- Supabase account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd gyanrexa
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Set up environment variables:
Create a `.env.local` file with your configuration:
```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# AWS
AWS_ACCESS_KEY_ID=your_aws_access_key
AWS_SECRET_ACCESS_KEY=your_aws_secret_key
AWS_REGION=your_aws_region
AWS_S3_BUCKET_NAME=your_s3_bucket_name
AWS_DYNAMODB_TABLE_NAME=your_dynamodb_table_name
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📖 Key Features

### For Readers
- Clean, responsive design that works on all devices
- Dark/light mode toggle
- Category-based content browsing
- Search functionality
- Engaging content presentation

### For Authors
- Dedicated author dashboard
- Post creation and editing interface
- Draft management
- Post analytics and engagement metrics
- Content categorization and status management

### For Administrators
- User management
- Content moderation
- Platform analytics

## 🎨 UI Components

The project includes a comprehensive set of custom UI components:
- Responsive navigation with mobile sidebar
- Interactive post cards with loading skeletons
- Theme-aware components
- Form elements with validation
- Notification system

## 📤 Deployment

The application can be deployed to any platform that supports Next.js:
- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://netlify.com/)
- Self-hosted Node.js server

Build the application:
```bash
bun run build
```

Start the production server:
```bash
bun start
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgements

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Supabase](https://supabase.com/)
- [AWS](https://aws.amazon.com/)