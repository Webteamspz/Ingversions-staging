// server.js
const express = require("express");
const bodyParser = require("body-parser");
const fs = require("fs");
const path = require("path");
const XLSX = require("xlsx");

// Create the Express app
const app = express();
const port = process.env.PORT || 8000; // You can choose any port, e.g., 5000

// Middleware to parse JSON bodies
app.use(bodyParser.json());

const cors = require("cors");
app.use(cors());


// Path to your Excel file
const excelFilePath = path.join(__dirname, "data.xlsx");

const buildPath = path.join(__dirname, "build");
// 1. Serve all files under build/ as static
app.use(express.static(buildPath));

// Helper function: Load or create workbook
const loadOrCreateWorkbook = () => {
  let workbook;
  
  if (fs.existsSync(excelFilePath)) {
    // If file exists, read it
    workbook = XLSX.readFile(excelFilePath);
  } else {
    // Otherwise create a new workbook and a worksheet
    workbook = XLSX.utils.book_new();
    const wsData = [["Full Name", "Email", "Message"]]; // header row
    const worksheet = XLSX.utils.aoa_to_sheet(wsData);
    XLSX.utils.book_append_sheet(workbook, worksheet, "Submissions");
  }
  
  return workbook;
};

// Define the endpoint to handle form data from your React app
app.post("/api/save-to-excel", (req, res) => {
  const { fullName, email, message } = req.body;
  
  if (!fullName || !email || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }
  
  try {
    // Load or create the workbook
    const workbook = loadOrCreateWorkbook();
    const worksheet = workbook.Sheets["Submissions"];

    // Convert the worksheet to JSON to get existing rows
    const existingData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

    // Append the new data row
    existingData.push([fullName, email, message]);

    // Convert updated array back to a worksheet
    const updatedWorksheet = XLSX.utils.aoa_to_sheet(existingData);
    workbook.Sheets["Submissions"] = updatedWorksheet;

    // Write the updated workbook to disk
    XLSX.writeFile(workbook, excelFilePath);

    res.status(200).json({ message: "Data saved successfully." });
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).json({ error: "Internal server error." });
  }
});
// GET route to retrieve data
app.get("/api/save-to-excel", (req, res) => {
    try {
      const workbook = loadOrCreateWorkbook();
      const worksheet = workbook.Sheets["Submissions"];
      const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
      res.status(200).json({ submissions: data });
    } catch (error) {
      console.error("Error reading data:", error);
      res.status(500).json({ error: "Internal server error." });
    }
  });
  
  

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
