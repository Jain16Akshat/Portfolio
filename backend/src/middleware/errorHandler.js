// Error handling middleware
const errorHandler = (err, req, res, next) => {
    console.error("Error:", err.message); // Logs the error to the console
    res.status(500).json({ message: err.message || "Internal Server Error" });
};

module.exports = errorHandler;
