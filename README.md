# DealHunt AI - Voice-Powered Smart Reseller Agent

![DealHunt AI Logo](https://images.unsplash.com/photo-1556745753-b2904692b3cd?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300&q=80)

## 🚀 Live Demo

**[View Live Demo on Render](https://dealhunt-ai.onrender.com)**

## 📋 Overview

DealHunt AI is a voice-powered shopping assistant that:

1. Talks to users about their shopping preferences (e.g., "I want sneakers under ₹10k, deliver in 2 days")
2. Simulates calls with multiple sellers to gather offers
3. Compares all offers based on price, delivery time, and seller ratings
4. Sends users an email with the top 3 best offers
5. Provides data visualization to help users make informed decisions

## ✨ Key Features

- **Voice-Powered Search**: Using OmniDimension's AI to understand natural language shopping requests
- **Real-time Deal Comparison**: Compare offers across multiple parameters
- **Interactive Data Visualization**: See price vs. delivery time charts
- **Email Summaries**: Get the best deals sent directly to your inbox
- **Responsive Design**: Works seamlessly on mobile and desktop

## 🛠️ Technology Stack

- **Frontend**: React, Vite, TailwindCSS, shadcn/ui
- **Backend**: Node.js, Express
- **Voice Processing**: OmniDimension API
- **State Management**: React Query
- **Email Service**: SendGrid
- **Deployment**: Render

## 🧠 How It Works

1. **Voice Input**: Users describe what they're looking for using natural language
2. **AI Processing**: The voice input is processed using OmniDimension's API
3. **Deal Fetching**: The system contacts multiple sellers (simulated in this demo)
4. **Comparison & Analysis**: Deals are sorted and ranked based on user preferences
5. **Email Delivery**: Top deals are formatted and sent to the user's email

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16+)
- npm or yarn

### Installation Steps

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/dealhunt-ai.git
   cd dealhunt-ai
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Add your OmniDimension API key: `VITE_OMNIDIMENSION_API_KEY=your_key_here`

4. Run the development server:
   ```
   npm run dev
   ```

5. Open your browser at `http://localhost:5000`

## 🚀 Deployment

### Deploying to Render

1. Fork or clone this repository to your GitHub account
2. Sign up for a [Render account](https://render.com)
3. Create a new Web Service and connect your GitHub repository
4. Use the following settings:
   - **Environment**: Node
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`
5. Add the `OMNIDIMENSION_API_KEY` environment variable in the Render dashboard
6. Deploy your application

## 📱 Usage Guide

1. **Voice Search**: Click the microphone button and speak your shopping preference
2. **View Deals**: Browse through the matched deals from different sellers
3. **Sort & Filter**: Use the sorting options to find the best match for your needs
4. **Compare Visually**: Check the price vs. delivery time chart
5. **Get Email Summary**: Click "Email Me These Deals" to receive a summary

## 📊 Data Visualization

The app includes interactive visualizations to help users compare:

- Price comparisons across sellers
- Delivery time analysis
- Seller ratings and trust metrics
- Price vs. delivery time correlation

## 🔒 Privacy & Security

- Voice data is processed securely and never stored
- All API communications are encrypted
- User preferences are stored locally only during the session

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgements

- [OmniDimension](https://www.omnidim.io/) for the voice AI technology
- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Unsplash](https://unsplash.com/) for the stunning images
- [Render](https://render.com/) for hosting the application

---

Created with ❤️ by [Your Name]