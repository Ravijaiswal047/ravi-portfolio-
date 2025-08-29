# EmailJS Setup Instructions

## Step 1: Create EmailJS Account
1. Go to https://www.emailjs.com/
2. Sign up for a free account
3. Verify your email address

## Step 2: Add Email Service
1. Go to "Email Services" in your dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail recommended)
4. Connect your Gmail account (jravi047@gmail.com)
5. Note down the **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact from {{from_name}}

**Content:**
```
Hello Ravi,

You have received a new message from your portfolio website:

Name: {{from_name}}
Email: {{from_email}}
Message: {{message}}

Best regards,
Your Portfolio Contact Form
```

4. Save the template and note down the **Template ID**

## Step 4: Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## Step 5: Update Environment Variables
Edit the `.env` file in your project root:

```
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id
```

## Step 6: Test the Form
1. Run your development server: `npm run dev`
2. Fill out the contact form
3. Check your email (jravi047@gmail.com) for the message

## Important Notes
- Free plan allows 200 emails/month
- Emails will be sent directly to jravi047@gmail.com
- No server setup required
- Works from any domain once configured
