# Environment Setup for Brevo Integration

To enable the quote form backend integration (Lead creation, Admin Notification, Auto-reply), you need to configure the following environment variables in your `.env.local` file.

1.  **Get your Brevo API Key**:
    *   Go to [Brevo API Keys](https://app.brevo.com/settings/keys/api)
    *   Create a new API Key.

2.  **Edit/Create `.env.local`**:
    Add the following lines:

    ```env
    # Brevo (Sendinblue) Configuration
    BREVO_API_KEY=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

    # Email Configuration
    BREVO_SENDER_EMAIL=ozgun@millenwork.com
    BREVO_ADMIN_EMAIL=ozgun@millenwork.com
    ```

3.  **Restart the server**:
    If the development server is running, restart it to load the new environment variables.
