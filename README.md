# 📈 STOCK TRACK [AI-Powered Stock Market App]

✨ **AI-powered modern stock market app** built with **Next.js**, **Shadcn**, **Better Auth**, and **Inngest**!

Stay ahead in the market with **real-time tracking**, **personalized alerts**, and **AI-driven insights** — all within a beautiful, modern UI all with Signalist Application.

---

## 🚀 Features

### 💹 User Dashboard
- 📊 Track **real-time stock prices**  
- 🔔 Set **personalized alerts** for target prices  
- 🧠 Explore **AI-powered company insights**  
- ⭐ Manage your **watchlists** seamlessly  

### 🛠️ Admin Dashboard
- 🧾 Manage **stocks and company data**  
- 📰 Publish **market news and updates**  
- 👥 Monitor **user activity and engagement**  

---

## ⚡ Event-Driven Workflows (Powered by Inngest)
- ⚙️ **Automated alerts** for stock movements  
- 🧭 **AI-driven daily digests** with key insights  
- 💵 **Earnings notifications** and updates  
- 💬 **Sentiment analysis** from market trends  

---

## 🧑‍💻 Tech Stack

| Layer | Technology |
|-------|-------------|
| Frontend | [Next.js](https://nextjs.org/), [Shadcn UI](https://ui.shadcn.com/) |
| Authentication | [Better Auth](https://better-auth.com/) |
| Database | [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/) |
| Event Processing | [Inngest](https://www.inngest.com/) |
| AI & Automation | Custom AI workflows for insights & notifications |

---

## 🗄️ Database Connection

This application uses MongoDB as its database. Follow these steps to test your database connection:

### Testing the Database Connection

1. **Prerequisites**
   - Make sure you have Node.js installed
   - Ensure your `.env` file contains the correct `MONGODB_URI` value

2. **Run the Test Script**
   ```bash
   npm run test:db
   ```
   or if you're using Yarn:
   ```bash
   yarn test:db
   ```

3. **Interpreting Results**
   - If successful, you'll see a message confirming the connection with details about your database
   - If unsuccessful, an error message will display the reason for the failure

### Troubleshooting Connection Issues

- **Network Issues**: Ensure your network allows connections to MongoDB Atlas (or your MongoDB host)
- **Credentials**: Verify your username and password in the connection string
- **IP Whitelist**: If using MongoDB Atlas, make sure your IP address is whitelisted
- **Database Exists**: Confirm the database you're trying to connect to exists

### Manual Connection Testing

You can also test the connection by starting the development server:

```bash
npm run dev
```

Check the console logs for database connection messages during startup.
