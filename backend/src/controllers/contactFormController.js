const path = require("path");
const ejs = require("ejs");
const sendMail = require("../services/mailService");

const contactFormController = async (req, res) => {
    const { name, email, message } = req.body;
    try {
        // Load email templates
        const [userTemplate, adminTemplate] = await Promise.all([
            ejs.renderFile(path.join(__dirname, "../emails/templates/userTemplate.ejs"), { name }),
            ejs.renderFile(path.join(__dirname, "../emails/templates/adminTemplate.ejs"), { name, email, message }),
        ]);

        // Send emails
        const [userMailInfo, adminMailInfo] = await Promise.all([
            sendMail(email, `Thank You ${name} for Reaching Out!`, userTemplate),
            sendMail("akshatjain1601@gmail.com", "Portfolio Contact Form Submission", adminTemplate),
        ]);

        res.status(200).json({ userMailInfo, adminMailInfo });
    } catch (error) {
        console.error("Email sending error:", error);
        res.status(500).json({ message: "Error sending email" });
    }
};

module.exports = contactFormController;
