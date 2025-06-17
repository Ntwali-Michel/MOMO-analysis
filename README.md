# Summary

An enterprise-level fullstack web application for processing, storing, and analysing mobile money (MoMo) SMS data from MTN Rwanda. This system parses raw XML messages, categorizes transactions, saves them in a relational database, and provides a clean, interactive dashboard for data exploration.

 # Features
XML Data Parser: Extracts useful transaction info from MTN MoMo SMS messages.

Data Cleaning: Formats and categorizes SMS messages into types like deposits, withdrawals, airtime purchases, and more.

Relational Database Storage: Saves structured transaction data in a secure SQL database.

Interactive Web Dashboard: Lets users view, filter, and explore transaction data.

Data Visualizations: Includes charts and summaries (e.g., transaction trends, volume by category).

Search & Sort: Easily search by name, amount, or transaction type.

# Technology Stack
Layer	Tech
Frontend	HTML, CSS, JavaScript
Charts	Chart.js
Backend	Python (FastAPI)
Database	SQLite (can support PostgreSQL/MySQL)
Parsing	Python's xml.etree.ElementTree, re

# How to Run the Project

📍 Hosted Dashboard (GitHub Pages)

Note: Replace the above link with your actual GitHub Pages URL

1. Clone the Repository
bash
Copy code
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
2. Backend Setup (Python + FastAPI)

 code
pip install -r requirements.txt
uvicorn main:app --reload
3. Frontend Setup
If you're running locally, open the frontend manually:

 code
# Option 1: Open the file
open docs/index.html

# Option 2: Use Python to serve it
cd docs
python -m http.server 8000

🎥 Video Demonstration
🎬 Watch the full 5-minute walkthrough: [Link to video]
The video includes architecture, demo, schema explanation, and how to use the dashboard.

Author
Ntwali Michel

Developer & Designer

 License
This project is built for educational purposes and is not affiliated with MTN Group.

