const transporter = require("../config/nodemailer");

const sendMail = async (email, subject, htmlContent) => {
    const mailOptions = {
        from: '"Akshat Kumar Jain" <akshatjain1601@gmail.com>', // Update with your email
        to: email,
        subject,
        html: htmlContent || undefined, // Use HTML if provided, otherwise undefined
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        return info;
    } catch (error) {
        throw new Error("Error sending email");
    }
};

module.exports = sendMail;
