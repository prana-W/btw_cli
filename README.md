# btw_cli

`btw_cli` (btw: _by-the-W_) is a simple and powerful **Command Line Interface (CLI)** designed to help students of National Institute of Technology, Jamshedpur perform various useful tasks directly from your terminal like checking result, attendance, GitHub stats, adding events to Google Calendar, and managing work sessions.

It streamlines productivity with quick commands for time tracking, task scheduling, and result viewing — all accessible without leaving your terminal.

---

## ⚙️ Installation

### 🚀 Quick Global Install (Recommended for Users)

To install `btw_cli` globally and use it from **anywhere** in your terminal:

```bash
npm i -g @prana-w/btw
```

That’s it. You’re ready to go!

> Run commands like `btw result <roll>` or `btw add-event` right from your terminal.  
> 🔍 See [Available Commands](#-available-commands) for the full list.

---

### 🧪 Local Setup for Testing/Contributing (For Developers Only)

If you want to **experiment locally**, test features, or contribute to development — follow the detailed setup instructions below for **Windows** or **Linux** systems.

---

## 🔧 Installation and Setup Guide

### Step 1: Download or Clone the Project

Choose **one** of the following:

#### 🔹 Option 1: Download Zip

1. [Download the ZIP file](https://github.com/prana-W/btw_cli/releases/download/v1.0.0/btw_cli_v1.0.0.zip)
2. Extract it to a location of your choice
3. Open the extracted folder

#### 🔹 Option 2: Clone via Git

```bash
git clone https://github.com/prana-W/btw_cli.git
```

---

### Step 2: Platform-Specific Setup

#### 🪟 For Windows

1. Go to the extracted/cloned `btw_cli` folder
2. Simply **double-click** the file: `setup_windows.bat`

> ⚠️ In case of a warning saying “Windows protected your PC”, click **More info**, swipe left, then **Run Anyway**  
> ⏳ Setup might take several minutes — be patient!

---

#### 🐧 For Linux

1. Open the extracted/cloned `btw_cli` folder in your terminal
2. Run the following command:

```bash
npm run setup
```

> ⚠️ Tested only on Ubuntu  
> ⏳ Setup might take several minutes — be patient!

---

> 💡 **Make sure you have Node.js (v20 or later) installed before running the setup**

---

## 🧰 How to Use

Once installed, you can run commands like:

```bash
btw <command>
```

---

## 🗂️ Available Commands

| Command               | Alias(es)         | Description                                             |
| --------------------- | ----------------- | ------------------------------------------------------- |
| `time`                | `now`, `t`        | Displays the current time                               |
| `start-session`       | `start`, `ss`     | Starts and tracks a focused work session                |
| `end-session`         | `end`, `es`       | Ends the current session and shows the total duration   |
| `session-history`     | `session-h`, `sh` | Shows the history of your last 5 work sessions          |
| `result <roll>`       | –                 | Displays your academic result based on your roll number |
| `add-event`           | `calender`, `cal` | Adds an event to your Google Calendar                   |
| `gh-stats <username>` | `github`, `gh`    | Displays your GitHub Statistics                         |
| `set-sap`             | `sap`             | Set SAP credentials for checking attendance             |
| `attendance`          | `att`, `a`        | Displays attendance in a tabular format                 |

---

## 🛠️ Technology Used

- `Commander`: For building the CLI interface
- `Enquirer`: For interactive prompts
- `Chalk`: For styling the terminal output
- `Ora`: For showing loading spinners
- `Puppeteer`: For web scraping (e.g., GitHub stats, attendance)
- `Conf`: For storing various data like session history
- `DayJS`: For date and time handling
- `Open`: For opening URLs in the default browser
- `Figlet`: For adding ASCII art to terminal output
- `Gradient String`: For gradient-colored terminal output
- `Cli Table3`: For tabular display in terminal

---

## 📦 Contributing

We welcome contributions to this CLI tool! Follow the steps below to get started:

### 🛠️ Setup Instructions

1. **Fork and Clone** this repository:

```bash
git clone https://github.com/prana-W/btw_cli.git
cd btw_cli
```

2. **Create a new branch**:

```bash
git checkout -b your-feature-branch
```

3. **Install dependencies**:

```bash
npm install
```

4. **Run setup script**:

- On **Windows**:

```bash
./setup_windows.bat
```

- On **Linux/macOS**:

```bash
npm run setup
```

---

### ✨ What You Can Contribute

- New features
- Bug fixes
- Code cleanup
- Documentation improvements

Before starting major changes, it is **recommended to [open an issue](https://github.com/prana-W/btw_cli/issues)** and discuss your ideas first.

---

### ✅ Submitting a Pull Request

1. Commit your changes:

```bash
git add .
git commit -m "Add: your feature/fix description"
```

2. Push your branch:

```bash
git push origin your-feature-branch
```

3. Open a **Pull Request** from your fork to the `main` branch of this repository.

---

## 🚧 Coming Up

- Check class skip limit and classes required (like [Attendance Seeker](https://github.com/prana-W/Attendance-Seeker))
- Save credentials like WiFi/email passwords securely via terminal with a master key
- Display upcoming NIT Jamshedpur events like exams, fests, etc., in calendar

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).  
© 2025 Pranaw Kumar

---
